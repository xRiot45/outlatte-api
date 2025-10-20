import {
    BeforeInsert,
    BeforeUpdate,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    updatedAt: Date;

    @BeforeInsert()
    setCreateDate(): void {
        this.createdAt = new Date();
    }

    @BeforeUpdate()
    setUpdateDate(): void {
        this.updatedAt = new Date();
    }
}
