import { useParams } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react';

import { buscarAlunoPorId } from '../../Api/alunoApi'
import { API_ADDRESS } from '../../Api/constant';

export default function DetalheAluno() {
  const [nome, setNome] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [nota, setNota] = useState('');
  const [capa, setCapa] = useState('');


  const { id } = useParams();

  
  // CÓDIGO QUE EXECUTA 
  // A PRIMEIRA VEZ QUE CAREGA A TELA
  useEffect(() => {
    buscar();
  }, [])



  async function buscar() {
    let r = await buscarAlunoPorId(id);
    setNome(r.nome);
    setDisciplina(r.disciplina);
    setNota(r.nota);
    setCapa(r.capa);
  }


  return (
    <div>
      <img src={`${API_ADDRESS}/${capa}`} />
      <h1>{nome}</h1>
      <h2>{disciplina}</h2>
      <h2>Nota: {nota}</h2>
    </div>
  )
}