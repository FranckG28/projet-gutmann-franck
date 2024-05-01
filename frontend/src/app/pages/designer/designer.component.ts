import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { TuiButtonModule, TuiDialogService, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { IngredientTileComponent } from '../../components/ingredient-tile/ingredient-tile.component';
import { MoneyComponent } from '../../components/money/money.component';
import { DesignerDroplistComponent } from '../../components/designer-droplist/designer-droplist.component';
import { DesignerService } from './designer.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { DesignerConfigComponent } from '../../components/designer-config/designer-config.component';
import { TUI_PROMPT } from '@taiga-ui/kit';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';

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
    private readonly dialogs = inject(TuiDialogService);

    exit() {
        this.dialogs.open<boolean>(TUI_PROMPT, {
            label: 'Êtes vous sûr de vouloir abandonner ce burger ?',
            size: 's',
        }).subscribe((result) => {
            if (result) {
                this.router.navigate(['/']);
            }
        });
    }

    validate(): void {
        if (this.designerService.list.length === 0) {
            return;
        }

        this.dialogs.open<{
            name: string;
            description?: string;
        }>(new PolymorpheusComponent(DesignerConfigComponent)).subscribe((config) => {

            if (!config) {
                return;
            }

            const { name, description } = config;

            this.productService.addProduct({
                name,
                description,
                ingredients: this.designerService.list.map(ingredient => ingredient.id)
            }).subscribe((product) => {
                this.router.navigate(['/app/product', product.id]);
            });

        });

    }

}
