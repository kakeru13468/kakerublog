import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogList from '../components/BlogList';
import BlogDetail from '../components/BlogDetail';

const Blog = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path=":id" element={<BlogDetail />} />
      </Routes>
    </div>
  );
};

export default Blog;
