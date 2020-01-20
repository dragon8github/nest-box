// 新增
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActicleController } from './acticle/acticle.controller';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';

import { LogMiddleware } from './middleware/log.middleware'
import { AdminModule } from './module/admin/admin.module';

@Module({
  imports: [AdminModule],
  controllers: [AppController, ActicleController, NewsController],
  providers: [AppService, NewsService],
})

// 新增
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(LogMiddleware)
			// 匹配所有路由
			// .forRoutes('*')

			// 按路由和方法匹配：GET/POST
			.forRoutes({ path: 'news', method: RequestMethod.ALL })

			// 可以支持多个对象
			// .forRoutes({ path: 'news', method: RequestMethod.ALL }, { path: 'articles', method: RequestMethod.ALL })
	}
}

