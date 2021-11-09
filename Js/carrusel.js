let fotos = ["img/prueba1.jpg","img/prueba2.jpg","img/prueba3.jpg"]

flechIzq = document.getElementById("flechaIzq");
flechDer = document.getElementById("flechaDer");
let contador = 0;

flechIzq.addEventListener("click", function(){
    if(contador == 0){
        contador ++;
        document.getElementById("imag1").src = "img/prueba2.jpg";
        document.getElementById("imag2").src = "img/prueba3.jpg";
        document.getElementById("imag3").src = "img/prueba1.jpg";
    }
    else if (contador == 1){
        contador ++;
        document.getElementById("imag1").src = `img/prueba${3}.jpg`;
        document.getElementById("imag2").src = `img/prueba${1}.jpg`;
        document.getElementById("imag3").src = `img/prueba${2}.jpg`;
    }
    else{
        contador = 0;
        document.getElementById("imag1").src = `img/prueba${1}.jpg`;
        document.getElementById("imag2").src = `img/prueba${2}.jpg`;
        document.getElementById("imag3").src = `img/prueba${3}.jpg`;
    }   
});

flechDer.addEventListener("click", function(){
       if(contador == 0){
        contador = 2;
        document.getElementById("imag1").src = `img/prueba${3}.jpg`;
        document.getElementById("imag2").src = `img/prueba${1}.jpg`;
        document.getElementById("imag3").src = `img/prueba${2}.jpg`;
    }
    else if (contador == 2){
        contador --;
        document.getElementById("imag1").src = "img/prueba2.jpg";
        document.getElementById("imag2").src = "img/prueba3.jpg";
        document.getElementById("imag3").src = "img/prueba1.jpg";
    }
    else{
        contador --;
        document.getElementById("imag1").src = `img/prueba${1}.jpg`;
        document.getElementById("imag2").src = `img/prueba${2}.jpg`;
        document.getElementById("imag3").src = `img/prueba${3}.jpg`;
    }   
});