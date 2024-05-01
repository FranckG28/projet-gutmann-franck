import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductStatsComponent } from '../product-stats/product-stats.component';
import { ProductAuthorComponent } from '../product-author/product-author.component';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';

@Component({
    selector: 'app-product-info',
    standalone: true,
    imports: [
        CommonModule,
        ProductStatsComponent,
        ProductAuthorComponent,
        TimeAgoPipe
    ],
    templateUrl: './product-info.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductInfoComponent {

    @Input() product: Product | null = null;

}
