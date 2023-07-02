//import { ObjectType, Field, Int } from '@nestjs/graphql';

//@ObjectType()
//export class Persona {
//  @Field(() => Int, { description: 'Example field (placeholder)' })
//  exampleField: number;
//}

import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'personas'})
@ObjectType()
export class Persona {
  
    @PrimaryGeneratedColumn('uuid')
    @Field(()=> ID)
    id:string;
    
    @Column()
    @Field(()=> String)
    identificacion:string;

    @Column()
    @Field(()=>String)
    nombre:string;

    @Column()
    @Field(()=>Boolean)
    estado:boolean;



}
