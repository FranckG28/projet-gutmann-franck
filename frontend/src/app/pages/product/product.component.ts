import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { TitleComponent } from '../../components/title/title.component';
import { ProductPreviewComponent } from '../../components/product-preview/product-preview.component';
import { MoneyComponent } from '../../components/money/money.component';
import { RatingComponent } from '../../components/rating/rating.component';
import { ProductAuthorComponent } from '../../components/product-author/product-author.component';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [
        CommonModule,
        TitleComponent,
        MoneyComponent,
        ProductPreviewComponent,
        RatingComponent,
        ProductAuthorComponent,
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
