import { Controller, Get, Render } from '@nestjs/common';
import { NewsService } from './news.service'

@Controller('news')
export class NewsController {
	// 注册服务
	constructor(private newsService: NewsService){}

	@Get()
	index() {
		return this.newsService.getData()
	}

	@Get('list')
	@Render('default/news') 
	list() {
		return {
			list: this.newsService.getData()
		}
	}
}