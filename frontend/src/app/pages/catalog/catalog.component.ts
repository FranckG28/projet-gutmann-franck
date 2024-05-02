import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { ProductService } from '../../services/product.service';
import { catalogOptionsProvider } from '../../providers/catalog-options.provider';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
    selector: 'app-catalog',
    standalone: true,
    imports: [
        CommonModule,
        TitleComponent,
        ProductListComponent
    ],
    templateUrl: './catalog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
        :host {
            display: block;
            width: 100%;
            max-width: 100%
        }
        `,
    ]
})
export class CatalogComponent {

    options = inject(catalogOptionsProvider);

    products$ = inject(ProductService).view(this.options.view);

}
