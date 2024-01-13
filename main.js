Artplayer.CONTEXTMENU = false;
Artplayer.MOBILE_CLICK_PLAY = true;
Artplayer.FAST_FORWARD_VALUE = 2;
Artplayer.VOLUME_STEP = 0.05;

var art = new Artplayer({
    id: 'vun-video',
    autoplay: false,
    volume: 1, muted: false,
    // isLive: false,
    // autoSize: false,
    // autoMini: false,
    // screenshot: false,
    setting: true,
    loop: false,
    flip: true,
    playbackRate: true,
    aspectRatio: true,
    fullscreen: true,
    // fullscreenWeb: false,
    subtitleOffset: true,
    miniProgressBar: true,
    mutex: false,
    backdrop: true,
    playsInline: true,
    autoPlayback: true,
    airplay: true,

    i18n: {
        'zh-tw': {
            "Video Info": "統計訊息",
            "Close": "關閉",
            "Video Load Failed": "載入失敗",
            "Volume": "音量",
            "Play": "播放",
            "Pause": "暫停",
            "Rate": "速度",
            "Mute": "靜音",
            "Video Flip": "畫面翻轉",
            "Horizontal": "水平",
            "Vertical": "垂直",
            "Reconnect": "重新連接",
            "Show Setting": "設定",
            "Screenshot": "截圖",
            "Play Speed": "播放速率",
            "Aspect Ratio": "畫面比例",
            "Default": "默認",
            "Normal": "正常",
            "Open": "打開",
            "Switch Video": "切換",
            "Switch Subtitle": "切換字幕",
            "Fullscreen": "進入全螢幕",
            "Exit Fullscreen": "退出全螢幕",
            "Web Fullscreen": "進入網頁全螢幕",
            "Exit Web Fullscreen": "退出網頁全螢幕",
            "Mini Player": "迷你播放器",
            "PIP Mode": "開啟畫中畫",
            "Exit PIP Mode": "退出畫中畫",
            "PIP Not Supported": "不支持畫中畫",
            "Fullscreen Not Supported": "不支持全螢幕",
            "Subtitle Offset": "字幕偏移",
            "Last Seen": "上次看到",
            "Jump Play": "跳轉播放",
            "AirPlay": "隔空播放",
            "AirPlay Not Available": "隔空播放不可用"
        },
    },

    container: '.artplayer-app',
    poster: '/assets/sample/poster.jpg',
    theme: '#db2121',
});

setTimeout(() => {
    art.url = 'E:/Bad%20Genius%20(2017)%20[BluRay]%20[1080p]%20[YTS.AM]/Bad.Genius.2017.1080p.BluRay.x264-[YTS.AM].mp4';
}, 1000);

art.on('ready', () => {
    art.play();
    art.setting.show = true;
    art.forward = 10;
    art.backward = 10;

    setTimeout(() => {
        art.setting.show = false;
        art.pause();
    }, 1000);
});