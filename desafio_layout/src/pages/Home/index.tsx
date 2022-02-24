import { ReactComponent as MainImage } from 'assets/images/car.svg';
import NavBar from 'components/NavBar';
import './styles.css';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="base-card home-container">
        <div className="home-card-container">
          <div className="home-content-container">
            <div>
              <h1>O Carro perfeito para você</h1>
            </div>
            <div>
              <h2>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </h2>
            </div>
          </div>

          <div className="home-image-container">
            <MainImage />
          </div>
        </div>

        <div className="home-button-container">
          <h1>AQUI VAI UM BUTTON</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
