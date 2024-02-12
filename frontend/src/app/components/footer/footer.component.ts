import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiLinkModule } from '@taiga-ui/core';
import { appName } from '../../app.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    TuiLinkModule
  ],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {

  appName = appName;

}
