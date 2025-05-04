import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { firstValueFrom } from 'rxjs';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';
import { PersonSaveDto } from './dto/person.save.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Person) private personRepository: Repository<Person>,
    private readonly httpService: HttpService,
  ) {}
  async getPerson() {
    const result = await firstValueFrom(
      this.httpService.get(
        process.env.RANDOM_USER_URL ?? 'https://randomuser.me/api/',
      ),
    );

    return result.data;
  }

  async getRandomPersons() {
    const result = await firstValueFrom(
      this.httpService.get(
        `${process.env.RANDOM_USER_URL ?? 'https://randomuser.me/api/'}?results=10`,
      ),
    );

    return result.data.results;
  }

  async savePerson(person: PersonSaveDto) {
    const entityPerson = new Person();
    entityPerson.name = person.name;
    entityPerson.gender = person.gender;
    entityPerson.thumbnail_image = person.thumbnail_image ?? '';
    entityPerson.large_image = person.large_image ?? '';
    entityPerson.phone = person.phone ?? '';
    entityPerson.email = person.email ?? '';
    entityPerson.country = person.country ?? '';

    const newPerson = this.personRepository.create(entityPerson);
    return await this.personRepository.save(newPerson);
  }

  async getAllPersons() {
    return await this.personRepository.find();
  }

  async getPersonById(id: number) {
    const person = await this.personRepository.findOneBy({ id });
    if (!person) {
      throw new Error('Person not found');
    }
    return person;
  }

  async updatePerson(id: number, person: Partial<Person>) {
    const existingPerson = await this.personRepository.findOneBy({ id });
    if (!existingPerson) {
      throw new Error('Person not found');
    }
    const updatedPerson = { ...existingPerson, ...person };
    return await this.personRepository.save(updatedPerson);
  }

  async deletePerson(id: number) {
    const person = await this.personRepository.findOneBy({ id });
    if (!person) {
      throw new Error('Person not found');
    }
    return await this.personRepository.remove(person);
  }
}
