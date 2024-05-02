import { provideAnimations } from "@angular/platform-browser/animations";
import { TUI_SANITIZER, TuiRootModule, tuiButtonOptionsProvider } from "@taiga-ui/core";
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { TUI_FRENCH_LANGUAGE, TUI_LANGUAGE } from "@taiga-ui/i18n";
import { of } from "rxjs";
import { TUI_VALIDATION_ERRORS } from "@taiga-ui/kit";
import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { CartState } from "./store/cart.state";
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { UserState } from "./store/user.state";
import { appendJwtInterceptor, jwtSetterInterceptor } from "./interceptors/jwt.interceptors";
import { LikesState } from "./store/like.state";

export const appName = "Instagras";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([jwtSetterInterceptor, appendJwtInterceptor])),
    importProvidersFrom(TuiRootModule),
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_FRENCH_LANGUAGE),
    },
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer
    },
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        passwordMismatch: 'Les mots de passe ne correspondent pas',
        minLength: ({ requiredLength }: { requiredLength: string }) => `Vous devez entrer au moins ${requiredLength} caractères`
      }
    },
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_FRENCH_LANGUAGE)
    },
    tuiButtonOptionsProvider({
      shape: 'rounded',
      size: 'm'
    }),
    importProvidersFrom(NgxsModule.forRoot([CartState, UserState, LikesState], { developmentMode: true })),
    importProvidersFrom(NgxsReduxDevtoolsPluginModule.forRoot()),
    importProvidersFrom(NgxsStoragePluginModule.forRoot())
  ]
};
