const miniaturas= document.querySelectorAll('.miniatura');
const modal = document.getElementById('modal');
const imagemGrande = document.getElementById('ImagemGrande');

miniaturas.forEach(img => {
    img.addEventListener('click', () =>{
        imagemGrande.src = img.src;
        modal.style.display = 'flex';
    });
});

modal.addEventListener('click', ()=> {
    modal.style.display= 'none';
});