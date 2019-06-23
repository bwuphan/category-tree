import { Injectable } from '@angular/core';
import { Node } from './node';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor() { }

  /*
   * Adds a node to the parent's children array.
   * @param child: Node  - The child node to be added.
   * @param parent: Node - The parent node that is gaining a child.
   * @return void
   */
  addNode(child: Node, parent: Node): void {
    parent.children.push(child);
  }
}
