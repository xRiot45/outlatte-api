import { Column, DeleteDateColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

export abstract class AuditEntity extends BaseEntity {
    @Column({
        name: 'created_by',
        type: 'varchar',
        length: 100,
        nullable: true,
    })
    createdBy?: string;

    @Column({
        name: 'updated_by',
        type: 'varchar',
        length: 100,
        nullable: true,
    })
    updatedBy?: string;

    @DeleteDateColumn({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
    })
    deletedAt?: Date | null;
}
