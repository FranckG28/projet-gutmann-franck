import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { ProductService } from '../../services/product.service';
import { combineLatest, map } from 'rxjs';
import { FiltersService } from '../../services/filters.service';
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

    products$ = inject(ProductService).all();

    // combineLatest([
    //     inject(ProductService).getProducts(),
    //     inject(FiltersService).filters$
    // ]).pipe(
    //     map(([products, filters]) => {
    //         return products.filter((product) => {

    //             if (products && (filters ?? []).length > 0) {
    //                 return (filters ?? []).every((filter) => product.ingredients.includes(filter.id));
    //             }

    //             return products;
    //         });
    //     }),
    //     map((products) => this.options.sorter ? products.sort(this.options.sorter) : products)
    // );


}
