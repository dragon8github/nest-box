import { Controller, Get } from '@nestjs/common';

import { NewsService } from '../../../news/news.service'

@Controller('admin/news')
export class NewsController {
	// 注册服务
	constructor(private newsService: NewsService){}

	@Get()
	index() {
		return this.newsService.findAll()
	}
}

