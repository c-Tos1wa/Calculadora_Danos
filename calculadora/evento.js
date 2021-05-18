function iniciar(){
     const criaturas = document.getElementsByClassName('terceira') 
     for (let i = 0; i < criaturas.length; i++){
         const clique = criaturas[i]; //
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

    const divPai = itemSelecionado.parentElement //divisoria raiz do item selecionado
    const filho = divPai.children //cd um dos galhos da raiz
    for (let i=0; i < filho.length; i++){
        filho[i].classList.remove('marcado') //remover o box se tiver dois ao msm tempo
    }

    itemSelecionado.classList.add('marcado') //coloca um box cujas características estão no css

    const itemID = itemSelecionado.getAttribute('id');
}