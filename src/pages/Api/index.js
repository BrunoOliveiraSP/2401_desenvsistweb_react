import './index.scss'
import axios from 'axios'

import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'

import Cabecalho from '../../components/cabecalho'
import { useState } from 'react';

import * as alunoApi from '../../Api/alunoApi';
import CartaoAluno from '../../components/cartaoAluno'


/*
 * FRUFRUS
 * 
 * (ok) Alert customizado
 * (ok) Perguntar antes de remover
 * (ok) Configuração da Navegação em arquivo separado
 * (ok) Página NotFound 404
 * (ok) Funções da API em arquivo separado
 * (ok) Trocar a Imagem pela Listagem
 * (ok) Transformar em componente Cartao
 * (ok) Passar parâmetros para outra página
 * Exibir preview do input[file]
 *  
 */


export default function Api() {
  const [listaAlunos, setListaAlunos] = useState([]);
  const [notaMaior, setNotaMaior] = useState(0);

  const [id, setId] = useState('');
  const [capa, setCapa] = useState('');

  const [nome, setNome] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [nota, setNota] = useState('');




  async function buscar() {
    let info = await alunoApi.buscarAlunos(nota);
    setListaAlunos(info);
  }


  async function salvarAluno() {
    let corpo = {
      "nome": nome,
      "disciplina": disciplina,
      "nota": nota
    }

    if (id == '') {
      let info = await alunoApi.salvarAluno(corpo);
      toast.success('Aluno inserido com ID: ' + info.id);
    }
    else {
      let r = await alunoApi.alterarAluno(id, corpo);
      toast.success('Aluno alterado com sucesso.');
      buscar();
    }

    limparCampos();
  }


  function limparCampos() {
    setId('');
    setNome('');
    setDisciplina('');
    setNota('');
    setCapa('');
  }


  function editarAluno(aluno) {
    setId(aluno.id);
    setNome(aluno.nome);
    setDisciplina(aluno.disciplina);
    setNota(aluno.nota);
  }


  async function removerAluno(aluno) {
    confirmAlert({
      title: 'Remover Aluno',
      message: 'Tem certeza que vai remover o aluno?',
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            let r = await alunoApi.removerAluno(aluno.id);
            toast.dark('✅ Aluno removido com sucesso.');

            buscar();
          }
        },
        { label: 'Não' }
      ]
    });
  }


  async function alterarCapa() {
    let r = await alunoApi.alterarCapa(id, capa)
    alert('Capa alterada!');
  }


  async function cameraClick(id) {
    document.getElementById('uploadCapa'+id).click();
  }


  async function alterarCapaImediato(e, aluno) {
    let r = await alunoApi.alterarCapa(aluno.id, e.target.files[0]);
    toast.dark('Capa alterada!');
  }





  return (
    <div className='pagina-api'>
      <Cabecalho />

      <main>
        <h1> Chamada em API </h1>


        <hr />

        <h2> Cadastrar Aluno </h2>

        <div className='form'>
          <div>
            <label> Capa: </label>
            <input type='file' onChange={e => setCapa(e.target.files[0])} />
            <button className='updCapa' onClick={alterarCapa}> Atualizar </button>
          </div>
          <div>
            <label> ID: </label>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
          </div>
          <div>
            <label> Nome: </label>
            <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
          </div>
          <div>
            <label> Disciplina: </label>
            <input type='text' value={disciplina} onChange={e => setDisciplina(e.target.value)} />
          </div>
          <div>
            <label> Nota: </label>
            <input type='text' value={nota} onChange={e => setNota(e.target.value)}  />
          </div>
          <div>
            <button onClick={salvarAluno}>
              {id == '' ? 'Cadastrar' : 'Alterar'}
            </button>
          </div>

        </div>


        <hr />

        <h2> Buscar Alunos </h2>
        <div className='form'>
          <div>
            <label> Nota maior que: </label>
            <input type='text' value={notaMaior} onChange={e => setNotaMaior(e.target.value)} />
          </div>
          <div>
            <button onClick={buscar}> Buscar </button>
          </div>
        </div>


        <br />

        <div className='lista'>

          {listaAlunos.map(item =>
            <CartaoAluno
              item={item}
              cameraClick={cameraClick}
              alterarCapaImediato={alterarCapaImediato}
              editarAluno={editarAluno}
              removerAluno={removerAluno}
            />
          )}


        </div>


        <br /><br /><br /><br /><br />
      </main>


    </div>
  )
}