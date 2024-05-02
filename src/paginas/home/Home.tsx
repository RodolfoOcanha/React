import React from 'react';
import homeLogo from '../../assets/home.png'
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

function Home() {
    return (
        <div className="w-full h-screen flex flex-col justify-start items-center">
            <div className="flex flex-col gap-4 items-center justify-center py-4 h-full">
                <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
                <p className='text-xl'>Expresse aqui seus pensamentos e opiniões</p>

                <div className="flex justify-around gap-4">
                    <ModalPostagem />
                    <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
                </div>

                <div className="flex justify-center flex-grow">
                    <img src={homeLogo} alt="" className='max-w-full max-h-full' />
                </div>
            </div>
            <ListaPostagens />
        </div>
    );
}

export default Home;
