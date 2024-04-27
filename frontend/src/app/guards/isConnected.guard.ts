import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { Store } from '@ngxs/store';
import { UserState } from '../store/user.state';
import { map, tap } from 'rxjs';

export const isConnectedGuard: CanActivateFn = () => {
  const router = inject(Router);
  return inject(Store).select(UserState.isAuthenticated).pipe(
    tap(isConnected => {
      if (!isConnected) {
        router.navigate(['/login']);
      }
    }),
  )
};

export const isNotConnectedGuard: CanActivateFn = () => {
  const router = inject(Router);
  return inject(Store).select(UserState.isAuthenticated).pipe(
    map(isConnected => !isConnected),
    tap(isNotConnected => {
      if (!isNotConnected) {
        router.navigate(['/login']);
      }
    })
  );
}