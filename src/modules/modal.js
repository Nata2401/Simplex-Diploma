const modal = () => {
  const modalCallback = document.querySelector('.modal-callback'); 
  const modalOverlay = document.querySelector('.modal-overlay');   
  const body = document.querySelector('body');
    
  body.addEventListener('click', (e) => {
    e.preventDefault();
      if (e.target.closest('.header .fancyboxModal') ||
         (e.target.closest('.button-services')) || 
         (e.target.closest('.services-elements .fancyboxModal'))) { 
            modalCallback.style.display = 'block';
            modalOverlay.style.display = 'block';
       } else if (e.target.closest('.modal-close') || (e.target.closest('.modal-overlay'))) {
            modalCallback.style.display = 'none';
            modalOverlay.style.display = 'none';
      }
  });
};
export default modal;