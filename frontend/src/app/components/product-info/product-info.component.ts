import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductStatsComponent } from '../product-stats/product-stats.component';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';
import { UserNamePipe } from '../../pipes/user-name.pipe';

@Component({
    selector: 'app-product-info',
    standalone: true,
    imports: [
        CommonModule,
        ProductStatsComponent,
        UserNamePipe,
        TimeAgoPipe
    ],
    templateUrl: './product-info.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductInfoComponent {

    @Input() product: Product | null = null;

}
