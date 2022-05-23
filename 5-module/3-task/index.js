function initCarousel() {
  let rightArrow = document.body.querySelector(".carousel__arrow_right");
  let leftArrow = document.body.querySelector(".carousel__arrow_left");
  let carousel = document.body.querySelector(".carousel__inner");
  let imageWidth = carousel.offsetWidth;
  let position = 0;

  leftArrow.style.display = 'none';

  rightArrow.addEventListener("click", function() {
    leftArrow.style.display = '';
    position -= imageWidth;
    carousel.style.transform =`translateX(${position}px)`
    if (position < -2 * imageWidth) {
      rightArrow.style.display = 'none';
    }
  });

  leftArrow.addEventListener("click", function() {
    rightArrow.style.display = '';
    position += imageWidth;
    carousel.style.transform =`translateX(${position}px)`
    if (position == 0) {
      leftArrow.style.display = 'none';
    }
  });

}
