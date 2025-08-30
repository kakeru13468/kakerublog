// 博客文章數據
const blogPosts = [
  {
    id: 1,
    title: '關於本網站的建立',
    date: '2025-01-31',
    summary: '本站創立的第一篇文章。',
    content: `

### 大家好我是 Kan，這是本網站建立的第一篇文章，我就來介紹一下我自己以及本網站。

## 關於我

目前是一名待業中的前端小白，對於前端有極大的熱情，希望能夠透過這個網站分享我的學習心得以及技術文章。

以下是一些基本資料：

### 學歷
- 中國文化大學資訊工程學系學士

### 經歷
- ASUS frontend - intern
- Adam Elements International Co., Ltd. - sales 

### 技能
- HTML
- CSS
- JavaScript
- React
- Tailwind CSS

## 關於網站

本網站是使用 React + tailwind css 建立的，使用 Vite 作為開發工具，並且使用 Zeabur 作為部署平台。
並且在動畫的部分是使用 framer-motion 來實現，一開始是為了面試而建立的個人網站，現在則是希望我可以將我學習到的技術或是踩過的坑在我的網站上做分享以及紀錄。

## 未來計劃

> 我計劃在未來分享更多關於前端開發、React 應用以及 UI/UX 設計的文章。

敬請期待更多精彩內容！
    `,
    tags: ['介紹'],
    category: '介紹',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
  },
  {
    id: 2,
    title: '沒踩過坑不敢說自己會Git',
    date: '2025-05-15',
    summary: 'Git常見操作與指令詳解，以及解決各種Git問題的方法',
    content: `

在軟體開發中，Git是一個必不可少的工具。無論你是初學者還是有經驗的開發者，都可能會遇到各種Git相關的問題。本文將以已有基礎的使用者為前提的分享。

### 創建新分支
\`\`\`bash
git checkout -b <branch-name> # 創建新分支
git push origin <branch-name> # 推送到遠端
\`\`\`

### 切換分支
\`\`\`bash
git checkout <branch-name> # 切換到指定分支
\`\`\`

### 更新分支
\`\`\`bash
git checkout main # 切換到指定分支
git pull # 拉取遠端分支
git checkout dev # 切換到要合併的分支
git merge main # 合併分支
\`\`\`

\`\`\`mermaid
gitGraph
  commit id: "first commit"
	branch dev
	commit id: "new branch first"
	commit id:"second commit"
	checkout main
	commit id: "second commit"
	commit id: "second update commit"
\`\`\`

### 刪除分支
\`\`\`bash
git push origin --delete target branch # 刪除分支
\`\`\`

### 刪除指定commit
\`\`\`bash
git rebase -i HEAD~n # 刪除指定commit (HEAD~n 代表從HEAD往前數n個commit)

將Pick改成Drop 

:wq 保存

git push origin <branch-name> --force # 強制推送到遠端
\`\`\`


 ### 退回指定commit
 \`\`\`bash
 git reset <指定commit> # 退回指定commit
 \`\`\`

### 修改 Github repo 的資料夾名稱
\`\`\`bash
git mv <old name> <new name>

***如遇到僅需要修改大小寫的情況**

git mv <old name> <任意名稱>

git mv <任意名稱> <new name>

由於Windows 環境對檔案系統不區分大小寫，但 Git 區分因此無法直接做修改
\`\`\`



 
    `,
    tags: ['Git', '版本控制', '技術教學'],
    category: '技術',
    imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Logo-White.png',
  },

];

export default blogPosts; 