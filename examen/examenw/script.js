let menuvista=false;
// funcio que nuestra  y oculta el menu 
function mostrarOcultarMenu(){
    if(menuvista){
        document.getElementById("nav").classList = "";
        menuvista=false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuvista=true;
    }
}

function seleccionar(){
// oculta el menu una vez que seleciona una opcion
document.getElementById("nav").classList ="";
menuvista = false;
}
function efectoHabilidades(){
    var skills =document.getElementById("skills");
    var distancia_skills = window.innerHeight -skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades= document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("css");
        habilidades[2].classList.add("html");
    }
}
// funcion que aplica las animación de las skills 
window.onscroll = function(){
    efectoHabilidades();
}