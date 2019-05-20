
var ans = document.getElementById('answer');
var qns = prompt("¿cuál es su nombre?");

if(qns == "Brenda") {
	ans.innerHTML = "Bienvenido administrador "+qns;
} else {
	ans.innerHTML = "Bienvenido Visitante "+qns;
}
