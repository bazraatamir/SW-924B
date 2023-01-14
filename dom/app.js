//selector getelementsByClassName getElementById querySelector
var test = document.querySelector('#text');

// test.innerText="<p>hellopp</p>";
// var t = test[0];
// t.style.color="red"

// var arr = ["zolboot",'amirlan','goltoldor','proro']
// var i = 0
// function changeColor(){
    
//     i++;
//     test.innerText=arr[i]
//     if(i>=arr.length){
//         i=0;
//     }
// }
// function prev(){
//    i--;
//     if(i>-1){
//     test.innerText=arr[i];
    
//     }
//     else if(i==-1){
//         i=arr.length-1;
//         test.innerText=arr[i];
       
//     }
// }
const Next = document.querySelector('#back');
const prev = document.querySelector('#prev');

Next.addEventListener('click',next);
function next(){
    slide(1)
}
prev.addEventListener('click',Prev);
function Prev(){
    slide(-1)
}
let count = 0
function slide(arg){
    
    var slides = document.querySelectorAll('.child')
    slides.forEach((element)=>{
        element.style.display="none"
    })
    count+=arg;
    if(count>=slides.length){
        count=0
    }
    slides[count].style.display="block";

}