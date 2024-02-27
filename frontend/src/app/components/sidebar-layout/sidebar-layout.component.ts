import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sidebar-layout',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
    ],
    templateUrl: './sidebar-layout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            :host {
                display: flex;
                flex-grow: 1;
            }
        `,
    ],
})
export class SidebarLayoutComponent { }
