function sorteio(menor, maior)
{

	var valorSorteio;
	 valorSorteio = Math.random(); 
	 valorSorteio = valorSorteio * (maior-menor+1);  
	 valorSorteio = Math.floor(valorSorteio); 
	 valorSorteio = valorSorteio + menor; 
	return	valorSorteio;
}

function textoDado(valorDado)
{
	var txtDado;
	
	if (valorDado == 1){
		txtDado = "1";
	}else if(valorDado == 2){
		txtDado = "2";
	}else if(valorDado == 3){
		txtDado = "3";
	}else if(valorDado == 4){
		txtDado = "4";
	}else {
		txtDado = valorDado;
	}
	return txtDado;
}
function nomeImagemDado(valorDado)
{
	var nomeImagem;
	
	if (valorDado == 1){
		nomeImagem = "1.jpg";
	}else if(valorDado == 2){
		nomeImagem = "2.jpg";
	}else if(valorDado == 3){
		nomeImagem = "3.jpg";
	}else if(valorDado == 4){
		nomeImagem = "4.jpg";
	}else if(valorDado == 5){
		nomeImagem = "5.jpg";
	}else if(valorDado == 6){
		nomeImagem = "6.jpg";	
	}else {
		nomeImagem = valorDado + ".png";
	}

	return nomeImagem;
}


function jogarDado()
{
	var Dado01;
	var Dado02;

	Dado01 = sorteio(1,6);
	Dado02 = sorteio(1,6);

	document.getElementById("textoDado01").innerHTML = "Player 1: " + textoDado(Dado01);
	document.getElementById("textoDado02").innerHTML = "Player 2: " + textoDado(Dado02);

	document.getElementById("imgDado1").src = "imgs/" + nomeImagemDado(Dado01);
	document.getElementById("imgDado2").src = "imgs/" + nomeImagemDado(Dado02);

	if (Dado01 > Dado02){
		document.getElementById("textoResultado").innerHTML = "Player 1 wins!";
	}else if (Dado01 < Dado02){
		document.getElementById("textoResultado").innerHTML = "Player 2 wins!";
	}else if (Dado01 = Dado02){
		document.getElementById("textoResultado").innerHTML = "Draw! Play again!";
	}

} 
document.getElementById("botaoStart").addEventListener("click", jogarDado);