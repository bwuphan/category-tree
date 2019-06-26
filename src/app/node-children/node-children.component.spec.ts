import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NodeChildrenComponent } from './node-children.component';

import { NodeFormComponent } from '../node-form/node-form.component';
import { NodeComponent } from '../node/node.component';

describe('NodeChildrenComponent', () => {
  let component: NodeChildrenComponent;
  let fixture: ComponentFixture<NodeChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeChildrenComponent, NodeComponent, NodeFormComponent],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
