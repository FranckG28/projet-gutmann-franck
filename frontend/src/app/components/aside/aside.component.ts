import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartPreviewComponent } from '../cart-preview/cart-preview.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { AccountCardComponent } from '../account-card/account-card.component';

@Component({
    selector: 'app-aside',
    standalone: true,
    imports: [
        CommonModule,
        SearchBarComponent,
        CartPreviewComponent,
        AccountCardComponent
    ],
    templateUrl: './aside.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent { }
