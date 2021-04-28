window.addEventListener('load', (event)=>{
    const lu = document.querySelector('#datetime');
    lu.textContent = document.lastModified;

    const cry = document.querySelector('#copyright-year');
    cry.textContent = new Date().getFullYear();
})