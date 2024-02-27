import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IngredientTileComponent } from '../ingredient-tile/ingredient-tile.component';
import { DesignerService } from '../../pages/designer/designer.service';

@Component({
    selector: 'app-designer-droplist',
    standalone: true,
    imports: [
        CommonModule,
        CdkDrag,
        CdkDropList,
        IngredientTileComponent
    ],
    templateUrl: './designer-droplist.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignerDroplistComponent {

    readonly designerService = inject(DesignerService);

}
