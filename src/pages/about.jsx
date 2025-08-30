import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        關於我
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          className="col-span-2 space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <section className="bg-gray-900 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">自我介紹</h2>
            <p className="text-gray-300 mb-4">
              您好！我是一位熱愛技術的前端獨立開發者，本業是Project Assistant，請多多指教。
            </p>
            
          </section>
          
          <section className="bg-gray-900 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">專業技能</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-medium mb-2 text-white">前端技術</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>React & React Native</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>CSS/SCSS/Tailwind</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-white">後端技術</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>Node.js/Express</li>
                  <li>PostgreSQL</li>
                  <li>Git & GitHub</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-white">其他技術</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>Notion 專案管理</li>
                  <li>Powerpoint 簡報製作</li>
                  <li>Word 文件製作</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="bg-gray-900 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">經歷</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-400 pl-4 py-2">
                <h3 className="text-white font-medium">AUSU Frontend Intern</h3>
                <p className="text-gray-400 text-sm">2023/7 - 2023/11</p>
                <ul className="text-gray-300 mt-1">
                  <li>1. 修正網頁BUG，令使用者體驗更加順暢。</li>
                  <li>2. 建立網頁功能 (登入登出，密碼規則建立)，並且整理測試案例回報進度，使功能如期上線。</li>
                  <li>3. 協助處理黑箱問題，並且回報測試結果以及解決方法，使網站安全性測試如期回報，加速網站上線速度以及安全性。</li>
                </ul>
              </div>
              <div className="border-l-2 border-blue-400 pl-4 py-2">
                <h3 className="text-white font-medium">Adam elearning 門市營運支援</h3>
                <p className="text-gray-400 text-sm">2024/2 - 2025/4</p>
                <ul className="text-gray-300 mt-1">
                  <li>1. 門市商品銷售與介紹</li>
                  <li>2. 顧客與公司端中間溝通協調的橋樑</li>
                  <li>3. 商品庫存管理</li>
                  <li>4. 門市行銷活動企劃發想</li>
                </ul>
              </div>
              <div className="border-l-2 border-blue-400 pl-4 py-2">
                <h3 className="text-white font-medium">中國文化大學 資訊工程科系 畢業</h3>
                <p className="text-gray-400 text-sm">2020 - 2024</p>
                <ul className="text-gray-300 mt-1">
                  <li>1. 一對一程式設計助教 - 外籍生</li>
                  <li>2. 程式設計課程助教</li>
                  <li>3. 畢業專題組長</li>
                </ul>
              </div>
            </div>
          </section>
        </motion.div>
        <motion.div 
          className="col-span-1"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <section className="bg-gray-900 rounded-lg p-6 shadow-md sticky top-24">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">聯絡資訊</h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-400 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div>
                  <p className="font-medium">電子郵件</p>
                  <a href="mailto:kakeru.kaixiang@gmail.com" className="text-blue-400 hover:underline">
                    auchergod@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-400 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-medium">地點</p>
                  <p>台灣，桃園市</p>
                </div>
              </div>
              
              <div className="pt-4 mt-4 border-t border-gray-800">
                <p className="font-medium mb-3">社交媒體</p>
                <div className="flex space-x-4">
                  <a href="https://github.com/kakeru13468" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/kai-xiang-you/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-800">
                <a 
                  href="/public/游凱翔.pdf" 
                  target="_blank" 
                  className="block w-full py-2 px-4 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors"
                >
                  下載個人簡歷
                </a>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
