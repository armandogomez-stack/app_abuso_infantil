import { Link } from "react-router-dom";
import fondo from "../assets/fondo.jpg";

const Home = () => {
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <h1 className="text-4xl font-bold text-blue-600 mb-4 bg-white bg-opacity-75 p-4 rounded">
            Bienvenido al Juego de Conciencia sobre el Abuso Infantil
        </h1>
        <p className="text-lg text-blue-500 mb-6 text-center px-4 bg-white bg-opacity-75 p-4 rounded">
            Este juego te ayudará a identificar y entender el abuso infantil.
        </p>
        <Link to="/game">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300">
                Comenzar Juego
            </button>
        </Link>
    </div>
      );
}
 
export default Home;