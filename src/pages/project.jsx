import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectData';

const Project = () => {
  const [selectedTech, setSelectedTech] = useState('all');
  const techFilters = ['all', ...new Set(projectsData.flatMap(p => p.tech))];

  const filteredProjects = selectedTech === 'all'
    ? projectsData
    : projectsData.filter(p => p.tech.includes(selectedTech));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0 text-white">專案列表</h1>
        
        <div className="flex overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {techFilters.map(tech => (
            <button
              key={tech}
              className={`mr-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                selectedTech === tech 
                ? 'bg-gray-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              onClick={() => setSelectedTech(tech)}
            >
              {tech === 'all' ? '全部專案' : tech}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map(project => (
          <Link to={`/projects/${project.id}`} key={project.id} className="block group h-full">
            <div 
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
            >
              {project.imageUrl && (
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              )}
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-bold mb-3 line-clamp-2 text-white group-hover:text-blue-300 transition-colors duration-300">{project.title}</h2>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow line-clamp-3">{project.description}</p>
                <div className="mb-4 flex flex-wrap">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="inline-block bg-gray-700/70 text-gray-300 rounded-full px-3 py-1 text-xs mr-2 mb-2 group-hover:bg-blue-800/60 group-hover:text-blue-200 transition-all duration-150">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="inline-block bg-gray-600/80 text-gray-200 rounded-full px-3 py-1 text-xs mr-2 mb-2">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300 text-sm">
                    查看詳情
                    <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 col-span-full">
          <p className="text-xl text-gray-300">沒有找到符合篩選條件的專案</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => setSelectedTech('all')}
          >
            查看所有專案
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;
