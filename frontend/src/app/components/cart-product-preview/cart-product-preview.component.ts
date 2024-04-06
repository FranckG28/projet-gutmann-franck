import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Product } from '../../models/product';
import { Store } from '@ngxs/store';
import { AddToCart, RemoveFromCart } from '../../store/cart/cart.actions';
import { MoneyComponent } from '../money/money.component';
import { TuiButtonModule } from '@taiga-ui/core';

@Component({
    selector: 'app-cart-product-preview',
    standalone: true,
    imports: [
        CommonModule,
        MoneyComponent,
        TuiButtonModule,
    ],
    templateUrl: './cart-product-preview.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartProductPreviewComponent {

    @Input() product!: Product;
    @Input() count!: number;

    private readonly store = inject(Store);

    addProduct(product: Product): void {
        this.store.dispatch(new AddToCart([product]));
    }

    removeProduct(product: Product): void {
        this.store.dispatch(new RemoveFromCart([product]));
    };


}
