import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import Pacientes from './Pacientes';
import Medicos from './Medicos';

@Entity('consultas')
class Consultas {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    paciente_id: string;

    @ManyToOne(() => Pacientes)
    @JoinColumn({ name: 'paciente_id' })
    paciente: Pacientes;

    @Column()
    medico_id: string;

    @ManyToOne(() => Medicos)
    @JoinColumn({ name: 'medico_id' })
    medico: Medicos;

    @Column('time with time zone')
    data: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Consultas;
