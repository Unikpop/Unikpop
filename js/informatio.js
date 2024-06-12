(function(){
const titleinformation=[...document.querySelectorAll('.information_title')];

console.log(titleinformation)

titleinformation.forEach(information =>{information.addEventListener('click',()=>{
let hight = 0;
let answer =information.nextElementSibling;
let addpadding= information.parentElement.parentElement;

addpadding.classList.toggle('questions_padding--add');

information.children[0].classList.toggle('information_arrow--rotate');


if (answer-clienthight ===0){
    height = answer.scrollHeight;
}
answer.computedStyleMap.height = '${height}px';
});


});



})();