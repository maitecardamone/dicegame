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
		nomeImagem = "dado1.png";
	}else if(valorDado == 2){
		nomeImagem = "dado2.png";
	}else if(valorDado == 3){
		nomeImagem = "dado3.png";
	}else if(valorDado == 4){
		nomeImagem = "dado4.png";
	}else if(valorDado == 5){
		nomeImagem = "dado5.png";
	}else if(valorDado == 6){
		nomeImagem = "dado6.png";	
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

	//coloca o texto correto para cada jogador 
	//utilizando a função criada acima (textoCarta) - a função será executada
	// e o valor retornado será inserido no comando
	document.getElementById("textoDado01").innerHTML = "Player 1: " + textoDado(Dado01);
	document.getElementById("textoDado02").innerHTML = "Player 2: " + textoDado(Dado02);

	//coloca a imagem correta no parâmetro source do elemento de imagem correspondente
	document.getElementById("imgDado1").src = "imgs/" + nomeImagemDado(Dado01);
	document.getElementById("imgDado2").src = "imgs/" + nomeImagemDado(Dado02);

	//verifica qual a maior carta e indica quem ganhou
	if (Dado01 > Dado02){
		document.getElementById("textoResultado").innerHTML = "Player 1 wins!";
	}else if (Dado01 < Dado02){
		document.getElementById("textoResultado").innerHTML = "Player 2 wins!";
	}else if (Dado01 = Dado02){
		document.getElementById("textoResultado").innerHTML = "Draw! Play again!";
	}

} //fim da função jogarCartas 


//este é o unico comando que será executado quando a página carregar.
//estamos informando ao navegador que a função jogarCartas deve ser executada
//quando o botão correspondente for pressionado
document.getElementById("botaoStart").addEventListener("click", jogarDado);