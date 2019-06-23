import { TestBed } from '@angular/core/testing';
import { Node } from './node';
import { NodeService } from './node.service';

describe('NodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NodeService = TestBed.get(NodeService);
    expect(service).toBeTruthy();
  });

  describe('addNode()', () => {
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

      service.addNode(childNode, parentNode);

      expect(parentNode.children.length).toBe(1);
      expect(JSON.stringify(parentNode.children[0])).toBe(JSON.stringify(childNode));
    });
  });
});
