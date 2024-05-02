import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { ProductService } from "../../services/product.service";
import { BehaviorSubject, debounceTime, distinctUntilChanged, switchMap } from "rxjs";
import { ProductListComponent } from "../../components/product-list/product-list.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [
        CommonModule,
        TitleComponent,
        ProductListComponent,
        SearchBarComponent
    ],
    templateUrl: './search.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {

    private readonly productService = inject(ProductService);

    search$ = new BehaviorSubject<string>('');

    products$ = this.search$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(search => this.productService.search(search))
    );

}
