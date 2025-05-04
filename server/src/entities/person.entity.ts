import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  @Column()
  thumbnail_image: string;
  @Column()
  large_image: string;
  @Column()
  gender: 'male' | 'female';
  @Column()
  country: string;
  @Column()
  phone: string;
  @Column()
  email: string;
}
