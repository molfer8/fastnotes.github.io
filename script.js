const book = document.getElementById("book");
const BarraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main"); 
const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");


menu.addEventListener("click",()=>{
    BarraLateral.classList.toggle("max-barra-lateral");
    if(BarraLateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.chilfren[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "block";
    }
    if(window.innerWidth<=320){
        BarraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");
});

book.addEventListener("click",()=>{
    BarraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
}); 

btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
})

btnCerrarModal.addEventListener("click",()=>{
    modal.close();  
})


const form = document.querySelector("#miformulario"); 
const almacenTarea = document.querySelector(".almacen-tarea");


form.addEventListener("submit", function(event) {
    event.preventDefault();


    const titulo = document.querySelector("#titulo").value; 
    const descripcion = document.querySelector("#descripcion").value; 

    const tareaDiv = document.createElement("div");
    tareaDiv.classList.add("tarea"); 

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("completado-checkbox");

    const tareaTitulo = document.createElement("h3");
    tareaTitulo.textContent = titulo;

    const tareaDescripcion = document.createElement("p");
    tareaDescripcion.textContent = descripcion;
    tareaDescripcion.classList.add("parrafo-tarea")

    tareaDiv.appendChild(checkbox);
    tareaDiv.appendChild(tareaTitulo);
    tareaDiv.appendChild(tareaDescripcion);

    almacenTarea.appendChild(tareaDiv);


    form.reset();
});






