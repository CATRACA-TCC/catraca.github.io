const btnHome = document.getElementById('btn-Home');
const btnSobre = document.getElementById('btn-Sobre Nos');
const btnContato = document.getElementById('btnContato');

btnHome.addEventListener('click', function(event) {
    event.preventDefault(); 
    console.log('Clicou em Página Inicial');
    
});

btnSobre.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Clicou em Sobre Nos');
   
});

btncontato.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Clicou em Contato');
   
});


document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelector('.carousel-images');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let translateValue = 0;
    const step = 100; // Adjust this value based on image width and margin

    nextButton.addEventListener('click', function() {
        if (translateValue > -(carouselImages.children.length - 1) * step) {
            translateValue -= step;
            carouselImages.style.transform = `translateX(${translateValue}%)`;
        }
    });

    prevButton.addEventListener('click', function() {
        if (translateValue < 0) {
            translateValue += step;
            carouselImages.style.transform = `translateX(${translateValue}%)`;
        }
    });
});
