import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { appEntries } from '../../config/menu-entries.config';
import { RouterModule } from '@angular/router';
import { TuiButtonModule, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { AccountCardComponent } from '../../account-card/account-card.component';

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        TuiButtonModule,
        AccountCardComponent
    ],
    providers: [
        tuiButtonOptionsProvider({
            size: 'l',
        })
    ],
    templateUrl: './navigation.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {

    menuEntries = appEntries;

}
