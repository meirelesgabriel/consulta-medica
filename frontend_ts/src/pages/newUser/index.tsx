import React from 'react';
import { Title, Form } from './styles'

const NewUser: React.FC = () => {
    return (
        <>
            <Title>Cadastro</Title>
            <p>Você é novo por aqui? <strong>Cadastre-se</strong> agora</p>

            <Form>
                <input placeholder="Usuário"/>
                <input placeholder="Senha"/>

                <button type="submit">Concluir cadastro</button>
            
                <a href="/">voltar</a>
            </Form>
        </>
    );
};

export default NewUser;