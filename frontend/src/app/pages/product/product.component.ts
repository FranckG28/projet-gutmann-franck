import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [
        CommonModule,
        ProductCardComponent,
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
