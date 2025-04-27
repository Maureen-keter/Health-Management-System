import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import BannerImg from '../assets/BannerImg.png'


function Home() {
  return (
    <div className='Home' style={{backgroundImage:`url(${BannerImg})`}}>
      <Container className="text-center">
        <h1 className="mb-3">Health Programs</h1>
        <p className="mb-4 fs-5 text-muted">All About Health</p>
        <Link to="/programs">
          <Button variant="primary" size="lg">PROGRAMS</Button>
        </Link>
      </Container>
    </div>
  );
}

export default Home;
