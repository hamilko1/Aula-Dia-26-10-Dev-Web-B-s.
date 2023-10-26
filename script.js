function atividade_1(btn){
    if(btn == 1){ 
        alert ('Voce apertou o botao 1!');
    }
    else if(btn == 2){
        alert('Voce apertou o botao 2!');
    }
    else{ 
        alert('Voce apertou o botao 3!');
    }
}

function atividade_4(){
    let nome_produto = Number(prompt('Informe nome do produto: '));
    let preco_produto = Number(prompt('Informe preço do produto: '));
    let valor_entregue = Number(prompt('Informe valor entregue ao vendedor: '));

    alert(`Você comprou um produto ${nome_produto}, por ${preco_produto.toFixed(2)} e entregou ao vendedor ${valor_entregue.toFixed(2)} em dinheiro. Você vai receber ${valor_entregue - preco_produto.toFixed(2)} de troco. Volte sempre!`)
}

let contador = 0;

function atividade_6(num){
    
     
    if(num == 1){
        contador++;
        document.getElementById('mensagem').innerText = `O contador está com ${contador} cliques` 
    }
    else{
        contador = 0;
        document.getElementById('mensagem').innerText = `O contador está com 0 cliques` 
    }
}

function atividade_8(){
    let num = prompt('Informe tabuada desejada: ');
    let i;
    let tabuada = '';

    for(i = 1; i <= 10; i++){
        tabuada = tabuada + `${num} x ${i} = ${num * i}<br>`
    }

    document.getElementById('resultado').innerHTML = `${tabuada}`;
}