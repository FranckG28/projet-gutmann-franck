import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignupFormComponent } from '../../components/signup-form/signup-form.component';
import { TitleComponent } from '../../components/title/title.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    TuiButtonModule,
    RouterModule,
  ],
  templateUrl: './homepage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent { }
