import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Node } from '../node';

@Component({
  selector: 'app-node-children',
  templateUrl: './node-children.component.html',
  styleUrls: ['./node-children.component.scss']
})
export class NodeChildrenComponent implements OnInit {
  @Input() children: Node[];
  @Output() removeChild: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (!this.children) this.children = [];
  }

  delete(index) {
    this.removeChild.emit(index)
  }

  hideChildren: boolean = false;
}
