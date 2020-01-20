import { Module } from '@nestjs/common'
import { UserController } from './user/user.controller'
import { AppService } from '../../app.service'

@Module({
  controllers: [UserController],
  providers: [AppService]
})
export class AdminModule {}

