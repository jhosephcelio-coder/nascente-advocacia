import SEO from './components/SEO.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Atuacao from './components/Atuacao.jsx'
import Advogada from './components/Advogada.jsx'
import Conteudo from './components/Conteudo.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFab from './components/WhatsAppFab.jsx'

export default function App() {
  return (
    <>
      {/* SEO / metatags */}
      <SEO />

      {/* Acessibilidade — pular para conteúdo principal */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      {/* Cabeçalho fixo */}
      <Header />

      {/* Conteúdo principal */}
      <main id="main-content">
        <Hero />
        <Sobre />
        <Atuacao />
        <Advogada />
        <Conteudo />
        <Contato />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Botão flutuante WhatsApp */}
      <WhatsAppFab />
    </>
  )
}
