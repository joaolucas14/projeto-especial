// src/pages/About.tsx
import "./Sobre.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
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
          </Carousel>
        </section>
        <section>
          <TimeCounter />
        </section>
        <div className="linha"></div>
        <section>
          <p className="texto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex in
            modi, obcaecati repellendus perspiciatis voluptas optio, consequatur
            error ut soluta magnam vel, sed quas eveniet omnis animi rem fugiat
            debitis.
          </p>
        </section>
      </main>

      <footer id="contato" className="about-footer">
        <p>Feito pelo seu namorado</p>
      </footer>
    </div>
  );
}
