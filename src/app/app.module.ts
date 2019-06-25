import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { NodeComponent } from './node/node.component';
import { AddNodeModalComponent } from './add-node-modal/add-node-modal.component';
import { NodeChildrenComponent } from './node-children/node-children.component';
import { NodeFormComponent } from './node-form/node-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    NodeComponent,
    AddNodeModalComponent,
    NodeChildrenComponent,
    NodeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
