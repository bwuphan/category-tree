export class Node {
  public name: string;
  public children: Node[];

  constructor(name: string = '', children: Node[] = []) {
    this.name = name;
    this.children = children;
  }
}