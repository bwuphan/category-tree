import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Node } from '../node';

@Component({
  selector: 'app-node-form',
  templateUrl: './node-form.component.html',
  styleUrls: ['./node-form.component.scss']
})
export class NodeFormComponent {
  @Input() node: Node;
  @Input() editMode: boolean;
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (!this.node) this.node = new Node();
  }

  submit(): void {
    this.onSave.emit();
  }
}
