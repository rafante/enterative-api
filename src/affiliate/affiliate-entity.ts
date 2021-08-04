import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('affiliate')
export class Affiliate {
    @PrimaryGeneratedColumn()
    id: Number
    @Column({ unique: true })
    affiliateId: String
    @Column()
    name: String
    @Column({ name: 'img_url' })
    imgUrl: String
}
