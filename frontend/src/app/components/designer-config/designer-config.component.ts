import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { TuiButtonModule, TuiDialogContext, TuiTextfieldControllerModule } from "@taiga-ui/core";
import { TuiInputModule, TuiTextareaModule } from "@taiga-ui/kit";
import { POLYMORPHEUS_CONTEXT } from "@tinkoff/ng-polymorpheus";

@Component({
    selector: 'app-designer-config',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
        TuiButtonModule,
        TuiTextareaModule
    ],
    templateUrl: './designer-config.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignerConfigComponent {

    formGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl('')
    });


    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiDialogContext<{
            name: string;
            description?: string;
        } | null, void>
    ) { }

    cancel(): void {
        this.context.completeWith(null);
    }

    validate(): void {

        if (this.formGroup.invalid) {
            return;
        }

        this.context.completeWith({
            name: this.formGroup.get('name')!.value ?? '',
            description: this.formGroup.get('description')?.value ?? undefined
        });
    }

}   
