// import {Noticias} from "./components/Noticias";
import {Presentacion} from "./components/Presentacion";

function App() {

  return (
    <div>

      <h2>Hola Mundo</h2>
      <hr />
      {/* <Noticias /> */}

      <Presentacion nombre ='Johan Garcia' rol='Musico' edad={30} />
      <Presentacion nombre ='Diana Gallego' rol='Medica' edad={38} />
      <Presentacion nombre ='Alejandro Gallego' rol='Abogado' edad={30} />

    
    </div>
  );
}

export default App;
