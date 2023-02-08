import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

const COMPONENTS = [
  ConfirmationDialogComponent,
  MessagesComponent,
  ToolbarComponent,
  PageNotFoundComponent
]

const MODULES = [
  MaterialModule, RouterModule
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    MODULES,
    CommonModule
  ],
  exports: [
    COMPONENTS,
    MODULES
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import this module in the AppModule')
    }
  }
}
