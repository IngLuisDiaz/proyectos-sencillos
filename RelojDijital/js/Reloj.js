const mostrarReloj =()=> {
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos= formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML=`${hora}:${minutos}:${segundos}`
    const meses =['ene', 'feb', 'marz', 'abril', 'mayo', 'jun', 'julio', 'agost','sep', 'oct', 'nov', 'dic'];
    const dias =['dom','lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
    let diaSemana= dias[fecha.getDate()];
    let dia = fecha.getDate();
    let mes= meses[fecha.getMonth()];
    let fechaTexto =`${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML=fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}
const formatoHora=(hora)=> {
    if(hora<10)
        hora='0' + hora
    return hora
}
setInterval(mostrarReloj, 1000)