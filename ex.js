// document.forms.my - the form with name="my"
// document.forms[1] - the first form in the document
// let elem = form.elements.one;
//form.elements[name]

let box = document.getElementById('animate');
function myMove(){
    let currentPostition = 0;
    let int = setInterval(() => {
        if(currentPostition < 350){
            currentPostition++;
            box.style.left = currentPostition + 'px';
        } else {
            clearInterval(int);
        }
    }, 50);
}








// let articles = document.getElementsByTagName('article');
// let article = articles[0]
// // first element
// console.log(article.children[0]);
// console.log(article.firstElementChild);
//
// // last element
// let last = article.lastElementChild;
// console.log(last);
// last.remove()
//
// // second element
// let second = article.children[1];
// console.log(second);
// second.addEventListener('click',function(){
//   second.style.backgroundColor = 'red';
// })
// // second.addEventListener('click', redBackground)
// // function redBackground(){
// //   second.style.backgroundColor = 'red';
// // })
//
// // get third element
// let h3 = article.children[2];
// console.log(h3);
// h3.addEventListener('click',function(){
//   h3.style.display = 'none';
// })
//
// // add a button
// let but = document.createElement('button');
// but.textContent = 'Click me';
// but.addEventListener('click',function(){
//   for (var i = 0; i < article.children.length; i++) {
//     if(article.children[i].tagName=='P'){
//       article.children[i].style.fontWeight = '700'
//     }
//   }
// })
// article.appendChild(but)
//
// // change to a random font size
// let h1 = article.children[0];
// h1.addEventListener('mouseover', function(){
//   let fontSize = Math.floor(Math.random() * 100);
//   h1.style.fontSize = fontSize+"px";
// })
//
//
// // get second p
// let counter = 1;
// for (var i = 0; i < article.children.length; i++) {
//
//   if(article.children[i].tagName=='P'){
//     console.log(counter);
//     if(counter === 2){
//       let p = article.children[i];
//       p.addEventListener('mouseover',function(){
//         p.classList.add('fadeOut')
//       })
//     }
//     counter++;
//   }
//
// }







// let num = 0;
// let i = 99;
// // for (var i = 99; i > 0; i--) {
// while(i > 0){
//   console.log(i + ' bottles of beer on the wall');
//   console.log(i + ' bottles of beer');
//   i = i - num;
//
//   if(i < 0){
//     console.log('Take ' + (num+i) + ' down, pass it around');
//     console.log('0 bottle of beer on the wall');
//   }
//   else if(num == 1){
//     console.log('Take ' + num + ' down, pass it around');
//   }
//   else{
//     console.log('Take ' + num + ' down, pass them around');
//   }
//   num++
// }





//
//
// let array = ["Hello", "World", "in", "a", "frame"];
//
// function getMaxLength(){
//   let max = 0;
//   for (var i = 0; i < array.length; i++) {
//     if(max < array[i].length){
//       max = array[i].length
//     }
//   }
//   return max;
// }
//
// let max = getMaxLength();
//
// function getSpaces(word){
//   return ' '.repeat(max-word.length);
// }
//
// console.log('*'.repeat(max+4));
// for (var i = 0; i < array.length; i++) {
//   console.log('* ' + array[i] + getSpaces(array[i],max) + ' *');
// }
//
// console.log('*'.repeat(max+4));
