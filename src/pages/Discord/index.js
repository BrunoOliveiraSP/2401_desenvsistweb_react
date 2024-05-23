import './index.scss'

import DiscordCartao from '../../components/discordCartao'

export default function Discord() {


  return (
    <div className='pagina-discord'>

      <main>
        <h1> Discord </h1>
      </main>

      <div className='lista'>

        <DiscordCartao tema="claro" capa="/assets/images/d1.svg" titulo="De clipes a fotos, compartilhe à vontade com uploads maiores" />
        <DiscordCartao tema="escuro" capa="/assets/images/d2.svg" titulo="Faça transmissões de aplicativos e jogos em HD" />
        <DiscordCartao tema="colorido" capa="/assets/images/d3.svg" titulo="Aumente a empolgação e faça memes com emojis personalizados onde quiser" />
        <DiscordCartao tema="claro" capa="/assets/images/d4.svg" titulo="Desbloqueie vantagens para suas comunidades com 2 Impulsos de Servidor" />

        

      </div>
      

    </div>
  )
}