import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiHintModule, TuiSvgModule } from '@taiga-ui/core';

@Component({
    selector: 'app-stat',
    standalone: true,
    imports: [
        CommonModule,
        TuiSvgModule,
        TuiHintModule,
    ],
    templateUrl: './stat.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatComponent {

    @Input() label!: string;
    @Input() icon!: string;
    @Input() value!: number | string;

}
