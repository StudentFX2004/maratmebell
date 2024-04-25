let i = 0;
    let images = ["1", "2", "3"];
    let files = ["product1.html", "product2.html", "product3.html"]; // Создаем массив files для хранения названий файлов

    // Функция для отображения предыдущей картинки
    function previousImage() {
      if (i === 0) {
        i = images.length - 1;
      } else {
        i--;
      }
      document.getElementById("image").src = "image/" + images[i] + ".jpg";
    }

    // Функция для отображения следующей картинки
    function nextImage() {
      if (i === images.length - 1) {
        i = 0;
      } else {
        i++;
      }
      document.getElementById("image").src = "image/" + images[i] + ".jpg";
    }

    // Функция для открытия файла при клике на картинку
    function openFile() {
      window.location.href = files[i]; // Перенаправляем текущую страницу на выбранный файл
    }