import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetToken, UserState } from '../store/user.state';
import { switchMap, take } from 'rxjs';

export const jwtSetterInterceptor: HttpInterceptorFn = (req, next) => {

  const authorization = req.headers.get('Authorization');

  if (!authorization) {
    return next(req);
  }

  const token = authorization.split(' ')[1];
  const store = inject(Store);

  return store.select(UserState.token).pipe(
    take(1),
    switchMap((storeToken) => {
      if (storeToken !== token) {
        store.dispatch(new SetToken(token));
        return next(req);
      }

      return next(req);
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