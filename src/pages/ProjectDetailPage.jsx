import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projectData';
import { ArrowLeftIcon, ExternalLinkIcon, GitHubIcon } from '../components/Icons';
import MarkdownRenderer from '../components/MarkdownRenderer';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="container mx-auto p-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-red-500">哎呀！專案不存在</h1>
        <p className="text-gray-400 mt-4">您所尋找的專案可能已被移除或路徑錯誤。</p>
        <Link to="/project" className="mt-8 inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          返回專案列表
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Link to="/project" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 group">
        <ArrowLeftIcon className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
        返回專案列表
      </Link>

      <article className="max-w-4xl mx-auto bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8 shadow-xl">
        <header className="mb-6 md:mb-8 border-b border-gray-700 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-400 text-sm">
            <span className="bg-blue-900/60 text-blue-200 px-3 py-1 rounded-full">專案</span>
            {project.tech && project.tech.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span key={index} className="inline-block bg-gray-700/70 text-gray-300 rounded-full px-3 py-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>
        
        {project.imageUrl && (
          <img 
            src={project.imageUrl.replace('../public', '')} 
            alt={project.title} 
            className="w-full h-auto max-h-[450px] object-contain rounded-lg shadow-lg mb-6 md:mb-8 bg-gray-700/20 p-1 border border-gray-600"
          />
        )}

        <div className="prose prose-invert prose-lg max-w-none mb-6 md:mb-8 text-gray-300 leading-relaxed project-content">
          <MarkdownRenderer content={project.longDescription} />
        </div>
        
        {(project.liveUrl && project.liveUrl !== '#' || project.repoUrl && project.repoUrl !== '#') && (
          <footer className="border-t border-gray-700 pt-6 mt-6 md:mt-8">
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && project.liveUrl !== '#' && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-green-500/30 text-sm"
                >
                  <ExternalLinkIcon className="w-5 h-5 mr-2" />
                  線上預覽
                </a>
              )}
              {project.repoUrl && project.repoUrl !== '#' && (
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-gray-600/30 text-sm"
                >
                  <GitHubIcon className="w-5 h-5 mr-2" />
                  GitHub repository
                </a>
              )}
            </div>
          </footer>
        )}
      </article>
    </div>
  );
};

export default ProjectDetailPage; 