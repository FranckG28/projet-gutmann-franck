import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInputComponent } from './card-input/card-input.component';
import { CardService } from './card.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputCVCModule, TuiInputCardModule, TuiInputExpireModule } from '@taiga-ui/addon-commerce';
import { CardCreateComponent } from './card-create/card-create.component';
import { CardPreviewComponent } from './card-preview/card-preview.component';
import { TuiButtonModule, TuiGroupModule } from '@taiga-ui/core';
import { TuiInputModule, TuiRadioBlockModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [
    CardInputComponent,
    CardCreateComponent,
    CardPreviewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputCardModule,
    TuiInputCVCModule,
    TuiInputExpireModule,
    TuiButtonModule,
    TuiGroupModule,
    TuiInputModule,
    TuiRadioBlockModule
  ],
  exports: [
    CardInputComponent,
  ],
  providers: [
    CardService,
  ]
})
export class CardModule { }
