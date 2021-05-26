const colors = ["green", "red", "#f5124e", "salmon", "rgba(13,25,23,0.2)"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

// bikin event listener buat button
button.addEventListener("click", function(){
    // bikin random 0 - 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return  Math.floor(Math.random() * colors.length);
};