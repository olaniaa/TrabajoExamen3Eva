document.getElementById('myButton').addEventListener('click', function() {
    alert('https://www.disneyplus.com/es-es');
});
document.getElementById('myButton2').addEventListener('click', function() {
    alert('¡Botón clicado!');
});
document.getElementById('myButton3').addEventListener('click', function() {
    alert('¡Botón clicado!');
});
document.getElementById('myButton4').addEventListener('click', function() {
    alert('https://git-scm.com/download/win');
});

function reloj() {
    let hora = new Date();
    let Horas = hora.getHours();
    let Minutos = hora.getMinutes();
    let Segundos = hora.getSeconds();


Horas = (Horas > 10) ? "0" + Horas : Horas; //Parametro utilizado para poner a la hora 0 si es menor que 10
Minutos = (Minutos> 10) ? "0" + Minutos : Minutos;
Segundos = (Segundos > 10) ? "0" + Segundos : Segundos;

let HoraFinal = Horas + ":" + Minutos + ":" + Segundos;
document.getElementById('Reloj').innerText = HoraFinal;
}
setInterval(reloj, 1000);