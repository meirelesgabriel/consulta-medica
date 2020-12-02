import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import MedicosController from '../app/controllers/MedicosController';
import Medicos from '../app/models/Medicos';


const medicosRouter = Router();

medicosRouter.post('/', async (request: Request, response: Response) => {
    try {
        const { nome, especialidade } = request.body;

        const medicosController = new MedicosController();

        const doctor = await medicosController.store({
            nome,
            especialidade,
        });

        return response.json(doctor);
    } catch (erro) {
        return response.status(400).json({ error: erro.message });
    }
});

// listar todos os usuários
medicosRouter.get(
    '/',
    async (request: Request, response: Response) => {
        const medicosRepositorio = getRepository(Medicos);
        const doctor = await medicosRepositorio.find();
        // console.log(request.doctor);
        return response.json(doctor);
    },
);

// listar um único usuário
medicosRouter.get('/:id', async (request, response) => {
    const medicosRepositorio = getRepository(Medicos);
    const { id } = request.params;
    const doctor = await medicosRepositorio.findOne(id);
    return response.json(doctor);
});

// excluir um usuário
medicosRouter.delete(
    '/:id',
    async (request, response) => {
        const usuariosRepositorio = getRepository(Medicos);
        const { id } = request.params;
        await usuariosRepositorio.delete(id);
        return response.send();
    },
);

export default medicosRouter;
