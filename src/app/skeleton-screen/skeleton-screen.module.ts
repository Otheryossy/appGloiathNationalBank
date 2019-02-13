import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SkeletonScreenComponent } from './skeleton-screen.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    SkeletonScreenComponent
  ],
  entryComponents: [
    SkeletonScreenComponent
  ],
  declarations: [SkeletonScreenComponent]
})
export class SkeletonScreenModule {}
