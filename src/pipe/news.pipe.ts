import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class NewsPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
  	console.log('我是新闻管道', value)
  	
  	// 修改参数
  	value.id = 'fuckyou'

  	// 返回修改的参数
    return value;
  }
}

