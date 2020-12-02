import { Router } from 'express';
import { getRepository } from 'typeorm';

import ConsultasController from '../app/controllers/ConsultasController';
import Consultas from '../app/models/Consultas';


const consultasRouter = Router();


consultasRouter.post('/', async (request, response) => {
    try {
        const { paciente_id, medico_id, data } = request.body;
        const consultasController = new ConsultasController();
        const consulta = await consultasController.store({
            paciente_id,
            medico_id,
            data,
        });
        return response.json(consulta);
    } catch (erro) {
        return response.status(400).json({ error: erro.message });
    }
});

// atualizar uma consulta
consultasRouter.post('/update/', async (request, response) => {
    try {
        const consultasRepositorio = getRepository(Consultas);
        const { id, paciente_id, medico_id, data, created_at, updated_at } = request.body;
        const consulta = await consultasRepositorio.update(id, {
            paciente_id, 
            medico_id, 
            data,
            created_at,
            updated_at,
        });
        return response.json(consulta);
    } catch (erro) {
        return response.status(400).json({ error: erro.message });
    }
});

// listar todos os consultas
consultasRouter.get('/', async (request, response) => {
    const consultasRepositorio = getRepository(Consultas);
    const consulta = await consultasRepositorio.find();

    // usando a data de criação para ordenar, porque não criei um campo data
    //const sortedEventos = evento
    //    .slice()
    //    .sort((a, b) => (b.created_at ? -1 : a.created_at ? 1 : 0));

    //console.log(sortedEventos);
    // console.log(request.user);
    return response.json(consulta);
});

// listar uma única consulta
consultasRouter.get('/:id', async (request, response) => {
    const consultasRepositorio = getRepository(Consultas);
    const { id } = request.params;
    const user = await consultasRepositorio.findOne(id);
    return response.json(user);
});

// excluir uma consulta
consultasRouter.delete('/:id', async (request, response) => {
    const consultasRepositorio = getRepository(Consultas);
    const { id } = request.params;
    await consultasRepositorio.delete(id);
    return response.send();
});

export default consultasRouter;
