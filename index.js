// var inputWidth = document.getElementById("input_width").value;;
// alert("fdf")
// let i = 1
// while(i>0){
//     i+=10000
//     console.log(i)
// }
// let a = 1
// while(i>0){
//     a+=10000
//     console.log(i)
// }
// let b = 1
// while(i>0){
//     b+=10000
//     console.log(i)
// }
// let c = 1
// while(i>0){
//     c+=10000
//     console.log(i)
// }

// for (let a=1; a<=10; a++) {
//     console.log(a)
// }
// let a = 6
// function start(){
//     a = a+6
// }
// start()
// alert(a)

// for (let a=1; a<=10; a++) {
//     console.log(`${a} "=^-^="`)
// }

// Arrays - массив

// let fruits = ["apple","orange","peach"];

// console.log(fruits);

// comsole.log(fruits[1]);

// for (let i = 0; i < fruits.length; index++) {
//     console.log(fruits[1]);
    
// }

// let fruits = ["apple", "orange", "peach"]
// fruits.pop()
// console.log(fruits)
// // friuts.push("banana")
// // console.log(fruits)
// // fruits[0] = "granat"
// // console.log(fruits)

// // fruits.unshift("Мандарин")
// // console.log(fruits)

// var inputWidth = document.getElementById('input_width').value;

// btnCreate.addEventListener("click", createDiv)

// let inputHeight = document.querySelector(".input_height")
// let inputColor = document.querySelector(".input_color")
// let btnCreate = document.querySelector(".btn_create")
// alert("dlf")
// var button = getElementById("btn")
//     button2.onclick = createDiv();
// function createDiv(){
//     let div = document.createElement('div');
//     let inputWidth = document.querySelector('.input_width').value;
//     document.querySelector('.field').innerHTML += inputWidth ;
//     alert("hgffd")
    
// }
// var button2 = document.getElementById("btn")
//     button2.onclick = handleButtonClick2;
document.querySelector('.donttuch').onclick=warning
function warning(){
    let i = 1
    while(i>0){
        i+=10000
        console.log(i)
    }
    let a = 1
    while(i>0){
        a+=10000
        console.log(i)
    }
    let b = 1
    while(i>0){
        b+=10000
        console.log(i)
    }
    let c = 1
    while(i>0){
        c+=10000
        console.log(i)
    }
}

btn.onclick = 
document.querySelector('.btn_create').addEventListener('click', () => {
    let div = document.createElement('div');
    div.className = "box";
    document.querySelector(".field").append(div)
    div.id = "box"
    let inputWidth = document.querySelector('.input_width').value;
    let inputHeight = document.querySelector('.input_height').value;
    let inputColor = document.querySelector('.input_color').value;
    div.style.backgroundColor = inputColor
    div.style.width = `${inputWidth}px`
    div.style.height = `${inputHeight}px`
    div.style.position = "relative";
    // square.style.cssText=`
    // background-color: ${inputColor};
    // width: ${inputWidth}px;
    // height: ${inputHeight}px;
    // `;
    // alert("fdf")
})
let left = 0
document.querySelector('.arrow_left').addEventListener('click', () => {
    left--
    box.style.left = `${left}px`
    if (left < 0){
        box.style.left = "0px"
        left = 0
    }
})

document.querySelector('.arrow_right').addEventListener('click', () => {
    left++
    box.style.left = `${left}px`
   

})
let down = 0
document.querySelector('.arrow_down').addEventListener('click', () => {
    down++
    box.style.top = `${down}px`
})
document.querySelector('.arrow_up').addEventListener('click', () => {
    down--
    box.style.top = `${down}px`
    if(down<0){
        box.style.top = "0px"
        down = 0
    }
})
document.querySelector('.btn_clear').addEventListener('click', () => {
    // box.style.backgroundColor = "rgba(151, 240, 233, 0)"
    // box.style.width = `0px`
    // box.style.height = `0px`
    document.querySelector(".field").firstChild.remove()
    
    
})