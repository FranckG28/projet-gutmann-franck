import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchProductsComponent } from '../search-products/search-products.component';

@Component({
    selector: 'app-aside',
    standalone: true,
    imports: [
        CommonModule,
        SearchProductsComponent,
    ],
    templateUrl: './aside.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent { }
