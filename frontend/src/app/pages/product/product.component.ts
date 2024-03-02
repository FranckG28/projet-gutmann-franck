import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { ProductInfoComponent } from '../../components/product-info/product-info.component';
import { ProductPreviewComponent } from '../../components/product-preview/product-preview.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { MoneyComponent } from '../../components/money/money.component';

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
export class ProductComponent implements OnInit {


    @Input()
    productId!: string;

    private readonly productService = inject(ProductService);

    product$?: Observable<Product>;

    ngOnInit(): void {
        this.product$ = this.productService.getProduct(this.productId);
    }

}
