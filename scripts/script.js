    const precoBase = 200;
    const desconto = 0.10;  //10%
    const frete = 23;

    //Usando operadores artméticos 
    const ValorDesconto = precoBase * desconto;
    const precoFinal = precoBase - ValorDesconto;
    const precoFrete = precoFinal + frete;

   document.getElementById('preco-final').innerText = precoFinal;
   document.getElementById('precoFrete').innerText = precoFrete;