import { Controller, Get } from '@nestjs/common';

import { AppService } from '../../../app.service'

@Controller('admin/user')
export class UserController {
	constructor(private appService: AppService) {}
    @Get()
    index() {
    	console.log(this.appService.getHello())
        // localhost:3000/user
        return '后台用户管理界面'
    }
}
