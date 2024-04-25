// Файл: js/banner.js

// Создаем массив с путями к изображениям
var bannerImages = ["images/banner/banner1.jpg", "images/banner/banner2.jpg", "images/banner/banner3.jpg"];
var currentBannerIndex = 0;
var bannerElement = document.getElementById("bannerImage");

function changeBanner() {
    currentBannerIndex = (currentBannerIndex + 1) % bannerImages.length; // Переходим к следующему изображению в массиве
    bannerElement.src = bannerImages[currentBannerIndex]; // Устанавливаем новое изображение для баннера
}

setInterval(changeBanner, 5000); // Запускаем функцию changeBanner каждые 5 секунд