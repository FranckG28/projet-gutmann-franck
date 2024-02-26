import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { CURRENCY } from '../../config/environment';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [
        CommonModule,
        TuiIslandModule,
        TuiCurrencyPipeModule,
    ],
    templateUrl: './product-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

    @Input()
    product!: Product;

    currency = CURRENCY

}
