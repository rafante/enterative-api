import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AffiliateEntity {
    @PrimaryGeneratedColumn()
    id: Number
    @Column()
    name: String
    @Column({ name: 'picture_path' })
    picturePath: String
}
