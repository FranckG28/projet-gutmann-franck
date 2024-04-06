import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Product } from '../../models/product';
import { Store } from '@ngxs/store';
import { RemoveFromCart } from '../../store/cart/cart.actions';
import { MoneyComponent } from '../money/money.component';

@Component({
    selector: 'app-cart-product-preview',
    standalone: true,
    imports: [
        CommonModule,
        MoneyComponent,
    ],
    templateUrl: './cart-product-preview.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartProductPreviewComponent {

    @Input() product!: Product;
    @Input() count!: number;

    private readonly store = inject(Store);

    removeProduct(product: Product): void {
        this.store.dispatch(new RemoveFromCart([product]));
    };


}
