flechIzq = document.getElementById("flechaIzquierda");
flechDer = document.getElementById("flechaDerecha");
let contador = 0;

flechIzq.addEventListener("click", function(){
    if(contador == 0){
        contador ++;
        document.getElementById("imag1").src = "../img/galeria/prueba2.jpg";
        document.getElementById("imag2").src = "../img/galeria/prueba3.jpg";
        document.getElementById("imag3").src = "../img/galeria/prueba1.jpg";
    }
    else if (contador == 1){
        contador ++;
        document.getElementById("imag1").src = `../img/galeria/prueba${3}.jpg`;
        document.getElementById("imag2").src = `../img/galeria/prueba${1}.jpg`;
        document.getElementById("imag3").src = `../img/galeria/prueba${2}.jpg`;
    }
    else{
        contador = 0;
        document.getElementById("imag1").src = `../img/galeria/prueba${1}.jpg`;
        document.getElementById("imag2").src = `../img/galeria/prueba${2}.jpg`;
        document.getElementById("imag3").src = `../img/galeria/prueba${3}.jpg`;
    }   
});

flechDer.addEventListener("click", function(){
       if(contador == 0){
        contador = 2;
        document.getElementById("imag1").src = `../img/galeria/prueba${3}.jpg`;
        document.getElementById("imag2").src = `../img/galeria/prueba${1}.jpg`;
        document.getElementById("imag3").src = `../img/galeria/prueba${2}.jpg`;
    }
    else if (contador == 2){
        contador --;
        document.getElementById("imag1").src = "../img/galeria/prueba2.jpg";
        document.getElementById("imag2").src = "../img/galeria/prueba3.jpg";
        document.getElementById("imag3").src = "../img/galeria/prueba1.jpg";
    }
    else{
        contador --;
        document.getElementById("imag1").src = `../img/galeria/prueba${1}.jpg`;
        document.getElementById("imag2").src = `../img/galeria/prueba${2}.jpg`;
        document.getElementById("imag3").src = `../img/galeria/prueba${3}.jpg`;
    }   
});