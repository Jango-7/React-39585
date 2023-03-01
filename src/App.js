// import {Noticias} from "./components/Noticias";
// import {Presentacion} from "./components/Presentacion";
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
// import { Tutores } from "./components/Tutores"
import { Contenedor } from "./components/Contenedor/Contenedor";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Contador } from "./components/Contador/Contador";
import { useState } from "react";


function App() {

  const [show, setShow] = useState(true)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div>
      <Contenedor>
        {/* <Presentacion nombre ='Johan Garcia' rol='Musico' edad={30} />
        <Presentacion nombre ='Diana Gallego' rol='Medica' edad={38} />
        <Presentacion nombre ='Alejandro Gallego' rol='Abogado' edad={30} /> */}
      </Contenedor>

      {/* <Alert variant="dark"> Esto es un mensaje de suma importancia para la humanidad </Alert>
      <Button style={{marginLeft: '120px'}} variant="success" size="lg">Click me!</Button> */}

      <ItemListContainer greeting="Welcome to the very best rated webpage in the world !" />

      <button onClick={handleShow} className="btn btn-danger">Mostrar contador</button>

      {
        show ? <Contador /> : null
      }

      {/* <Contador /> */}
    </div>
  );
}

export default App;
