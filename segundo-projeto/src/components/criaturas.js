import React from 'react';

function Criaturas(props){
    let classCSS = 'criaturas'
  if (props.marcado){
    classCSS = 'marcado criaturas'
    }
  return( 
    <div className={classCSS} onClick={()=>props.marcarSelecionado(props.name)} >
      <img src={props.image} alt="" width='200'/>
      <h5>{props.name}</h5>
    </div>
  );
}

export default Criaturas;