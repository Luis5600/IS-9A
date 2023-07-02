import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateEstudianteInput {

  @Field(()=>String )
  @IsNotEmpty()
  identificacion:string;

  @Field(()=>String )
  @IsNotEmpty()
  nombre:string;

  @Field(()=>String )
  @IsNotEmpty()
  curso:string;

  @Field(()=>String )
  @IsNotEmpty()
  representante:string;

  @Field(()=>Boolean )
  @IsOptional()
  estado:boolean;

  
}
