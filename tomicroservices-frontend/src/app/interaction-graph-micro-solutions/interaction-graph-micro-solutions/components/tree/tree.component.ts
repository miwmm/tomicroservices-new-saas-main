import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() visibleSidebar1: boolean = false;
  @Input() treeFiles: Array<TreeNode> = [];
  @Input() selectedFile!: TreeNode;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getFiles().subscribe(files => this.treeFiles = files)
  }

}
