import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path'

// 引入底层平台
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  // 修改平台
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 配置静态文件:http://localhost:3000/1.jpg
  // app.useStaticAssets(join(__dirname, '..', 'public'))

  // 配置虚拟目录: http://localhost:3000/static/1.jpg
  app.useStaticAssets(join(__dirname, '..', 'public'), {
  	prefix: '/static/'
  })

  app.setBaseViewsDir('views')
  app.setViewEngine('ejs')


  await app.listen(3000);
}
bootstrap();