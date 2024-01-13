# Vun-Video-Player By Plyr
[English](/md/en.md) | [繁體中文](/README.md) | [简体中文](/md/zh-hans.md)
***

## 注意
### Vun-Video-Player By Plyr 改寫自 [sampotts/plyr](https://github.com/sampotts/plyr)
***

## 特色
### 功能：
>Vun-Video-Player
>>播放器
>>>自動播放
>>>預設音量
>>>靜止聲音
>>>播放比例
>>>自動重播
>>>取消右鍵
>>>目標進度
>>>預設封面

>>按鈕功能
>>>字幕選擇
>>>工具導覽
>>>重播、播放、暫停
>>>倒退、前進
>>>目前時間:總共時間
>>>音量、靜音、取消靜音
>>>開啟字幕、關閉字幕
>>>進入全螢幕、退出全螢幕
>>>播放速率調整
>>>影片畫質調整

### 修改：
* 編輯[maid.js](/main.js)的內容，來進行在地化！
* 編輯[style.css](/style.css)的內容，來修改外觀！

### 使用：
```bash
<head>
  <script src="https://ogata-in-taiwan.github.io/Vun-Video-Player/citation.js"></script>
</head>
<body>
  <video id="player" playsinline controls data-poster="<您的影片封面>">
    <source src="<1080p mp4 影片檔>" type="video/mp4" size="1080" default>
    <source src="<720p mp4 影片檔>" type="video/mp4" size="720">
    <source src="<480p mp4 影片檔>" type="video/mp4" size="480">
    <track kind="captions" label="<字幕語言en>" srclang="en" src="<mp4 影片檔 vtt>" default>
    <track kind="captions" label="<字幕語言fr>" srclang="fr" src="<mp4 影片檔 vtt>">
  </video>
  <script src="https://ogata-in-taiwan.github.io/Vun-Video-Player/main.js"></script>
</body>
```
***

## 版權聲明
### © Copyright 2024 OGATA. All rights reserved.
