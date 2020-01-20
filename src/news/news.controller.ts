import { join } from 'path'
import { createWriteStream } from 'fs'

import { Controller, Get, Post, Render, Body, Query, Param,
	// 上传需要的装饰器
	UseInterceptors, UploadedFile,
	// 管道
	UsePipes,
} from '@nestjs/common';

// 上传需要的装饰器（单图上传和多图上传）
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express'

// 引入管道
import { NewsPipe } from '../pipe/news.pipe'


// 9位 简易版
const MdUuid = () => Math.random().toString(36).slice(4)

@Controller('news')
export class NewsController {
	@Get()
	@Render('default/form')
	index() {
		return {
			// ...
		}
	}

	@Get('list')
	@UsePipes(NewsPipe)
	list(@Query() query) {
		// http://localhost:3000/news/list?id=123
		console.log('我接收到的参数是：', query)
		return '文章列表'
	}

	@Post('upload')
	@UseInterceptors(FileInterceptor('pic'))
	upload(@Body() body, @UploadedFile() file) {
		// 注意，file pic 不在 body 之中
		// enctype="multipart/form-data"
		console.log(file)

		const { originalname, buffer } = file

		const stream = createWriteStream(join(__dirname, '../../upload', `${Date.now()}-${MdUuid()}-${originalname}`))

		stream.write(buffer)

		return '图片上传成功'
	}
}