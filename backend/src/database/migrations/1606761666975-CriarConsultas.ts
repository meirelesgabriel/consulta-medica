import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';
import { query } from 'express';

export class CriarConsultas1606761666975 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'consultas',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid', // universal unique id
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'paciente_id',
                        type: 'uuid',
                    },
                    {
                        name: 'medico_id',
                        type: 'uuid',
                    },
                    {
                        name: 'data',
                        type: 'timestamp with time zone',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'consultas',
            new TableForeignKey({
                columnNames: ['paciente_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'pacientes',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'consultas',
            new TableForeignKey({
                columnNames: ['medico_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'medicos',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('consultas');
    }

}
