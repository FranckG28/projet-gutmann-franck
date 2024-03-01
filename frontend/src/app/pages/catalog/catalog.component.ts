import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { TuiLetModule } from '@taiga-ui/cdk';
import { ProductService } from '../../services/product.service';
import { BehaviorSubject, combineLatest, debounceTime, map, withLatestFrom } from 'rxjs';
import { SearchBarComponent } from '../../search-bar/search-bar.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiFilterModule } from '@taiga-ui/kit';

@Component({
    selector: 'app-catalog',
    standalone: true,
    imports: [
        CommonModule,
        TitleComponent,
        ProductCardComponent,
        TuiLetModule,
        SearchBarComponent,
        TuiFilterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './catalog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {

    search$ = new BehaviorSubject<string>('');

    filters = new FormControl([]);

    products$ = combineLatest([
        inject(ProductService).getProducts(),
        this.search$.pipe(
            debounceTime(300),
        )
    ]).pipe(
        map(([products, search]) => {
            return products.filter((product) => {
                return product.name.toLowerCase().includes(search?.toLowerCase() ?? '');
            });
        })
    );

}
