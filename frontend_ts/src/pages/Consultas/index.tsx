import React, {useState, useEffect } from 'react';
import { Title, Events, Subtitulo } from './styles';
import api from '../../services/api';

interface IConsulta {
    id: string;
    paciente_id: string;
    medico_id: string;
}

interface IPaciente {
    id: string;
    nome: string;
}

interface IMedico {
    id: string;
    nome: string;
    especialidade: string;
}

const ShowConsultas: React.FC = () => {

    
    const [consultas, setConsultas] = useState<IConsulta[]>([]);
    const [medicos, setMedicos] = useState<IMedico[]>([]);
    const [pacientes, setPacientes] = useState<IPaciente[]>([]);

    useEffect( () => {
        api.get('/consultas').then(response => setConsultas(response.data));
    }, []);




    useEffect( () => {
        api.get('/medicos').then(response => setMedicos(response.data));
    }, []);
    console.log('Médicos: ', medicos);

    useEffect( () => {
        api.get('/pacientes').then(response => setPacientes(response.data));
    }, []);
    console.log('Pacientes: ', pacientes);

    return (
        <>
            <Events>
                <table>
                    <thead>
                        <tr>
                            <th>Consulta</th>
                            <th>Paciente</th>
                            <th>Médico</th>
                        </tr>
                    </thead>
                    <tbody>
                        {consultas.map((consulta, index) => (
                            <tr key={consulta.id}>
                                <td>{index + 1}</td>
                                <td>{consulta.paciente_id}</td>
                                <td>{consulta.medico_id}</td>
                            </tr>
                        ))}
                    </tbody>
                        <ul>
                            {consultas.map((consulta, index) => 
                                <li key={consulta.id}>
                                    Consulta nº: {index + 1}<br></br>
                                    Paciente: {consulta.paciente_id}<br></br>
                                    Médico: {consulta.medico_id}<br></br>
                                </li>)}
                        </ul>
                    
                </table>
            </Events>

            <Subtitulo>
                <a href="/">Excluir</a>
            </Subtitulo>

            <Subtitulo>
                <a href="/">Cadastrar</a>
            </Subtitulo>

            <Subtitulo>
                <a href="/">Sair</a>
            </Subtitulo>
        </>
    );
};

export default ShowConsultas;