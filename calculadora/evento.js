let criaturaSelecionada
let armaSelecionada

function iniciar(){
     const criaturas = document.getElementsByClassName('terceira') 
     for (let i = 0; i < criaturas.length; i++){
         const clique = criaturas[i]; 
         clique.addEventListener('click', selecionado) 
     };

     const armas = document.getElementsByClassName('quinta')
     for (let i = 0; i < armas.length; i++){
         const clique2 = armas[i];
         clique2.addEventListener('click', selecionado) 
     }
  
}

function selecionado(evento){
    const itemSelecionado = evento.target.parentElement 

    const divPai = itemSelecionado.parentElement 
    const filho = divPai.children 
    for (let i=0; i < filho.length; i++){
        filho[i].classList.remove('marcado') 
    }

    itemSelecionado.classList.add('marcado') 

    var idElemento = itemSelecionado.id
    var itemID = divPai.getAttribute('name')
    
    if (itemID == 'personagem'){
        criaturaSelecionada = idElemento
    }
    else {
        armaSelecionada = idElemento
    }
}


function dano(){
    var ataque = Math.floor(Math.random()*100) + 1;
    var vida;
    
    if (criaturaSelecionada == 'orc'){
        vida = 80
    }
    else if (criaturaSelecionada == 'goblin'){
        vida = 50
    }
    else {
        vida = 35
    };

    if (vida > ataque){
        alert('Não foi desta vez! Tente novamente')
    }
    else {
        alert('Parabéns! '+ criaturaSelecionada + 'foi derrotado(a)')
    }
}