import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { appTitleProvider } from '../../providers/app-title.provider';

@Component({
    selector: 'app-appbar',
    standalone: true,
    imports: [
        CommonModule,
        TuiButtonModule,
    ],
    templateUrl: './appbar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppbarComponent {

    readonly back = inject(Location).back.bind(inject(Location));

    readonly title = inject(appTitleProvider);
}
