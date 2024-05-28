import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ImageCard from "./ImageCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import imagen1 from "../assets/abuso1.jpg";
import imagen2 from "../assets/abuso2.jpg";
import imagen3 from "../assets/abuso3.jpg";
import imagen4 from "../assets/imagen4.png";
import imagen5 from "../assets/sinabuso1.jpg";
import imagen6 from "../assets/sinabuso2.jpg";
import imagen7 from "../assets/sinabuso3.jpg";
import imagen8 from "../assets/sinabuso4.jpg";

const Game = () => {
    const navigate = useNavigate();
    const [selectedImages, setSelectedImages] = useState([]);
    const [mostrar, setMostrar] = useState(false);
    const [nombre, setNombre] = useState('');
    const [nombreIngresado, setNombreIngresado] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const form = useRef();
    console.log("mensaje",mensaje)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9bk20ju', 'template_mqfiucg', form.current, 'XMaJUUnIXlAbbi8xZ')
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    const handleSelectImage = (label) => {
        if (selectedImages.length === 4 && !selectedImages.includes(label)) {
            toast.warn('🦄 Ya seleccionaste 4 imagenes, es el maximo de selección!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        setSelectedImages((prevSelected) =>
            prevSelected.includes(label)
                ? prevSelected.filter((item) => item !== label)
                : [...prevSelected, label]
        );
    };

    const images = [
        { src: imagen1, label: 'imagen 1', tipo: true },
        { src: imagen5, label: 'imagen 2', tipo: false },
        { src: imagen2, label: 'Imagen 3', tipo: true },
        { src: imagen6, label: 'imagen 4', tipo: false },
        { src: imagen3, label: 'Imagen 5', tipo: true },
        { src: imagen7, label: 'imagen 6', tipo: false },
        { src: imagen4, label: 'imagen 7', tipo: true },
        { src: imagen8, label: 'imagen 8', tipo: false },
    ];

    const handleNombreSubmit = (e) => {
        e.preventDefault();
        if (nombre.trim() === '') {
            toast.warn('🦄 Por favor ingresa un nombre para continuar!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        setNombreIngresado(true);
        console.log("nombreIngresado", nombre);
    };

    const enviarSeleccion = () => {
        let mensaje = "";
        
        const otrasImagenes = ['imagen 1', 'Imagen 3', 'imagen 5', 'imagen 7'];
        const imagenesCoincidentes = selectedImages.filter(img => otrasImagenes.includes(img));
        console.log("imagenesCoincidentes",imagenesCoincidentes)
        if (imagenesCoincidentes.length > 0) {
            // Filtrar las imágenes que no son undefined
            const imagenesDefinidas = imagenesCoincidentes.filter(img => img !== undefined);
        
            if (imagenesDefinidas.length > 0) {
                // Construir el mensaje
                let mensaje = `El niño ha seleccionado ${imagenesDefinidas.length} imágenes que contienen abusos: `;
                mensaje += imagenesDefinidas.join(', ');
                
                // Mostrar el mensaje
                console.log(mensaje);
                setMensaje(mensaje)
            } else {
                console.log("No se encontraron imágenes definidas.");
            }
        }
        toast.success('🦄 Gracias por participar en el juego, eres una persona especial!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
    
            });
            setMostrar(true);
            setTimeout(()=>{
                navigate('/');
            },3000)
            
                 
    };

    const handleClick = (e) => {
        enviarSeleccion();
        sendEmail(e);
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
                <ToastContainer />
                {nombreIngresado && (
                    <h2 className="text-2xl font-bold text-yellow-500 mb-4">
                        Bienvenido, {nombre.toUpperCase()}!
                    </h2>
                )}
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                    Identifica las Imágenes
                </h1>
                {!nombreIngresado ? (
                    <form onSubmit={handleNombreSubmit} className="mb-4">
                        <label htmlFor="nombre" className="text-lg text-blue-500 mb-2 block">Ingresa tu nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="p-2 border border-blue-300 rounded mb-2"
                        />
                        <button
                            type="submit"
                            className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
                        >
                            Confirmar Nombre
                        </button>
                    </form>
                ) : (
                    <>
                        <p className="text-lg text-blue-500 mb-6 text-center px-4">
                            Selecciona 4 imágenes que te representen a ti y a tu familia, {nombre}.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {images.map((image) => (
                                <ImageCard
                                    key={image.label}
                                    imageSrc={image.src}
                                    label={image.label}
                                    onSelect={handleSelectImage}
                                    isSelected={selectedImages.includes(image.label)}
                                />
                            ))}
                        </div>
                        <div className="mt-6">
                            <button
                                className="bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
                                onClick={handleClick}
                            >
                                Confirmar Selección
                            </button>
                        </div>
                    </>
                )}
            </div>
            {mostrar && (
                <form ref={form} onSubmit={sendEmail} className="mt-6">
                    <label>Name</label>
                    <input type="text" name="from_name" defaultValue={nombre} />
                    <label>Email</label>
                    <input type="email" name="user_email" defaultValue="john.doe@example.com" />
                    <label>Message</label>
                    <textarea name="message" defaultValue={mensaje} />
                    <input type="submit" value="Send" />
                </form>
            )}
        </>
    );
};

export default Game;
