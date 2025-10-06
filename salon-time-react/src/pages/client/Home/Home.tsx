import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/common/Button/Button';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="home-page">
      {/* HOME SECTION */}
      <section className="home_section_pai">
        <div className="home_section_title">
          <div className="home_section_title_desc">
            <p className="super-titulo">Marina Mota Hair</p>
            <p className="paragrafo-2">
              Quando o assunto é auto cuidado, a Salon Time e Marina Motta são suas melhores amigas!
              Cadastre-se e agende seus serviços de beleza a qualquer hora, com praticidade e exclusividade, 
              além de promoções temporárias imperdíveis!
            </p>
          </div>
          <div className="btn-juntos">
            <Button variant="rosa" onClick={() => handleNavigation('/')}>
              Saiba Mais
            </Button>
            <Button variant="branco" onClick={() => handleNavigation('/servicos')}>
              Serviços
            </Button>
          </div>
        </div>
        <div className="home_section_img">
          <img src="/assets/img/Group 51.png" alt="imagem de fundo" />
        </div>
      </section>

      {/* ESPECIALIDADES SECTION */}
      <section className="especialidades_section_pai">
        <div className="especialidades_section_container">
          <p className="titulo-1">Nossas Especialidades</p>
          <div className="especialidades_section_cards">
            <div className="especialidades_section_card">
              <img src="/assets/svg/icon_tesoura.svg" alt="tesoura" />
              <p className="paragrafo-1 bold">Cortes</p>
              <p className="paragrafo-2">Textos com breves descrições dos cortes</p>
            </div>
            <div className="especialidades_section_card">
              <img src="/assets/svg/icon_pincel.svg" alt="pincel" />
              <p className="paragrafo-1 bold">Coloração</p>
              <p className="paragrafo-2">Textos com breves descrições das colorações</p>
            </div>
            <div className="especialidades_section_card">
              <img src="/assets/svg/icon_flores.svg" alt="flores" />
              <p className="paragrafo-1 bold">Tratamentos</p>
              <p className="paragrafo-2">Textos com breves descrições dos tratamentos</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="portifolio_section_pai">
        <p className="paragrafo-2 italic portifolio_section_title">Um pouco do meu trabalho!</p>
        <img src="/assets/img/portifolio_teste.png" alt="portifolio" />
        <a href="https://www.instagram.com/marinamotahair/" target="_blank" rel="noopener noreferrer">
          <Button variant="rosa" style={{ height: '50px' }}>
            <img src="/assets/svg/icon_instagram.svg" alt="" style={{ height: '30px' }} />
            Veja mais!
          </Button>
        </a>
      </section>

      {/* SOBRE MIM SECTION */}
      <section className="sobre_section_pai">
        <img src="/assets/img/marina_sobre_mim.png" alt="sobre-mim" style={{ height: '576px' }} />
        <div className="sobre_section_container">
          <p className="titulo-1" style={{ fontFamily: 'Georgia' }}>Sobre Mim</p>
          <p className="paragrafo-2" style={{ maxWidth: '424px' }}>
            Texto com uma breve descrição da Marina
          </p>
          <Button variant="rosa" onClick={() => handleNavigation('/servicos')}>
            Conheça os Serviços
          </Button>
        </div>
      </section>

      {/* LOCALIZACAO SECTION */}
      <section className="localizacao_section_pai">
        <div className="localizacao_section_container">
          <div className="localizacao_section_descricao">
            <p className="titulo-1">Onde nos encontrar</p>
            <div className="localizacao_section_info">
              <img src="/assets/svg/icon_localizacao.svg" alt="localização" />
              <p className="paragrafo-2">Rua Haddock Lobo, 595, São Paulo</p>
            </div>
            <div className="localizacao_section_info">
              <img src="/assets/svg/icon_telefone.svg" alt="telefone" />
              <p className="paragrafo-2">(11) 99999-9999</p>
            </div>
            <div className="localizacao_section_info">
              <img src="/assets/svg/icon_horario.svg" alt="horário" />
              <p className="paragrafo-2">Segunda à Sexta: 9h às 18h</p>
            </div>
          </div>
        </div>
        <div className="localizacao_section_mapa">
          {/* Google Maps placeholder */}
          <div style={{ 
            width: '100%', 
            height: '400px', 
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <p>Mapa será carregado aqui</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;