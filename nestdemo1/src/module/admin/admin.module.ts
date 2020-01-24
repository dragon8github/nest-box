import { Module } from '@nestjs/common'
import { UserController } from './user/user.controller'
import { AppService } from '../../app.service'
import { LoginController } from './login/login.controller'

import { NewsService } from '../../news/news.service';
import { MongooseModule } from '@nestjs/mongoose'
import { ArticleSchema } from '../../schemas/article.schema'
import { NewsController } from './news/news.controller';

@Module({
  imports: [
  	MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema, collection: "article" }]),
  ],
  controllers: [UserController, LoginController, NewsController, ],
  providers: [AppService, NewsService]
})
export class AdminModule {}

