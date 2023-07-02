import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaResolver } from './persona.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';

@Module({
  providers: [PersonaResolver, PersonaService],
  imports:[
    TypeOrmModule.forFeature([Persona])
  ]
})
export class PersonaModule {}
