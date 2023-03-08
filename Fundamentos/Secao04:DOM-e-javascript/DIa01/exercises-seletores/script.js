const fundoAmarelo = document.getElementsByClassName('no-emergency-tasks');
fundoAmarelo[0].style.backgroundColor = "yellow";
function rosa() {
const fundoRosa = document.getElementsByClassName('emergency-tasks');
fundoRosa[0].style.backgroundColor = "pink";
}
rosa();
const preto = document.querySelectorAll('.no-emergency-tasks h3');
for(let index = 0; index < preto.length; index += 1){
    preto[index].style.background = "black";
}

const roxo = document.querySelectorAll('.emergency-tasks h3');
for(let index = 0; index < roxo.length; index += 1){
    roxo[index].style.background = 'rgb(165, 0, 243)';
}

const verde = document.getElementById("header-container");
verde.style.background = "green";

const footer = document.getElementById("footer-container");
footer.style.background = "darkgreen";