import { IsUUID } from 'class-validator';
import { CreatePersonaInput } from './create-persona.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdatePersonaInput extends PartialType(CreatePersonaInput) {

  @Field(() => ID)
  @IsUUID()
  id: string;
  
}

