let container
container = document.getElementById("c1")
container.innerText = "¡Hola mundo!"
container.style.backgroundColor = "#000000"
container.style.color = "#1cb723"
container.style.width = "200px"
container.style.height = "200px"
container.innerHTML= " <input type=”text” placeholder=’escriba su texto’>"

let containers
containers = document.querySelectorAll(".c2")
for (let index = 0; index < containers.length; index++) {
    containers[index].style.backgroundColor = "#009999"
    
}

for (let index = 0; index < containers.length; index++) {
    containers[index].innerHTML = "<input type='text' placeholder='Escriba su texto'>"
    
}


let boton
boton = document.getElementById("btn-click")
boton.onclick = function(evt){
    alert("Hola mundo"); 
}

let btnCopy
btnCopy = document.getElementById("btnCopy")
btnCopy.onclick = function(evt){
    let msj = document.getElementById('textMsj').value;
    document.getElementById('showMsj').innerText = msj;
}