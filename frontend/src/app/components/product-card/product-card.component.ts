import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { TuiIslandModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';
import { MoneyComponent } from '../money/money.component';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [
        CommonModule,
        TuiIslandModule,
        MoneyComponent,
        RouterModule
    ],
    templateUrl: './product-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

    @Input()
    product!: Product;

}
