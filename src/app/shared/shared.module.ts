import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {

  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIconPacks(fas, fab, far);
  }

}
