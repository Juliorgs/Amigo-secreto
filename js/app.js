function adicionar(){
    let nome = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    
    if(nome.value == ''){
        alert('Digite o nome do amigo.');
    }else{
        if(lista.textContent == ''){
            lista.textContent = nome.value;
        } else {
            lista.textContent = lista.textContent + ", " + nome.value;
        }
    }
    nome.value = ''; //Isto limpa o campo "Nome do amigo"
}

function sortear(){
    let listaAmigosIncluidos = document.getElementById('lista-amigos');
    let listaNomes = listaAmigosIncluidos.textContent.split(', ');
    let indiceNovaListaNomes = [];
    let numeroSorteado = Math.floor(Math.random() * listaNomes.length);
    let novaListaNomes = [];

    if(listaNomes.length < 4){
        alert("Voce precisa inserir pelo menos 4 nomes para o sorteio")
        return;
    }

    for(let i = 0; i < listaNomes.length; i++){
        while(indiceNovaListaNomes.includes(numeroSorteado)){
            numeroSorteado = Math.floor(Math.random() * listaNomes.length);
        }
        indiceNovaListaNomes.push(numeroSorteado);
        novaListaNomes.push(listaNomes[numeroSorteado]);
    }
    let texto = document.getElementById('lista-sorteio');

    for(let i = 0; i < (listaNomes.length -1); i++){
        texto.innerHTML = texto.innerHTML + novaListaNomes[i] + " --> " + novaListaNomes[i+1] + "<br>";
    }

    texto.innerHTML = texto.innerHTML + novaListaNomes[listaNomes.length -1] + " --> " + novaListaNomes[0] + "<br>";

    desabilitarBotaoSortear();
    desabilitarBotaoAdicionar();
}

function reiniciar(){
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
    document.getElementById('nome-amigo').value = '';
    document.querySelector('.button.secondary').removeAttribute('disabled');
    habilitarBotaoAdicionar();
}
function desabilitarBotaoSortear(){
    document.querySelector('.button.secondary').setAttribute('disabled',true);
}

function desabilitarBotaoAdicionar(){
    document.querySelector('.button.primary').setAttribute('disabled',true);
}

function habilitarBotaoAdicionar(){
    document.querySelector('.button.primary').removeAttribute('disabled');
}
