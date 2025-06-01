// src/pages/About.tsx
import "./Sobre.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import img20 from "../assets/img20.jpg";
import img21 from "../assets/img21.jpg";
import img22 from "../assets/img22.jpg";
import TimeCounter from "../Components/TimeCounter";
import MusicPlayer from "../Components/MusicPlayer";

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1, // Uma imagem por vez em todos os dispositivos
  },
};

export default function Sobre() {
  return (
    <div className="about-page">
      <main className="about-content">
        <section id="galeria" className="carousel-section">
          <MusicPlayer />
          <h2 className="subtitulo">Nossa História!</h2>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={6000}
            infinite={true}
            arrows={true}
            showDots={false}
            swipeable={true}
            draggable={true}
            keyBoardControl={true}
            containerClass="carousel-container"
            itemClass="carousel-item"
          >
            <div>
              <img src={img1} alt="Imagem 1" />
            </div>
            <div>
              <img src={img2} alt="Imagem 2" />
            </div>
            <div>
              <img src={img3} alt="Imagem 3" />
            </div>
            <div>
              <img src={img4} alt="Imagem 4" />
            </div>
            <div>
              <img src={img5} alt="Imagem 5" />
            </div>
            <div>
              <img src={img6} alt="Imagem 6" />
            </div>
            <div>
              <img src={img7} alt="Imagem 7" />
            </div>
            <div>
              <img src={img8} alt="Imagem 8" />
            </div>
            <div>
              <img src={img9} alt="Imagem 9" />
            </div>
            <div>
              <img src={img10} alt="Imagem 10" />
            </div>
            <div>
              <img src={img11} alt="Imagem 11" />
            </div>
            <div>
              <img src={img12} alt="Imagem 12" />
            </div>
            <div>
              <img src={img13} alt="Imagem 13" />
            </div>
            <div>
              <img src={img14} alt="Imagem 14" />
            </div>
            <div>
              <img src={img15} alt="Imagem 15" />
            </div>
            <div>
              <img src={img16} alt="Imagem 16" />
            </div>
            <div>
              <img src={img17} alt="Imagem 17" />
            </div>
            <div>
              <img src={img18} alt="Imagem 18" />
            </div>
            <div>
              <img src={img19} alt="Imagem 19" />
            </div>
            <div>
              <img src={img20} alt="Imagem 20" />
            </div>
            <div>
              <img src={img21} alt="Imagem 21" />
            </div>
            <div>
              <img src={img22} alt="Imagem 22" />
            </div>
          </Carousel>
        </section>
        <section>
          <TimeCounter />
        </section>
        <div className="linha"></div>
        <section>
          <p className="texto">
            Olha só quem diria em, estamos nós completando nosso primeiro ano,
            um tempo de muito aprendizado mas não poderia ter pedido coisa
            melhor a Deus do que esse nosso namoro, obrigado por tudo, por todos
            ensinamentos, inspiração carinho, aconchego, acolhimento, enfim
            obrigado por ser você, te amo demais e estamos apenas no começo 1/∞.
            (Obs: fiz pra gente não se perder mais nas contas kkkkkk)
          </p>
        </section>
      </main>

      <footer id="contato" className="about-footer">
        <p>Feito pelo seu namorado</p>
      </footer>
    </div>
  );
}
