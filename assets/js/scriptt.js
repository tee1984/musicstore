/*
function trocarDiv (nome, idade) {
	var area = document.getElementById("area");
	var texto = prompt("Qual seu sobre nome?");

	area.innerHTML = nome+" "+texto+" tem "+idade+" anos ";
}
function adicionarIngrediente() {
	var ing = document.getElementById("Ingrediente").value;
	
	var listahtml = document.getElementById("lista").innerHTML;

	listahtml = listahtml + "<li>"+ing+"</li>";

	document.getElementById("lista").innerHTML = listahtml;

}
function multiplicar(){
	var campo1 = parseInt(document.getElementById("campo1").value);
	var campo2 = parseInt(document.getElementById("campo2").value);

	var multiplicacao = campo1 * campo2;
	alert(multiplicacao);
}
var x = 0;
document.write("Iniciando o loop...<br/>");
while (x < 10){
	document.write("Numero: "+x+"<br/>");

	x++;

}
document.write("Finalizando o loop...<br/>")
*/

document.querySelectorAll('.menu-item').forEach(function(element){
	element.addEventListener('mouseenter',function(e){
		let subItem = e.target.parentElement.querySelector('.submenu');
		subItem.style.display = 'flex';
	});
	element.addEventListener('mouseleave',function(e){
		let subItem = e.target.parentElement.querySelector('.submenu');
		subItem.style.display = 'none';
	});
});


document.querySelectorAll('.submenu').forEach(function(element){
	element.addEventListener('mouseenter',function(e){
		e.target.style.display = 'flex';
	});
	element.addEventListener('mouseleave',function(e){
		e.target.style.display = 'none';
	});
});