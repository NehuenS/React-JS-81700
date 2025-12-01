import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Button from './Button';


function Listing({ nombre, precio, fotoURL, descripcion }) {

  return (
    <div className="card row w-100">
      <div className="col-4">
        <img src={fotoURL} alt={"Foto de " + nombre} />
      </div>
      <div className="col-1 h-100"></div>
      <div className="col-7">
        <h4>{nombre}</h4>
        <h5>{descripcion}</h5>
        <p>${precio}</p>
        <Button
          label="-"
          classes="btn-danger"
          clickHandler="false"
        />
        <Button
          label="+"
          classes="btn-success"
          clickHandler="false"
        />
      </div>
    </div>
  )
}

export default Listing
