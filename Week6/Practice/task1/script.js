// const bol = document.getElementById('container')
// alert(myp1.innerText)


// const myp1= document.getElementById('p1')
const btn = document.getElementById('b1')


// myp1.style.color= "red"
// myp1.innerText= "I am over the moon"

function randomColor(){
    return '#' + (Math.random().toString(16) + "000000").substring(2,8)
}
let count=0;

function sayHi(){
    if(count<5){
        const bol = document.createElement("div")
        bol.className='bol'
        bol.style.backgroundColor = randomColor()
        const container = document.getElementById('container')
        container.appendChild(bol)
        count++
    }else{
        alert("can not add more than 5 color")
    }
}

btn.onclick = sayHi;