import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Collapsible from '../Collapsible';
import mermaid from 'mermaid';

// 初始化mermaid
mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'monospace',
});

const MermaidRenderer = ({ content }) => {
  const elementId = `mermaid-${Math.random().toString(36).substring(2, 10)}`;
  
  useEffect(() => {
    mermaid.contentLoaded();
  }, [content]);
  
  return (
    <div className="my-4 bg-gray-800/50 p-4 rounded-lg">
      <div className="mermaid" id={elementId}>
        {content}
      </div>
    </div>
  );
};

const MarkdownRenderer = ({ content }) => {
  // 處理內容中的折疊標題
  const processCollapsibleTitles = (content) => {
    // 匹配 ### [折疊] 標題名
    const collapsiblePattern = /^### \[折疊\](.*$)/gm;
    
    let processedContent = content;
    const collapsibleMatches = [...content.matchAll(collapsiblePattern)];
    
    // 如果找到折疊標題，進行處理
    if (collapsibleMatches.length > 0) {
      for (const match of collapsibleMatches) {
        const fullMatch = match[0];
        const titleText = match[1].trim();
        
        // 定義一個唯一標記，用於後續在React組件中替換
        const placeholder = `%%COLLAPSIBLE_TITLE_${Math.random().toString(36).substr(2, 9)}%%${titleText}%%`;
        
        // 替換原始內容中的折疊標題
        processedContent = processedContent.replace(fullMatch, placeholder);
      }
    }
    
    return processedContent;
  };

  // 處理後的內容
  const processedContent = processCollapsibleTitles(content);

  return (
    <div className="markdown-content text-gray-300">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => <h1 className="text-3xl font-bold my-4 text-white" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-2xl font-bold my-3 text-white" {...props} />,
          h3: ({ node, children, ...props }) => {
            // 檢查是否是折疊標題的占位符
            const childrenStr = children?.toString() || '';
            if (childrenStr.startsWith('%%COLLAPSIBLE_TITLE_')) {
              const titleMatch = childrenStr.match(/%%COLLAPSIBLE_TITLE_[a-z0-9]{9}%%(.*?)%%/);
              if (titleMatch) {
                const title = titleMatch[1];
                // 在下一個渲染週期中，我們需要找到並處理這個折疊標題的內容
                // 這裡簡單返回一個占位符，之後會在外部進行處理
                return <Collapsible key={titleMatch[0]} title={title}>接下來的內容</Collapsible>;
              }
            }
            return <h3 className="text-xl font-bold my-2 text-white" {...props}>{children}</h3>;
          },
          h4: ({ node, ...props }) => <h4 className="text-lg font-bold my-2 text-white" {...props} />,
          p: ({ node, ...props }) => <p className="my-3" {...props} />,
          a: ({ node, ...props }) => <a className="text-blue-400 hover:text-blue-300 underline" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-5 my-3" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-5 my-3" {...props} />,
          li: ({ node, ...props }) => <li className="my-1" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-gray-800/40 italic" {...props} />
          ),
          hr: ({ node, ...props }) => <hr className="my-6 border-gray-700" {...props} />,
          img: ({ node, ...props }) => <img className="max-w-full h-auto my-4 rounded-md" {...props} />,
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            // 如果是mermaid語法，使用特殊渲染器
            if (!inline && match && match[1] === 'mermaid') {
              return <MermaidRenderer content={String(children).replace(/\n$/, '')} />;
            }
            return !inline && match ? (
              <SyntaxHighlighter
                style={atomDark}
                language={match[1]}
                PreTag="div"
                className="rounded-md my-4"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className="bg-gray-800 px-1.5 py-0.5 rounded-md text-sm font-mono" {...props}>
                {children}
              </code>
            );
          },
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full divide-y divide-gray-700" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => <thead className="bg-gray-800" {...props} />,
          tbody: ({ node, ...props }) => <tbody className="divide-y divide-gray-700" {...props} />,
          tr: ({ node, ...props }) => <tr className="transition-colors hover:bg-gray-700/50" {...props} />,
          th: ({ node, ...props }) => (
            <th 
              className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider" 
              {...props} 
            />
          ),
          td: ({ node, ...props }) => <td className="px-4 py-3 whitespace-nowrap" {...props} />,
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer; 