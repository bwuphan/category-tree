import { Component, Output, EventEmitter, Input } from '@angular/core';
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

  submit(): void {
    this.onSave.emit();
  }
}
