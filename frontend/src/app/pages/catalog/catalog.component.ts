import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';

@Component({
    selector: 'app-catalog',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './catalog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {

    products$ = inject(CatalogService).getCatalog();

}
