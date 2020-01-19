import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActicleController } from './acticle/acticle.controller';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';

@Module({
  imports: [],
  controllers: [AppController, ActicleController, NewsController],
  providers: [AppService, NewsService],
})
export class AppModule {}
