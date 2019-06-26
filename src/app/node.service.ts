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
  addChild(child: Node, parent: Node): void {
    parent.children.push(child);
  }

  removeChild(index: number, parent: Node): void {
    if (index >=0 && index < parent.children.length) {
      parent.children.splice(index, 1);
    }
  }
}
