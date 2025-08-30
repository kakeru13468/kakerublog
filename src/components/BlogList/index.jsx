import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../../data/blogData';

const BlogList = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 標題 + 篩選器 */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0 text-white">文章列表</h1>
        
        <div className="flex overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              className={`mr-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                filter === cat 
                ? 'bg-gray-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? '全部文章' : cat}
            </button>
          ))}
        </div>
      </div>
      
      {/* 卡片區域 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map(post => (
          <Link 
            to={`/blog/${post.id}`} 
            key={post.id} 
            className="block group h-full"
          >
            <div 
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
            >
              {post.imageUrl && (
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              )}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-400 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 
                        00-2 2v10a2 2 0 002 2h12a2 2 0 
                        002-2V6a2 2 0 00-2-2h-1V3a1 
                        1 0 10-2 0v1H7V3a1 1 0 
                        00-1-1zm0 5a1 1 0 000 
                        2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="bg-blue-900/60 text-blue-200 text-xs px-3 py-1 rounded-full font-medium">{post.category}</span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 line-clamp-2 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow line-clamp-3">{post.summary}</p>
                
                <div className="mb-4 flex flex-wrap">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-700/70 text-gray-300 rounded-full px-3 py-1 text-xs mr-2 mb-2 group-hover:bg-blue-800/60 group-hover:text-blue-200 transition-all duration-150">
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="inline-block bg-gray-600/80 text-gray-200 rounded-full px-3 py-1 text-xs mr-2 mb-2">
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="mt-auto">
                  <span className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300 text-sm">
                    閱讀更多
                    <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredPosts.length === 0 && (
        <div className="text-center py-12 col-span-full">
          <p className="text-xl text-gray-300">沒有找到相關文章</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => setFilter('all')}
          >
            查看所有文章
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
