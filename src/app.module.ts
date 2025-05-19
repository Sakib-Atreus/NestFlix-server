import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [MovieModule, GenreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
