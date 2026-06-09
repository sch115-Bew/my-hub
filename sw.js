self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');
});
self.addEventListener('fetch', (e) => {
  // ปล่อยให้ดึงข้อมูลจากเว็บแอปตามปกติ
});