import './style.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    if (menuIcon) {
      menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
      };
    }

    window.onscroll = () => {
      menuIcon?.classList.remove('bx-x');
      navbar?.classList.remove('active');

      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => link.classList.remove('active'));
          document
            .querySelector(`header nav a[href="#${id}"]`)
            ?.classList.add('active');
        }
      });
    };
  }, []);

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Felipe. <span className="animate" style={{ '--i': 1 }}></span>
        </a>
        <div className="bx bx-menu" id="menu-icon"></div>

        <nav className="navbar">
          <a href="#home" className="active">Início</a>
          <a href="#about">Sobre</a>
          <a href="#service">Serviços</a>
          <a href="#portfolio">Trabalhos</a>
          <a href="#contact">Contato</a>

          <span className="active-nav"></span>
          <span className="animate" style={{ '--i': 2 }}></span>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h1>Olá, sou Felipe F. Bezerra</h1>
          <div className="text-animate">
            <h3>Programador & Engenheiro de Dados</h3>
          </div>
          <p>
            Desenvolvedor Full-Stack em formação focado em Python, SQL e
            atividades de análise e modelagem de dados. Além disso,
            estou em constante evolução, aprimorando habilidades em
            cibersegurança e novas tendências tecnológicas.
          </p>
          <div className="btn-box">
            <a href="https://www.linkedin.com/in/felipe-florentino-bezerra/">Contrate Me</a>
            <a href="#contact">Contate-me!</a>
          </div>
        </div>

        <div className="home-sci">
          <a href="https://www.instagram.com/felipe.fbezerra/">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/felipe-florentino-bezerra/">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/felipefbezerra">
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="home-imgHover"></span>
      </section>

      <section className="about" id="about">
        <h2 className="heading">
          Sobre <span>Mim</span>
        </h2>

        <div className="about-img">
          <img src="/img/me1.jpg" alt="Minha Foto" />
          <span className="circle-spin"></span>
        </div>

        <div className="about-content">
          <h3>Desenvolvimento Tecnológico</h3>
          <p>
            Cursando Análise e Desenvolvimento de Sistemas,
            enfatizo meus estudos em Python, Engenharia e Modelagem de Banco de
            Dados. Minha trajetória inclui colaborações em ambientes
            internacionais, como no ENTER International e Compass UOL onde atuei em projetos voltados para educação e
            tecnologia, como também em análise de dados. Estou sempre em busca de desafios que me permitam
            aplicar e expandir minhas habilidades, com o objetivo de contribuir
            para a criação de soluções tecnológicas inovadoras e seguras
          </p>

          <div className="btn-box btns">
            <a href="https://www.linkedin.com/in/felipe-florentino-bezerra/" className="btn">
              Saiba mais
            </a>
          </div>
        </div>
      </section>

      <section className="service" id="service">
        <h2 className="heading">
          Meus <span>Serviços</span>
        </h2>
        <div className="service-container">
          <div className="service-item">
            <i className="bx bxl-python"></i>
            <h3>Análise de <br /> Dados</h3>
            <p>
              Análise e gerenciamento de banco de dados com foco em eficiência
              e segurança.
            </p>
          </div>
          <div className="service-item">
            <i className="bx bxl-html5"></i>
            <h3>Desenvolvimento Web</h3>
            <p>
              Criação de sites funcionais e responsivos com uma experiência de
              usuário eficiente.
            </p>
          </div>
          <div className="service-item">
            <i className="bx bx-code-alt"></i>
            <h3>Desenvolvimento de Sistemas</h3>
            <p>
              Desenvolvimento de sistemas personalizados para otimizar
              processos empresariais.
            </p>
          </div>
        </div>
      </section>


      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Meus <span>Trabalhos</span>
        </h2>
        <div className="portfolio-carousel">
          <div className="portfolio-item">
            <img src="/img/musikcitylogo.png" alt="Project 1" />
            <h3>MusikCity</h3>
            <p>
              Re-Branding e Prototipagem do Site da Produtora MusikCity para a
              disciplina de UX/UI Design do curso de ADS
            </p>
            <a href="https://felipefbezerra.github.io/musikcity/" target="_blank" rel="noreferrer">Ver Projeto</a>
          </div>
          <div className="portfolio-item">
            <h3>Sistema de Cálculo de Médias de Alunos</h3>
            <p>
              Sistema que permite calcular a média de notas de alunos em uma
              turma, determinar a média geral da turma, e identificar os alunos
              com as maiores e menores médias.
            </p>
            <a href="https://github.com/felipefbezerra/studentcalc" target="_blank" rel="noreferrer">Ver Projeto</a>
          </div>
          <div className="portfolio-item">
            <img src="/img/logoathenas.png" alt="Project 3" />
            <h3>Instituto Athenas</h3>
            <p>Site Institucional do projeto social denominado Instituto Athenas</p>
            <a href="https://www.institutoathenas.org/" target="_blank" rel="noreferrer">Ver Projeto</a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">
          Entre em <span>Contato!</span>
        </h2>

        <form action="https://formspree.io/f/xeooplow" method="POST">
          <div className="input-box">
            <div className="input-field">
              <input type="text" name="nome" placeholder="Nome Completo" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="email" name="email" placeholder="Email" required />
              <span className="focus"></span>
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input type="tel" name="whatsapp" placeholder="Whatsapp" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" name="assunto" placeholder="Assunto do Email" required />
              <span className="focus"></span>
            </div>
          </div>

          <div className="textarea-field field">
            <textarea name="mensagem" cols="30" rows="10" placeholder="Sua Mensagem" required className="item" autoComplete="off"></textarea>
            <span className="focus"></span>
          </div>

          <div className="btn-box btns">
            <button type="submit" className="btn">Enviar</button>
          </div>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-text">
          <p>&copy; 2025 by Felipe F. Bezerra | All Rights Reserved.</p>
        </div>

        <div className="footer-iconTop">
          <a href="#"><i className="bx bx-up-arrow-alt"></i></a>
        </div>
      </footer>
    </>
  );
}

export default App;
