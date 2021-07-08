window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    //anonymous function- without a name and you'll only use once but no where else
    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
    
    WebFont.load({
        google: {
          families: [
            'Oswald'
          ]
        }});
});