const colors = ["red","green","rgb(122,133,200)","#f1f5f8"] 

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const main = document.querySelector(".main");
const bg = document.querySelector(".container")



btn.addEventListener('click', function() {
    const random = getRandomNumber();
    console.log(random)
    main.style.backgroundColor = colors[random];
    color.textContent = colors[random];
    bg.style.backgroundColor = colors[random]
    btn.style.backgroundColor = colors[random]
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}