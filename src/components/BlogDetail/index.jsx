import { useParams, Link } from 'react-router-dom';
import blogPosts from '../../data/blogData';
import MarkdownRenderer from '../MarkdownRenderer';
import { ArrowLeftIcon } from '../Icons';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4 text-white">找不到文章</h1>
        <p className="mb-6 text-gray-300">抱歉，您請求的文章不存在。</p>
        <Link 
          to="/blog" 
          className="mt-8 inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          返回文章列表
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Link 
        to="/blog" 
        className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 group"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
        返回文章列表
      </Link>

      <article className="max-w-4xl mx-auto bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8 shadow-xl">
        <header className="mb-6 md:mb-8 border-b border-gray-700 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-400 text-sm">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {post.date}
            </span>
            <span className="bg-blue-900/60 text-blue-200 px-3 py-1 rounded-full">{post.category}</span>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="inline-block bg-gray-700/70 text-gray-300 rounded-full px-3 py-1 text-xs">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed blog-content">
          <MarkdownRenderer content={post.content} />
        </div>
      </article>
    </div>
  );
};

export default BlogDetail; 