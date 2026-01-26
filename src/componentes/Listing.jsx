import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Button, Col } from 'react-bootstrap';


function Listing({ nombre, precio, fotoURL, descripcion }) {

  return (
    <>
      <div className="card row align-items-center w-100 p-2">
        <Col size="4">
          <img className="w-100 h-100" src={fotoURL} alt={"Foto de " + nombre} />
        </Col>

        <Col ColSpec="8" className='p-3'>
          <h4>{nombre}</h4>
          <h5>{descripcion}</h5>
          <p>${precio}</p>
          <div className='d-inline'>
            <Button>-</Button>
            <Button>+</Button>
          </div>
        </Col>
      </div>
    </>
  )
}

export default Listing
