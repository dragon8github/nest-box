import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path'

import * as cookieParser from 'cookie-parser'

import * as session from 'express-session'

// 引入底层平台
import { NestExpressApplication } from '@nestjs/platform-express'

// 引入守卫
import { AuthGuard } from './guard/auth.guard'

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

  // 配置 cookie 中间件
  app.use(cookieParser('this signed cookie'))
  // 配置 session 中间件
  app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 1000 * 60  * 60 * 24 }, httponly: true }))

  app.useGlobalGuards(new AuthGuard())


  await app.listen(3000);
}
bootstrap();