import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../node';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() node: Node;

  constructor(private nodeService: NodeService) {

  }

  ngOnInit() {
  }

  createNode() {
    this.node = new Node();
  }

  addChild() {
    this.nodeService.addNode(new Node(), this.node);
  }

  hideChildren: boolean = false;
}
