var vp = document.getElementById("villakevo");
var papel = vp.getContext("2d");

document.addEventListener("keydown", moverCerdo);

var xCerdo = 150;
var yCerdo = 100;

var xVaca = new Array();
var yVaca = new Array();

var xPollo = new Array();
var yPollo = new Array();

function moverCerdo(e)
{
    var movimiento = 64;
    var teclas =
    {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        
    }
    switch(e.keyCode)
    {
        case teclas.LEFT:
            xCerdo = xCerdo - movimiento;
            dibujar(xCerdo, yCerdo);
        
        break;

        case teclas.UP:
            yCerdo = yCerdo - movimiento;
            dibujar(yCerdo, yCerdo);
        
        break;

        case teclas.RIGHT:
            xCerdo = xCerdo + movimiento;
            dibujar(xCerdo, yCerdo);

        break;

        case teclas.DOWN:
            yCerdo = yCerdo + movimiento;
            dibujar(xCerdo, yCerdo);

        break;


    }

}

var fondo =
{
    url: "tile.png",
    cargaOK: false

}  
var vaca = 
{
    url: "vaca.png",
    cargaOk: false
}
var pollo = 
{
    url: "pollo.png",
    cargaOk: false
}
var cerdo = 
{
    url: "cerdo.png",
    cargaOk: false

};

var cantidad = aleatorio(0, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);    

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);




function cargarFondo()
{
   fondo.cargaOK = true;
   dibujar();   
}
function cargarCerdos()
{
   cerdo.cargaOk = true;
   dibujar();

}
function cargarVacas()
{
   vaca.cargaOk = true;
   mantenerPosicion();

}
function cargarPollos()
{
   pollo.cargaOk = true;
   mantenerPosicion();

}


function mantenerPosicion()

{
    if(vaca.cargaOk)
    {
        var cantidad = aleatorio(1, 5);
        console.log(cantidad);
        for(var i=0; i<cantidad; i++)
        {
            var x = aleatorio (0, 6);
            var y = aleatorio (0, 6);
            x = x*70;
            y = y*70;
            xVaca[i] = x;
            yVaca[i] = y;

        
        }
    }
    if (pollo.cargaOk)
    {
        var cantidad = aleatorio(1, 10);
        for(var i=0; i<cantidad; i++)
       {
        var x = aleatorio(0, 6);
        var y = aleatorio(0, 6);
        x = x*70;
        y = y*70;
        xPollo[i] = x;
        yPollo[i] = y;

        }
    }

    dibujar();
}


function dibujar()
{
    if (fondo.cargaOK)
     {
         papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOk)
     {
         for(var i=0; i < 10; i++)
        {
         papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);
       }
    }
    if (pollo.cargaOk)
     {  
         for(var i=0; i < 10; i++)
        {
         papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);
       }
    }
    if (cerdo.cargaOk)
     {
         papel.drawImage(cerdo.imagen, xCerdo, yCerdo)
    }
    
}
function aleatorio(maxi, min)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min +1 )) + min;
    return resultado;

}