import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiBadgedContentModule } from '@taiga-ui/kit';
import { CartState } from '../../store/cart/cart.state';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-cart-icon',
    standalone: true,
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiBadgedContentModule,
        RouterModule,
    ],
    templateUrl: './cart-icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartIconComponent {

    @Select(CartState.count) count$!: Observable<number>;

}
