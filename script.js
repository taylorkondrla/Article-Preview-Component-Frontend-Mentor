const shareBtn = document.querySelector('.sharebtn');
const popup = document.querySelector('.popup');

shareBtn.addEventListener('click', () => {
  popup.classList.toggle('active');
});
