import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
  	console.log('守卫执行了')

  	const req = context.switchToHttp().getRequest()

  	const { path, session } = req

  	console.log(path, session.username)

  	// 如果是登陆页或者用户名存在的话，不拦截
  	if (req.path === '/admin/login' || session.username) {
  		return true
  	}

    return false
  }
}

