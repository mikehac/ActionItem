import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { PersonSaveDto } from './dto/person.save.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getPerson(): Promise<any> {
    return await this.appService.getPerson();
  }

  @Get('randomPersons')
  getRandomPersons() {
    return this.appService.getRandomPersons();
  }
  @Get('persons')
  getAllPersons() {
    return this.appService.getAllPersons();
  }

  @Get('person/:id')
  getPersonById(id: number) {
    return this.appService.getPersonById(id);
  }

  @Post('person')
  savePerson(@Body() person: PersonSaveDto) {
    return this.appService.savePerson(person);
  }
  @Put('updatePerson/:id')
  updatePerson(id: number, person: Partial<any>) {
    return this.appService.updatePerson(id, person);
  }

  @Delete('deletePerson/:id')
  deletePerson(id: number) {
    return this.appService.deletePerson(id);
  }
}
