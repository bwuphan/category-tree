import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Node } from '../node';

@Component({
  selector: 'app-node-children',
  templateUrl: './node-children.component.html',
  styleUrls: ['./node-children.component.scss']
})
export class NodeChildrenComponent implements OnInit {
  @Input() children: Node[];

  constructor() { }

  ngOnInit() {
    if (!this.children) this.children = [];
  }

  hideChildren: boolean = false;
}
