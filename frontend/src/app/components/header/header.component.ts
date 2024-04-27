import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiButtonModule, TuiHintModule, TuiLinkModule } from '@taiga-ui/core';
import { appName } from '../../app.config';
import { menuEntries } from '../../config/menu-entries.config';
import { CartIconComponent } from '../cart-icon/cart-icon.component';
import { AccountCardComponent } from '../account-card/account-card.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TuiLinkModule,
    RouterModule,
    TuiButtonModule,
    TuiHintModule,
    CartIconComponent,
    AccountCardComponent
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  appName = appName;
  menuEntries = menuEntries;
}
