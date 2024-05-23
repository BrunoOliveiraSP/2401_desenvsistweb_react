import './index.scss'
import { API_ADDRESS } from '../../Api/constant'
import { useNavigate } from 'react-router-dom'

export default function CartaoAluno({ item, cameraClick, alterarCapaImediato, editarAluno, removerAluno }) {
  const nav = useNavigate();


  function verDetalhe() {
    nav('/detalheAluno/' + item.id);
  }

  return (
    <div className='comp-cartao-aluno'>
      <img src={`${API_ADDRESS}/${item.capa}`} alt="" />
      <i className='fa fa-camera camera' onClick={() => cameraClick(item.id)}></i>
      <input type='file' id={'uploadCapa' + item.id} onChange={e => alterarCapaImediato(e, item)} />
      <div>
        <h2> {item.id}. {item.nome} </h2>
        <h3> Disciplina: {item.disciplina} </h3>
        <h4> Nota: {item.nota} </h4>
      </div>
      <button className='editar' onClick={() => editarAluno(item)}>Editar</button>
      <button className='remover' onClick={() => removerAluno(item)}>Remover</button>
      <button className='ver' onClick={verDetalhe}>Ver</button>
    </div>
  )
}

