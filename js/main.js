const blob = document.getElementById("blob");

window.onpointermove = event => 
{ 
  const { clientX, clientY } = event;
  
  blob.animate({ left: `${clientX}px`, top: `${clientY}px`}, { duration: 3000, fill: "forwards" });
}

let buttoncircle = document.querySelector('.btn')
let body = document.querySelector('body')
let bblob = document.querySelector('#blob')
var audio = new Audio('Lumos.mp3');

buttoncircle.onclick = () =>
{
    buttoncircle.classList.toggle('done');
    bblob.classList.toggle('done')
    audio.play();
}
