import {Component, OnInit, Input} from '@angular/core';
import {ICategory} from "../../manager-services/category-manager.service";
import {ITreeNode} from "../../shared/utils/tree-node";

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {
  @Input() categoryNode: ITreeNode<ICategory> | null; // | null --> workaround to avoid buggy warnings. See: https://github.com/angular/angular-cli/issues/2034

  constructor() {
  }

  ngOnInit() {
  }

}
