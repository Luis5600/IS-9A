import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonaInput, UpdatePersonaInput } from'./dto/inputs';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonaService {

  constructor( 
    @InjectRepository(Persona)
    private readonly personaRepository:Repository<Persona> ){}

  async create(createPersonaInput: CreatePersonaInput): Promise<Persona>  {
    const newPersona= this.personaRepository.create(createPersonaInput);
    return await this.personaRepository.save(newPersona); 
  }

  async findAll(): Promise<Persona[]> {
    return this.personaRepository.find();
  }

  async findOne(id: string): Promise<Persona> {
     const persona= await  this.personaRepository.findOneBy({id});
     if (!persona) throw new NotFoundException(`Not found`)
     return persona;
  }

  async update(id: string, updatePersonaInput: UpdatePersonaInput): Promise<Persona> {
    
    const persona = await this.personaRepository.preload(updatePersonaInput);
    if (!persona) throw new NotFoundException(`Not found`)
    return this.personaRepository.save(persona);

  }

  async remove(id: string): Promise<Persona> {

    const persona= await  this.findOne(id);
    persona.estado =false;

    await this.personaRepository.update(id, persona);

    return persona;

  }
}

