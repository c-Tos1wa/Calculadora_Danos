let criaturaSelecionada
let armaSelecionada

function iniciar(){
     const criaturas = document.getElementsByClassName('terceira') 
     for (let i = 0; i < criaturas.length; i++){
         const clique = criaturas[i]; 
         clique.addEventListener('click', selecionado) //em um clique, estiliza a classe de criaturas
     };

     const armas = document.getElementsByClassName('quinta')
     for (let i = 0; i < armas.length; i++){
         const clique2 = armas[i];
         clique2.addEventListener('click', selecionado) //em um clique, estiliza a classe de armas
     }
  
}


function selecionado(evento){
    const itemSelecionado = evento.target.parentElement 

    const divPai = itemSelecionado.parentElement 
    const filho = divPai.children //cd um dos galhos da raiz
    for (let i=0; i < filho.length; i++){
        filho[i].classList.remove('marcado') //remover o box se tiver dois ao msm tempo
    }

    itemSelecionado.classList.add('marcado') //coloca um box cujas características estão no css

    var idElemento = itemSelecionado.id
    var itemID = divPai.getAttribute('name')
    
    if (itemID == 'personagem'){
        criaturaSelecionada = idElemento
    }
    else {
        armaSelecionada = idElemento
    }
}


function dano(evento){
    let botaoDano = evento.target;
    if (criaturaSelecionada == 'orc'){
        vida = 80
    }
    else if (criaturaSelecionada == 'goblin'){
        vida = 50
    }
    else {
        vida = 35
    };

    var ataque = Math.floor(Math.random()*100) + 1;

    if (vida > ataque){
        alert('Não foi desta vez! Tente novamente')
    }
    else {
        alert('Parabéns! '+ criaturaSelecionada + 'foi derrotado(a)')
    }
}



