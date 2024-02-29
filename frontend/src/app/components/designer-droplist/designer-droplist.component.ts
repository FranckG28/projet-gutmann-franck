import { CdkDrag, CdkDragPlaceholder, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DesignerService } from '../../pages/designer/designer.service';
import { IngredientPreviewComponent } from '../ingredient-preview/ingredient-preview.component';

@Component({
    selector: 'app-designer-droplist',
    standalone: true,
    imports: [
        CommonModule,
        CdkDrag,
        CdkDropList,
        CdkDragPlaceholder,
        IngredientPreviewComponent,
    ],
    templateUrl: './designer-droplist.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignerDroplistComponent {

    readonly designerService = inject(DesignerService);

}
