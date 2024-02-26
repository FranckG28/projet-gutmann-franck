import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-large-container',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet
    ],
    templateUrl: './large-container.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LargeContainerComponent { }
