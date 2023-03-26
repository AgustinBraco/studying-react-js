import './home.css';

// Bootstrap
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel interval="2800" fade="true" touch="true">
      <Carousel.Item>
        <img src="/assets/images/banner-1.png" alt="first-banner" className="image"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/assets/images/banner-2.png" alt="second-banner" className="image"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/assets/images/banner-3.png" alt="third-banner" className="image"/>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;