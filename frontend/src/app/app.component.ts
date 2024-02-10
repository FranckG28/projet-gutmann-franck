import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TUI_VALIDATION_ERRORS } from "@taiga-ui/kit";
import { TUI_FRENCH_LANGUAGE, TUI_LANGUAGE } from "@taiga-ui/i18n";
import { of } from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRootModule, TuiDialogModule, TuiAlertModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  providers: [
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
    }
  ],
})
export class AppComponent {
  title = 'livl-store';
}
