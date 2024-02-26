import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { TuiLetModule } from '@taiga-ui/cdk';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'app-catalog',
    standalone: true,
    imports: [
        CommonModule,
        TitleComponent,
        ProductCardComponent,
        TuiLetModule,
    ],
    templateUrl: './catalog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {

    products$ = inject(ProductService).getProducts();

}
