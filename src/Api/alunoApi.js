import axios from 'axios'

import { API_ADDRESS } from './constant';


export async function salvarAluno(corpo) {
  let url = API_ADDRESS + '/aluno/';

  let r = await axios.post(url, corpo);
  return r.data;
}


export async function alterarAluno(id, corpo) {
  let url = API_ADDRESS + '/aluno/' + id;

  let r = await axios.put(url, corpo);
  return r.data;
}


export async function buscarAlunos(notaMaior) {
  let url = API_ADDRESS + '/aluno/nota?nota=' + notaMaior;

  let r = await axios.get(url);
  return r.data;
}


export async function buscarAlunoPorId(id) {
  let url = API_ADDRESS + '/aluno/id/' + id;

  let r = await axios.get(url);
  return r.data;
}




export async function removerAluno(id) {
  let url = API_ADDRESS + '/aluno/' + id;

  let r = await axios.delete(url);
  return r.data;
}



export async function alterarCapa(id, capa) {
  let url = API_ADDRESS + '/aluno/imagem/' + id;

  let form = new FormData();
  form.append('imagem', capa);

  let r = await axios.put(url, form, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })

  return r.data;
}

