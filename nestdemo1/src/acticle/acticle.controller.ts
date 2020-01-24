import { Controller, Get, Post, Query, Body, Param } from '@nestjs/common';

@Controller('acticle')
export class ActicleController {
	@Get()
	index() {
		return 'news'
	}

	@Get('add')
	addArticle(@Query() query) {
		// http://localhost:3000/acticle/add?id=123&name=zhangsan
		console.log(query) // => { id: '123', name: 'zhangsan' }

		return 'add news'
	}

	@Get(':id')
	findArticle(@Param() params) {
		// http://localhost:3000/acticle/1
		console.log(params) // => { id: '1' }
		return `this action a #${params.id} cat`
	}


	@Post('update')
	updateArticle(@Body() body) {
		// curl -s -XPOST 'http://localhost:3000/acticle/update' -H 'Content-Type:application/json' -d '{"firstName": "JOJO", "lastName": "Joestar"}'
		console.log(body) // => { firstName: 'JOJO', lastName: 'Joestar' }
		return '更新文章'
	}
}
