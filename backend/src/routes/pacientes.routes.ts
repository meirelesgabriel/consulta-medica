import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import PacientesController from '../app/controllers/PacientesController';
import Pacientes from '../app/models/Pacientes';


const pacientesRouter = Router();

pacientesRouter.post('/', async (request: Request, response: Response) => {
    try {
        const { nome } = request.body;

        const pacientesController = new PacientesController();

        const pacient = await pacientesController.store({
            nome,
        });

        return response.json(pacient);
    } catch (erro) {
        return response.status(400).json({ error: erro.message });
    }
});

pacientesRouter.get(
    '/',
    async (request: Request, response: Response) => {
        const pacientesRepositorio = getRepository(Pacientes);
        const pacient = await pacientesRepositorio.find();
        // console.log(pacient);
        return response.json(pacient);
    },
);

pacientesRouter.get('/:id', async (request, response) => {
    const pacientesRepositorio = getRepository(Pacientes);
    const { id } = request.params;
    const pacient = await pacientesRepositorio.findOne(id);
    return response.json(pacient);
});

pacientesRouter.delete(
    '/:id',
    async (request, response) => {
        const usuariosRepositorio = getRepository(Pacientes);
        const { id } = request.params;
        await usuariosRepositorio.delete(id);
        return response.send();
    },
);

export default pacientesRouter;
