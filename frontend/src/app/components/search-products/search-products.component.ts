import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiDataListModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiInputModule } from '@taiga-ui/kit';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ProductPreviewComponent } from '../product-preview/product-preview.component';
import { TuiLetModule, tuiControlValue } from '@taiga-ui/cdk';
import { combineLatest, map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search-products',
    standalone: true,
    imports: [
        CommonModule,
        TuiInputModule,
        FormsModule,
        ReactiveFormsModule,
        TuiDataListWrapperModule,
        TuiDataListModule,
        TuiTextfieldControllerModule,
        ProductPreviewComponent,
        TuiLetModule
    ],
    templateUrl: './search-products.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchProductsComponent {

    products$ = inject(ProductService).getProducts();

    search = new FormControl('');

    formGroup = new FormGroup({
        search: this.search
    })

    filteredProducts = combineLatest([
        tuiControlValue<string>(this.search),
        this.products$
    ]).pipe(
        map(([search, products]) => products.filter(product => product.name.toLowerCase().includes(search.toLowerCase())))
    )

    router = inject(Router);

    onSelected(value: Product) {
        this.router.navigate(['/app', 'product', value.id]);
        this.search.setValue('')
    }

}
