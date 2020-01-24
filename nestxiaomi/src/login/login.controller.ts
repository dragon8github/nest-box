import { Controller, Get, Post, Query, Body, Param, Render, Request, Response, RequestMethod } from '@nestjs/common'
import { ToolsService } from '../service/tools/tools.service'

@Controller('login')
export class LoginController {

	constructor(private toolsService: ToolsService){}

	@Get('verify')
	async verify(@Request() req, @Response() response) {
	    // 服务里面的方法
	    var captcha = await this.toolsService.captcha()
	    // req.session.code = captcha.text;
	    console.log(20200124215320, captcha.text)
	    // 指定返回的类型
	    response.type('image/svg+xml');
	    // 给页面返回一张图片
	    response.send(captcha.data);
	}
}
