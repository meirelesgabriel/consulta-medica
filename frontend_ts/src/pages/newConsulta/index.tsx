import React, {useState, useEffect } from 'react';
import { Title, Form, } from './styles';
import api from '../../services/api';

const NewEvent: React.FC = () => {

    interface IConsulta {
        id: string;
        paciente_id: string;
        medico_id: string;
        create_at: string;
        updated_at: string;
    }
    
    interface IPaciente {
        id: string;
        nome: string;
        create_at: string;
        updated_at: string;
    }

    interface IMedico {
        id: string;
        nome: string;
        especialidade: string;
        create_at: string;
        updated_at: string;
    }
    
    const [consultas, setConsultas] = useState<IConsulta[]>([]);
    const [medicos, setMedicos] = useState<IMedico[]>([]);
    const [pacientes, setPacientes] = useState<IPaciente[]>([]);

    async function handleAddConsulta() {
        // setConsultas([...consultas, `Nova consulta ${Date.now()}`]);
        // console.log(consultas);
        const response = await api.post('/consultas', {
            paciente_id: "410cdaec-02d8-4abf-8e81-a6344af6edf5",
            medico_id: "1ccd7b35-5044-42ed-8143-de6df0432a70",
            data: "2020-11-30T10:30:00.000Z"
        })
        const consulta = response.data;
        console.log(consulta);
        setConsultas([...consultas, consulta]);
    }

    return (
        <>

            <Title>Agendar uma consulta</Title>
            <p>Prencha os campos abaixo</p>

        <Form>
            <input type="text" name="paciente" placeholder="Paciente"></input>
            <input type="text" name="medico" placeholder="Médico"></input>
            <input type="date" name="data" placeholder="Data"></input>

            <button onClick={() => handleAddConsulta()} type="submit">Agendar</button>
        </Form>

        </>
    );
};

export default NewEvent;