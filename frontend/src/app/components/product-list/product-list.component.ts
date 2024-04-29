import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Store } from "@ngxs/store";
import { Product } from "../../models/product";
import { AddToCart } from "../../store/cart.state";
import { ProductCardComponent } from "../product-card/product-card.component";
import { MoneyComponent } from "../money/money.component";
import { RouterModule } from "@angular/router";
import { TuiButtonModule } from "@taiga-ui/core";
import { StopPropagationDirective } from "../../directives/stop-propagation.directive";

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [
        CommonModule,
        ProductCardComponent,
        MoneyComponent,
        RouterModule,
        TuiButtonModule,
        StopPropagationDirective
    ],
    templateUrl: './product-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {

    @Input() products: Product[] = [];

    private readonly store = inject(Store);

    addProductToCart(product: Product) {
        this.store.dispatch(new AddToCart([product]));
    }

}
