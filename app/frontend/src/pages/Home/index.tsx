import NavBar from "components/NavBar";
import { ReactComponent as MainImage } from "assets/images/main-image.svg";
import ButtonIcon from "components/ButtonIcon";
import "./styles.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="base-card home-container">
        <div className="home-card">
          <div className="home-content-container">
            <div>
              <h1>Conheça o melhor catálogo de conteúdo</h1>
              <p>
                Ajudaremos você a encontrar os melhores produtos disponíveis no
                mercado.
              </p>
            </div>
            <ButtonIcon />
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
