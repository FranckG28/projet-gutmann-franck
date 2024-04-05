import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { Select } from '@ngxs/store';
import { CartState, CartStateModel } from '../../store/cart/cart.state';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [
        CommonModule,
        TitleComponent
    ],
    templateUrl: './cart.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {

    @Select(CartState) cart$!: Observable<CartStateModel>;

}
