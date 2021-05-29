import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import orc from './img2/orc.png';
import goblin from './img2/globin.png';
import feiticeira from './img2/feiticeira.png';
import soco from './img2/soco.png';
import arco from './img2/arco.png';
import espada from './img2/espada.png';
import Criaturas from './components/criaturas'
import Armas from './components/armas'


class Calculadora extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      monstro: '',
      ataque: '',
      mensagem:''
    }
  };
  
  selecionarCriatura(monstro){
    this.setState({
      monstro: monstro
    });
  }
  
  selecionarArma(ataque){
    this.setState({
      ataque: ataque
    });
  }
  
  calcularDano(){
    let forcaAtaque;
    if (this.state.ataque === 'Soco' || this.state.ataque === 'Arco' || this.state.ataque === 'Espada'){
      forcaAtaque = Math.floor(Math.random()*100) + 1;
    }

    let vida;
    if(this.state.monstro === 'Orc'){
      vida = 80
    }
    else if (this.state.monstro === 'Goblin'){
      vida = 50
    }
    else if (this.state.monstro === 'Feiticeira'){
      vida = 35
    }

    let dano = forcaAtaque - vida
    let mensagem;

    if (forcaAtaque === undefined || vida === undefined){
      mensagem = 'Selecione um personagem e uma arma'
    }
    else if (forcaAtaque > vida){
      mensagem = `Dano: ${dano}. Você venceu, ${this.state.monstro} foi derrotado!`
    }
    else{
      mensagem = `Dano: ${dano}. Tente Novamente!`
    }

    this.setState({
      mensagem: mensagem
    })
  }
  
  render() {
    return (
      <div id="fundo">
    <div id="primeira">
      <h1>Calculadora de Dano</h1>
    </div>

    <div id="segunda">
      <h2>Selecione um personagem</h2>
    </div>

      
  <div className="personagem">
    <Criaturas image={orc} name="Orc" marcarSelecionado={(monstro) => this.selecionarCriatura(monstro)} marcado={this.state.monstro === 'Orc'}/>
    <Criaturas image={goblin} name='Goblin' marcarSelecionado={(monstro) => this.selecionarCriatura(monstro)} marcado={this.state.monstro === 'Goblin'}/>
    <Criaturas image={feiticeira} name='Feiticeira' marcarSelecionado={(monstro) => this.selecionarCriatura(monstro)} marcado={this.state.monstro === 'Feiticeira'}/>  
  </div>
  <br/>

  <div id="quarta">
    <h3>Selecione uma arma</h3>
  </div>
  <br/>

  <div className="arma">
    <Armas image={soco} name='Soco' marcarSelecionado={(ataque) => this.selecionarArma(ataque)} marcado={this.state.ataque === 'Soco'}/>
    <Armas image={arco} name='Arco' marcarSelecionado={(ataque) => this.selecionarArma(ataque)} marcado={this.state.ataque === 'Arco'}/>
    <Armas image={espada} name='Espada' marcarSelecionado={(ataque) => this.selecionarArma(ataque)} marcado={this.state.ataque === 'Espada'}/>
  </div>
  <br/>
  
  <div className="sexta">
    <button id="botao" onClick={()=>this.calcularDano()}> 
      Calcular dano 
    </button>
  </div>
  <div id="mensagem">
    {this.state.mensagem}
  </div>
</div> 
    );
  }
}

ReactDOM.render(
  
  <Calculadora />,
  document.getElementById('root')
);

