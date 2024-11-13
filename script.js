// Данные на двух языках
const languages = {
    en: {
      "navbar-home": "Tourist Tour",
      "main-heading": "Welcome to Tourist Tours",
      "nav-home": "Home",
      "nav-destinations": "Destinations",
      "nav-tours": "Available Tours",
      "nav-contacts": "Contacts",
      "about-tours": "About Our Tours",
      "about-text": "We offer a wide range of tourist tours to suit every taste. Whether you are looking for adventure, relaxation, or cultural programs, we have something for everyone.",
      "hotel-reviews": "Hotel Reviews",
      "hotel-1": "The Grand Hotel",
      "hotel-2": "Seaside Resort",
      "hotel-3": "Mountain Lodge",
      "footer": "© 2024 Tourist Tours | Created by: Zhenisova Saniya and Dilnaz Turdybekova"
    },
    ru: {
      "navbar-home": "Туристический тур",
      "main-heading": "Добро пожаловать в Туристические Туры",
      "nav-home": "Главная",
      "nav-destinations": "Направления",
      "nav-tours": "Доступные туры",
      "nav-contacts": "Контакты",
      "about-tours": "О наших турах",
      "about-text": "Мы предлагаем широкий выбор туристических туров на любой вкус. Ищете приключения, расслабление или культурные программы? У нас есть что-то для каждого.",
      "hotel-reviews": "Отзывы о гостиницах",
      "hotel-1": "Гранд отель",
      "hotel-2": "Курорт у моря",
      "hotel-3": "Горный отель",
      "footer": "© 2024 Туристические Туры | Создано: Женисовой Санией и Дильназ Турдыбековой"
    }
  };
  
  function switchLanguage(language) {
      const elements = document.querySelectorAll('[data-lang]');
      elements.forEach(element => {
          const key = element.getAttribute('data-lang');
          element.textContent = languages[language][key] || element.textContent;
      });
  }
  
  switchLanguage('en');
  
const carousel = document.getElementById('carouselExampleIndicators');
carousel.addEventListener('slid.bs.carousel', function () {
    const slides = carousel.querySelectorAll('.carousel-item');
    slides.forEach(slide => {
        slide.classList.remove('fade-in');
    });
    const activeSlide = carousel.querySelector('.carousel-item.active');
    activeSlide.classList.add('fade-in');
});

