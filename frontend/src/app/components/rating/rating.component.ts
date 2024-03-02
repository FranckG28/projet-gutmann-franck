import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiSvgModule } from '@taiga-ui/core';
import { TuiRatingModule } from '@taiga-ui/kit';

@Component({
    selector: 'app-rating',
    standalone: true,
    imports: [
        CommonModule,
        TuiRatingModule,
        FormsModule,
        ReactiveFormsModule,
        TuiSvgModule,
    ],
    templateUrl: './rating.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent {

    @Input() rating!: number;

    @Input() preview = false;

}
