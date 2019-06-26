import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { NodeChildrenComponent } from './node-children/node-children.component';
import { NodeFormComponent } from './node-form/node-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    NodeChildrenComponent,
    NodeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
