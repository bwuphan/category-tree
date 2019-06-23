import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { NodeComponent } from './node/node.component';
import { AddNodeModalComponent } from './add-node-modal/add-node-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    NodeComponent,
    AddNodeModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
