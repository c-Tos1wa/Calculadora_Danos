import React from 'react';



function Armas(props){
    let classCss = 'armas'
  if (props.marcado){
    classCss = 'armas marcado'
  }
  return(
    <div className={classCss} onClick={()=>props.marcarSelecionado(props.name)}>
      <img src={props.image} alt="" width='150'/>
      <h5>{props.name}</h5>
    </div>
  )
}

export default Armas;