import { Router } from 'express';

import pacientesRouter from './pacientes.routes';
import medicosRouter from './medicos.routes';
import consultasRouter from './consultas.routes';

const routes = Router();

routes.use('/pacientes', pacientesRouter);
routes.use('/medicos', medicosRouter);
routes.use('/consultas', consultasRouter);

export default routes;
