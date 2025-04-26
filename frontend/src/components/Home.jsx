import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

function Home() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', display: 'flex', alignItems: 'center', color:"black",justifyContent: 'center' }}>
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
