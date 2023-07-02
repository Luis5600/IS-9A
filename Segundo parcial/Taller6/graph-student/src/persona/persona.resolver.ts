import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { PersonaService } from './persona.service';
import { Persona } from './entities/persona.entity';
import { UpdatePersonaInput, CreatePersonaInput } from './dto/inputs';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Persona)
export class PersonaResolver {
  constructor(private readonly personaService: PersonaService) {}

  @Mutation(() => Persona)
  async createPersona(@Args('createPersonaInput') createPersonaInput: CreatePersonaInput)
  :Promise<Persona> {
    return this.personaService.create(createPersonaInput);
  }

  @Query(() => [Persona], { name: 'personas' })
  findAll() {
    return this.personaService.findAll();
  }

  @Query(() => Persona, { name: 'persona' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Persona> {
    return this.personaService.findOne(id);
  }

  @Mutation(() => Persona)
  updatePersona(@Args('updatePersonaInput') updatePersonaInput: UpdatePersonaInput) {
    return this.personaService.update(updatePersonaInput.id, updatePersonaInput);
  }

  @Mutation(() => Persona)
  removePersona(@Args('id', { type: () => ID }) id: string): Promise<Persona> {
    return this.personaService.remove(id);
  }
}
