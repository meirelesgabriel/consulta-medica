import { getRepository } from 'typeorm';

import Pacientes from '../models/Pacientes';

interface Request {
    nome: string;
}

class PacientesController {
    public async store({ nome }: Request): Promise<Pacientes> {
        const pacientesRepository = getRepository(Pacientes);

        const user = pacientesRepository.create({
            nome,
        });

        await pacientesRepository.save(user);

        return user;
    }
}

export default PacientesController;
