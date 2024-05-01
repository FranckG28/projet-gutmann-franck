import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, inject } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { ProductInfoComponent } from '../../components/product-info/product-info.component';
import { ProductPreviewComponent } from '../../components/product-preview/product-preview.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { MoneyComponent } from '../../components/money/money.component';
import { Store } from '@ngxs/store';
import { AddToCart } from '../../store/cart.state';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [
        CommonModule,
        ProductInfoComponent,
        ProductPreviewComponent,
        TuiButtonModule,
        MoneyComponent
    ],
    templateUrl: './product.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnChanges {


    @Input()
    productId!: number;

    private readonly productService = inject(ProductService);
    private readonly store = inject(Store);

    product$?: Observable<Product>;

    ngOnChanges(): void {
        this.product$ = this.productService.get(this.productId);
    }

    addToCart(product: Product): void {
        this.store.dispatch(new AddToCart([product]));
    }

}
