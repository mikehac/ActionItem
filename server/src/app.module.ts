import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'nas',
      port: +process.env.DB_PORT || 54132,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'jacui4Nhftk',
      database: process.env.DB_NAME || 'actionItemdb',
      entities: [Person],
      synchronize: true,
      ssl: false,
    }),
    TypeOrmModule.forFeature([Person]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
