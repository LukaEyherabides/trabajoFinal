document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    let currentIndex = 0;
  
    function showItem(index) {
      if (index < 0) index = items.length - 1;
      if (index >= items.length) index = 0;
      carousel.style.transform = `translateX(-${index * 100}%)`;
      currentIndex = index;
    }
  
    prevBtn.addEventListener('click', () => showItem(currentIndex - 1));
    nextBtn.addEventListener('click', () => showItem(currentIndex + 1));
  
    // setInterval(() => showItem(currentIndex + 1), 6000);
  });