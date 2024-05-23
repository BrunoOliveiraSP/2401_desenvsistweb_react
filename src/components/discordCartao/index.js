import './index.scss';


export default function DiscordCartao(props) {

  function escolherTema() {
    if (props.tema == 'claro')
      return 'comp-disc-claro'
    else if (props.tema == 'escuro')
      return 'comp-disc-escuro'
    else if (props.tema == 'colorido')
      return 'comp-disc-colorido'
    else 
      return 'comp-disc-claro'
  }


  return (
    <div className={`comp-disc-cartao ${escolherTema()}`}>
      <h1> {props.titulo} </h1>
      <img src={props.capa} />
    </div>
  )

}


