// import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Listing from './componentes/Listing.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-100 text-center pb-4">
        <h1>Toda la Onda</h1>
        <h2>Productos Capilares para Cabellos Ondulados</h2>
      </div>
      <div className="container w-75 g-2">
        <Listing
          nombre="Máscara Capilar Fidelité Caviar 1Kg"
          precio="13000"
          fotoURL="./src/assets/react.svg"
          descripcion="Máscara Capilar Fidelité Caviar 1Kg"
        />
      </div>
    </>
  )
}

export default App
