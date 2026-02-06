# 🎬 TechPro 產品介紹影片

## 📝 專案說明

這是一個使用 Remotion 製作的完整產品介紹影片專案,包含精美的一頁式網站和對應的介紹影片。

## 🎥 影片結構

### 總長度: 28秒 (840 幀 @ 30fps)

1. **開場動畫** (0-5秒)
   - 品牌 Logo 展示
   - 產品標語
   - 字幕: "體驗前所未有的創新科技"

2. **功能特色** (5-12秒)
   - 六大核心優勢展示
   - 動態卡片動畫
   - 字幕: "全方位的創新技術,滿足您的所有需求"

3. **產品方案** (12-18秒)
   - 三種產品版本並排展示
   - 價格與功能比較
   - 字幕: "靈活的價格方案,總有一款適合您"

4. **用戶評價** (18-23秒)
   - 真實用戶見證
   - 五星評分展示
   - 字幕: "超過 50,000 位用戶的五星好評"

5. **行動呼籲** (23-28秒)
   - 立即購買按鈕
   - 保證與優惠標記
   - 字幕: "現在購買享有限時優惠,不要錯過!"

## 🚀 使用方式

### 啟動 Remotion Studio (即時預覽)
```bash
npm run remotion
```

這會在瀏覽器中打開 Remotion Studio,您可以:
- 即時預覽影片
- 調整參數
- 逐幀查看動畫
- 修改內容並即時看到效果

### 渲染影片為 MP4
```bash
npm run render
```

這會輸出影片到 `out/video.mp4`

### 自訂渲染設定

如果需要不同的輸出設定,可以使用:

```bash
# 渲染為不同的解析度
npx remotion render remotion/index.ts ProductIntro out/video.mp4 --width=1280 --height=720

# 渲染特定幀範圍
npx remotion render remotion/index.ts ProductIntro out/clip.mp4 --frames=0-150

# 調整品質
npx remotion render remotion/index.ts ProductIntro out/video.mp4 --quality=100
```

## 📁 檔案結構

```
remotion/
├── index.ts                     # 入口點
├── Root.tsx                     # 影片註冊
├── VideoComposition.tsx         # 主要影片組合
└── scenes/                      # 場景資料夾
    ├── OpeningScene.tsx         # 開場場景
    ├── FeaturesScene.tsx        # 功能特色場景
    ├── ProductsScene.tsx        # 產品方案場景
    ├── TestimonialsScene.tsx    # 用戶評價場景
    └── CTAScene.tsx             # 行動呼籲場景
```

## 🎨 設計特色

- ✅ 流暢的 Spring 動畫
- ✅ 漸變色彩設計
- ✅ 專業級字幕系統
- ✅ 視覺層次分明
- ✅ 1080p 高清畫質
- ✅ 模組化場景設計

## 🔧 自訂修改

### 修改影片內容
直接編輯 `remotion/scenes/` 資料夾下的場景檔案

### 修改影片長度
在 `remotion/Root.tsx` 中調整 `durationInFrames`

### 修改場景時間
在 `remotion/VideoComposition.tsx` 中調整每個 `<Sequence>` 的 `from` 和 `durationInFrames`

### 修改字幕
在各場景檔案中搜尋「字幕」註解區塊並修改文字

## 📊 影片規格

- **解析度**: 1920 x 1080 (Full HD)
- **幀率**: 30 fps
- **總長度**: 28 秒
- **格式**: MP4 (H.264)

## 🎯 快速開始

1. 確保 Remotion Studio 正在運行: `npm run remotion`
2. 在瀏覽器中查看即時預覽
3. 播放影片查看效果
4. 如需修改,編輯場景檔案,自動熱重載
5. 滿意後執行 `npm run render` 輸出影片

## 💡 提示

- Remotion Studio 支援熱重載,修改程式碼會自動更新
- 使用瀏覽器的播放控制可以逐幀檢查動畫
- 所有場景都使用 Spring 動畫,調整 config 可改變動畫感覺
- 字幕使用 opacity 淡入淡出,時機可在各場景中調整

---

Made with ❤️ using Remotion
