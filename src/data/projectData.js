const projects = [
  {
    id: 'kxlyrics',
    title: 'KX唱歌學日語網站',
    description: '結合音樂與語言學習的平台，讓用戶能夠通過唱歌學習日語。',
    longDescription: `
### 專案概覽
KX唱歌學日語網站是一個專為日語學習者設計的互動平台。使用者可以選擇喜歡的日文歌曲，系統會同步顯示歌詞、羅馬拼音，並提供單字解釋與文法分析。

### 主要功能
- 歌曲同步歌詞顯示
- 羅馬拼音輔助
- 單字解釋與文法點分析

此平台旨在讓學習過程更輕鬆有趣，透過音樂的沉浸式體驗提升語言能力。前端使用 React 實現動態界面與使用者互動，後端則由 Node.js 搭配 PostgreSQL 資料庫處理歌曲資料、使用者進度等。
`,
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    imageUrl: '/kxgl.png', // 專案圖片路徑範例
    liveUrl: 'https://kxlyrics.com/', // 線上預覽連結範例
    repoUrl: '#' // 程式碼倉庫連結範例
  },
  {
    id: 'aivideo',
    title: 'AI影片畢業專案',
    description: '利用人工智能技術，將文本內容自動轉換為視頻內容的創新工具。',
    longDescription: `
### 專案背景
此AI影片生成專案是我的畢業製作，目標是開發一個能夠將使用者輸入的文字腳本自動轉換為帶有配音和相關視覺元素的影片。

### 核心技術
- **GPT-3.5**: 用於文本分析、摘要和腳本優化。
- **文字轉語音 (Azure)**: 生成配音。
- **影片生成 (text2video-zero)**: 透過開源專案text2video-zero根據GPT生成的文字去產生符合相對應的圖片後，再將他生成影片。

前端界面使用 Vue 建立，方便使用者輸入文本並預覽生成結果。
`,
    tech: ['Python', 'GPT-3.5', 'Vue', 'Azure'],
    imageUrl: '/aivideo.png',
    liveUrl: 'https://youtu.be/jd3UiAIhW4A',
    repoUrl: 'https://github.com/kakeru13468/A02_AI_Video_Generation'
  },
  {
    id: 'kakerublog',
    title: 'Kakeru個人部落格',
    description: '我的個人部落格網站，展示我的技術文章和專業項目。',
    longDescription: `
### 網站簡介
這是我的個人部落格網站，用來分享我的技術學習筆記、專案經驗和各種探索。網站採用現代前端技術構建，同時注重性能優化和用戶體驗。

### 技術特點
- **React 18**: 採用最新版本React構建用戶介面
- **Tailwind CSS**: 使用原子化CSS框架實現響應式設計
- **Framer Motion**: 實現流暢的頁面過渡和滾動動畫
- **Markdown渲染**: 支持Markdown格式文章，便於內容管理

### 功能亮點
- 暗色主題設計，減少視覺疲勞
- 支持代碼高亮顯示
- 基於標籤的內容分類
- 流暢的頁面過渡動畫
- 響應式設計，適配各種設備
`,
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    imageUrl: '/kakerublog.png',
    liveUrl: 'https://kakeru-blog.vercel.app',
    repoUrl: 'https://github.com/kakeru13468/kakeru-blog'
  }
];

export default projects;
