import { Controller, Get, Request } from '@nestjs/common';

@Controller('admin/login')
export class LoginController {
	@Get()
	index(@Request() req) {
		// http://192.168.31.97:3000/admin/login
		req.session.username = 'Lee'
		return '登陆成功'
	}

	@Get('test')
	test(@Request() req) {
		// http://192.168.31.97:3000/admin/login/test
		return req.session.username
	}
}
