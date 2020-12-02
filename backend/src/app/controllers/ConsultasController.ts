import { getRepository } from 'typeorm';
// import { startOfHour, parseISO } from 'date-fns';
import Consultas from '../models/Consultas';

interface Request {
    paciente_id: string;
    medico_id: string;
    data: string;
}

class ConsultasController {
    public async store({
        paciente_id,
        medico_id,
        data,
    }: Request): Promise<Consultas> {
        // const dataPassada = startOfHour(parseISO(data));
        const consultasRepository = getRepository(Consultas);
        /*const encontrarConsultaDataIgual = await consultasRepository.findOne({ where: data });

        if (encontrarConsultaDataIgual) {
            throw new Error('O médico estará ocupado nesse horário');
        }*/

        const consulta = consultasRepository.create({
            paciente_id,
            medico_id,
            data,
        });
        await consultasRepository.save(consulta);
        return consulta;
    }

    // public async update({ paciente_id, medico_id, data }: Request): Promise<void> { }
}

export default ConsultasController;
