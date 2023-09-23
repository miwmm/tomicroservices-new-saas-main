import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';
import { TreeNode } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getFiles() {
    return this.http.get<any>('assets/mock.json').pipe(map(res => <TreeNode[]> res.data))
  }
}
