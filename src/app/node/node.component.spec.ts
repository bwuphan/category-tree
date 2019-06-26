import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NodeComponent } from './node.component';
import { NodeFormComponent } from '../node-form/node-form.component';
import { NodeChildrenComponent } from '../node-children/node-children.component';

describe('NodeComponent', () => {
  let component: NodeComponent;
  let fixture: ComponentFixture<NodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeComponent,  NodeFormComponent, NodeChildrenComponent ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
