import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CartState, CartStateModel } from '../../store/cart/cart.state';
import { TuiButtonModule, TuiScrollbarModule, TuiSvgModule } from '@taiga-ui/core';
import { CartProductPreviewComponent } from '../cart-product-preview/cart-product-preview.component';
import { Product } from '../../models/product';
import { MoneyComponent } from '../money/money.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-cart-preview',
    standalone: true,
    imports: [
        CommonModule,
        TuiSvgModule,
        TuiButtonModule,
        TuiScrollbarModule,
        CartProductPreviewComponent,
        MoneyComponent,
        RouterModule
    ],
    templateUrl: './cart-preview.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPreviewComponent {

    @Select(CartState.list) cart$!: Observable<{ product: Product; count: number }[]>;

    @Select(CartState.total) total$!: Observable<number>;

}
