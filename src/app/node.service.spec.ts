import { TestBed } from '@angular/core/testing';
import { Node } from './node';
import { NodeService } from './node.service';

describe('NodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NodeService = TestBed.get(NodeService);
    expect(service).toBeTruthy();
  });

  describe('addChild(child, parent)', () => {
    it('should add a child node to the parent', () => {
      const service: NodeService = TestBed.get(NodeService);

      const parentNode: Node = {
       name: 'parent',
       children: []
      };

      const childNode: Node = {
        name: 'child',
        children: []
      };

      service.addChild(childNode, parentNode);

      expect(parentNode.children.length).toBe(1);
      expect(JSON.stringify(parentNode.children[0])).toBe(JSON.stringify(childNode));
    });
  });

  describe('removeChild(index, parent)', () => {
    it('should remove the child if index is in bounds and there is only one child', () => {
      const service: NodeService = TestBed.get(NodeService);

      const parentNode: Node = {
       name: 'parent',
       children: [new Node()]
      };

      service.removeChild(0, parentNode);

      expect(parentNode.children.length).toBe(0);
    });

    it('should remove the correct child if there are multiple children', () => {
      const service: NodeService = TestBed.get(NodeService);

      const parentNode: Node = {
       name: 'parent',
       children: [new Node('one'), new Node('two'), new Node('three')]
      };

      service.removeChild(1, parentNode);

      expect(parentNode.children.length).toBe(2);
      expect(parentNode.children[0].name).toBe('one');
      expect(parentNode.children[1].name).toBe('three');

      service.removeChild(1, parentNode);
      expect(parentNode.children.length).toBe(1);
      expect(parentNode.children[0].name).toBe('one');
    });

    it('should not remove any children if the index is out of bounds', () => {
      const service: NodeService = TestBed.get(NodeService);

      const parentNode: Node = {
       name: 'parent',
       children: [new Node('one'), new Node('two'), new Node('three')]
      };

      service.removeChild(-1, parentNode);
      expect(parentNode.children.length).toBe(3);

      service.removeChild(4, parentNode);
      expect(parentNode.children.length).toBe(3);
    });
  });
});
