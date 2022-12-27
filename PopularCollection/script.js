const photos = document.querySelectorAll('.photo');

photos.forEach(card => {
   
    card.addEventListener('click', (e) => {
        let sourceImgPrincipal = e.path[3].children[0].children[0].src;
        let sourceImgClicada = e.target.src.toString();

    
        e.target.src = sourceImgPrincipal;
        e.path[3].children[0].children[0].src = sourceImgClicada;
        
    })
})