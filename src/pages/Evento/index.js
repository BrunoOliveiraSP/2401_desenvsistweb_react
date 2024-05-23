import './index.scss';


export default function Evento() {

  function usuarioClicou() {
    alert('Oii usuário fofo!');
  }

  function harryAnalisado() {
    alert('Usuário analisou o harry!')
  }

  function inputAlterado(e) {
    let novoValor = e.target.value;
    
    alert('Input alterado:: ' + novoValor);
  }

  function teclaApertada(e) {
    let tecla = e.key;

    alert('Tecla pressionada:: ' + tecla);
  }


  return (
    <div className='pagina-evento'>
      <main>
        <h1>Eventos</h1>

        <h2> onClick </h2>
        <button onClick={usuarioClicou}> Clique aqui </button>
        <hr />

        <br /><br />

        <h2> onMouseEnter </h2>
        <img onMouseEnter={harryAnalisado} src="/assets/images/harry.jpeg" alt="" />
        <hr />

        <br /><br />

        <h2> onChange </h2>
        <input onChange={inputAlterado} type='text' />
        <hr />


        <br /><br />

        <h2> onKeyUp </h2>
        <input onKeyUp={teclaApertada} type='text' />
        <hr />


      </main>
    </div>
  )

}