import { HttpEventType, type HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetToken, UserState } from '../store/user.state';
import { switchMap, take, tap } from 'rxjs';

export const jwtSetterInterceptor: HttpInterceptorFn = (req, next) => {
  const store = inject(Store);
  return next(req).pipe(
    tap((res) => {

      if (res.type !== HttpEventType.Response) {
        return
      }

      const authorization = res.headers.get('Authorization');

      if (authorization) {
        const token = authorization.split(' ')[1];
        store.dispatch(new SetToken(token));
      }
    })
  );

};

export const appendJwtInterceptor: HttpInterceptorFn = (req, next) => {

  return inject(Store).select(UserState.token).pipe(
    take(1),
    switchMap(token => {
      if (token) {
        req = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
      }

      return next(req);
    })
  );

}