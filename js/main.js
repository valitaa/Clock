$(document).ready(function() {

var meses = [ "Enero","Febrero","Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre","Noviembre","Diciembre" ]; 
var dias= ["Lunes", "Martes", "Miercoles","Jueves", "Viernes"]

var newDate = new Date();
newDate.setDate(newDate.getDate());  
$('#Dato').html(dias[newDate.getDay()] + " " + newDate.getDate() + ' ' + meses[newDate.getMonth()] + ' ' + newDate.getFullYear());

setInterval( function() {
  var segundos = new Date().getSeconds();
  $("#seg").html(( segundos < 10 ? "0" : "" ) + segundos);
  },1000);
  
setInterval( function() {
  var minutos = new Date().getMinutes();
  $("#min").html(( minutos < 10 ? "0" : "" ) + minutos);
    },1000);
  
setInterval( function() {
  var horas = new Date().getHours();
  $("#horas").html(( horas < 10 ? "0" : "" ) + horas);
    }, 1000); 
});
var ciudades = [
            {ciudad:"Chicago", zonaHoraria:"GMT -5"}, 
            {ciudad:"Sao Paulo", zonaHoraria:"GMT -3"}, 
            {ciudad:"Santiago", zonaHoraria:"GMT -4"}, 
            {ciudad:"Mexico D.F", zonaHoraria:"GMT -5"}, 
            {ciudad:"Caracas", zonaHoraria:"GMT -4"}, 
            {ciudad:"Brasilia", zonaHoraria:"GMT -3"}, 
            {ciudad:"Quito", zonaHoraria:"GMT -5"}, 
            {ciudad:"Gauyaquil", zonaHoraria:"GMT -5"}, 
            {ciudad:"Santa Marta", zonaHoraria:"GMT -5"}, 
            {ciudad:"bogota", zonaHoraria:"GMT -5"}
            ];
function agregar(){
    for(var i = 0 ; i <= 9 ; i++){
        $("#zona_horaria").append("<li>" + "Ciudad " + ciudades[i].ciudad + " " + "Zona horaria " + ciudades[i].zonaHoraria + "</li>");
    }
    $(this).off("click");
}