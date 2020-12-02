import React from 'react';
import { Title, Form} from './styles'

const Login: React.FC = () => {
    return (
        <>
            <Title>Login</Title>
            <Form>
                <input placeholder="Paciente"/>
                <input placeholder="Médico"/>
                <input placeholder="Data"/>

                <button type="submit">Cadastrar</button>
            </Form>
        </>
    );
};

export default Login;