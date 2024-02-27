import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from '../../components/container/container.component';
import { appName } from '../../app.config';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    TuiButtonModule,
    RouterModule,
    ContainerComponent,
    TitleComponent,
  ],
  templateUrl: './homepage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent {

  appName = appName;

}
