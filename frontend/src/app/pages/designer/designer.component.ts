import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { TuiButtonModule, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { IngredientTileComponent } from '../../components/ingredient-tile/ingredient-tile.component';
import { MoneyComponent } from '../../components/money/money.component';
import { DesignerDroplistComponent } from '../../components/designer-droplist/designer-droplist.component';
import { DesignerService } from './designer.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-designer',
    standalone: true,
    imports: [
        CommonModule,
        TitleComponent,
        TuiButtonModule,
        IngredientTileComponent,
        MoneyComponent,
        DesignerDroplistComponent
    ],
    providers: [
        DesignerService,
        tuiButtonOptionsProvider({
            size: 'm'
        })
    ],
    templateUrl: './designer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignerComponent {

    readonly designerService = inject(DesignerService);
    private readonly productService = inject(ProductService);
    private readonly router = inject(Router);

    exit() {

    }

    validate(): void {
        if (this.designerService.list.length === 0) {
            return;
        }

        this.productService.addProduct({
            name: 'Custom product',
            description: 'Custom product description',
            ingredients: this.designerService.list.map(ingredient => ingredient.id)
        }).subscribe((product) => {
            this.router.navigate(['/app/product', product.id]);
        });
    }

}
