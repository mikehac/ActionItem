import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
  getPersonById(@Param('id') id: string) {
    return this.appService.getPersonById(Number(id));
  }

  @Post('person')
  savePerson(@Body() person: PersonSaveDto) {
    return this.appService.savePerson(person);
  }

  @Put('person/:id')
  updatePerson(id: number, @Body() person: Partial<any>) {
    return this.appService.updatePerson(id, person);
  }

  @Delete('person/:id')
  deletePerson(id: number) {
    return this.appService.deletePerson(id);
  }
}
