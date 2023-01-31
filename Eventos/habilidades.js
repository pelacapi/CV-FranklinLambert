
document.getElementById('presupuesto').addEventListener('click', function () {
    let numero1 = document.getElementById('cantidad-de-proyectos').value;
    let numero2 = document.getElementById('tiempo-estimado').value;
    let Resultado = (numero1*numero2);
    document.getElementById('Resultado').innerHTML= Resultado*384; //multiplicamos por el valor del dolar blue promedio, ya que es estimativo
    document.getElementById('contenedor-resultado').style.display= 'block';
});

