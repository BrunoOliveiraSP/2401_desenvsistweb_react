import { useState } from 'react';
import './index.scss'


export default function VarEstado() {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [res, setRes] = useState(0);




  function adicionarTarefa() {
    //tarefas.push(novaTarefa);
    setTarefas([...tarefas, novaTarefa]);
  }



  function somar() {
    let s = Number(n1) + Number(n2);
    setRes(s);
  }
  



  const [contador, setContador] = useState(0);
//  let contador = 0;

  function aumentar() {
//  contador = contador + 1;
    setContador(contador + 1)
  }

  function diminuir() {
    //  contador = contador - 1;
    setContador(contador - 1);
  }




  let boasVindas = 'Olá galera!!';

  return (
    <div className='pagina-var-estado'>
      <main>
        <h1> Variável de Estado</h1>
        <h2> {boasVindas} </h2>

        <br />

        <div className='contador'>
          <h2> Contador </h2>
          <button onClick={aumentar}> + </button>
          <span> {contador} </span>
          <button onClick={diminuir}> - </button>
        </div>

        <hr />

        <br />

        <div>
          <h2> Calculadora </h2>
          
          <div>
            <label> Número 01: </label>
            <input type='text' value={n1} onChange={e => setN1(e.target.value)} />
          </div>
          <br />
          <div>
            <label> Número 02: </label>
            <input type='text' value={n2} onChange={e => setN2(e.target.value)} />
          </div>
          <br />
          <div>
            {res}
          </div>
          <br />
          <div>
            <button onClick={somar}> Somar </button>
          </div>

        </div>


        <hr />


        <h2> Lista de Tarefas </h2>

        <label> Tarefa: </label>
        <input type='text' value={novaTarefa} onChange={e => setNovaTarefa(e.target.value)} />
        <button onClick={adicionarTarefa}>Add</button>

        {tarefas.map(item =>
          <li> {item} </li>
        )}

      </main>
    </div>
  )
}