let btnE = document.getElementById("btn-Encriptar");
let btnD = document.getElementById("btn-Desencriptar");
let btnC = document.getElementById("btn-Copiar");
let esconder = document.querySelectorAll(".esconder");
btnC.style.display = "none";

//encriptacion
let encriptaccion = {
	a: "ai",
	e: "enter",
	i: "imes",
	o: "ober",
	u: "ufat",
};
function cambiarcifrado(Resultado) {
	esconder.forEach((element) => (element.style.display = "none"));
	let p = document.createElement("p");
	let res = document.getElementById("resultado");
	res.textContent = "";
	res.append(p);
	p.textContent = Resultado;
	btnC.style.display = "block";
	btnC.addEventListener("click", () => {
		let input = document.createElement("input");
		res.append(input);
		input.value = Resultado;
		input.select();
		input.setSelectionRange(0, 99999);
		document.execCommand("copy");
		res.removeChild(input);
		alert("copiado")
		return
	});
	return
}
/** Encriptar Texto */
btnE.addEventListener("click", () => {
	let texto = document.getElementById("textoIngresado").value;
	let arr = Array.from(texto);
	for (let i = 0; arr.length > i; i++) {
		let index = arr[i];
		switch (index) {
			case "a":
				arr[i] = encriptaccion.a;
				break;
			case "e":
				arr[i] = encriptaccion.e;
				break;
			case "i":
				arr[i] = encriptaccion.i;
				break;
			case "o":
				arr[i] = encriptaccion.o;
				break;
			case "u":
				arr[i] = encriptaccion.u;
				break;
			case "A":
				arr[i] = encriptaccion.a;
				break;
			case "E":
				arr[i] = encriptaccion.e;
				break;
			case "I":
				arr[i] = encriptaccion.i;
				break;
			case "O":
				arr[i] = encriptaccion.o;
				break;
			case "U":
				arr[i] = encriptaccion.u;
				break;
		}
	}

	if (arr.length > 0) {
		cambiarcifrado(arr.join(""));
	} else {
		window.location.reload();
	}
});

btnD.addEventListener("click", () => {
	let texto = document.getElementById("textoIngresado").value;
	let arrD = Array.from(texto);
	let mensaje = texto;
	for (let i = 0; i < arrD.length; i++) {
		let desencriptado = mensaje
			.replace(encriptaccion.a, "a")
			.replace(encriptaccion.e, "e")
			.replace(encriptaccion.i, "i")
			.replace(encriptaccion.o, "o")
			.replace(encriptaccion.u, "u");
		mensaje = desencriptado;
	}
	if (mensaje.length > 0) {
		cambiarcifrado(mensaje);
	} else {
		window.location.reload();
	}
});
