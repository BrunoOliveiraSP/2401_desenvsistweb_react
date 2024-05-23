import './index.scss'


export default function Cabecalho(props) {


  return (
    <div className='comp-cabecalho'>
      <div>SENAC</div>
      <div> {props.titulo ?? 'DESENV.SIST.WEB'} </div>
      <div>2401</div>
    </div>
  )
}

