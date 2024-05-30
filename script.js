//filter o
//filter on job title

const buttons=document.querySelector('.language button')
buttons.addEventListener('click',function(e){
const all=document.querySelectorAll('.card')
all.forEach(function(card){
    card.style.display='none'
 if(card.){
     card.style.display='block'
 }
})
});