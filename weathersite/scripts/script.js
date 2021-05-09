window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    //anonymous function- without a name and you'll only use once but no where else
    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
   
    // To solve the mid resiszing issue with responsive class on
    //window.onresize = () => {}
        const lu = document.querySelector('#datetime');
        lu.textContent = document.lastModified;
    
        const cry = document.querySelector('#copyright-year');
        cry.textContent = new Date().getFullYear();
    
});