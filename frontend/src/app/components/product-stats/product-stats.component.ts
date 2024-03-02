import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TuiSvgModule } from '@taiga-ui/core';
import { Product } from '../../models/product';
import { StatComponent } from '../stat/stat.component';

@Component({
    selector: 'app-product-stats',
    standalone: true,
    imports: [
        CommonModule,
        TuiSvgModule,
        StatComponent,
    ],
    templateUrl: './product-stats.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductStatsComponent {

    @Input() product!: Product;

    @Output() likeClick = new EventEmitter<void>();
    @Output() reviewClick = new EventEmitter<void>();
    @Output() remixClick = new EventEmitter<void>();
    @Output() orderClick = new EventEmitter<void>();

}
