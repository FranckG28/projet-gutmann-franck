import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-product-author',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './product-author.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductAuthorComponent {

    @Input() author!: string;

}
