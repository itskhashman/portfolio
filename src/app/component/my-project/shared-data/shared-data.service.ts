import { Injectable } from '@angular/core';
import { projects } from '../../Shared/assets/service';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  all_projects : projects[] = [];
   webdataSent = false; // Flag to track if data has already been sent
   uiuxdataSent = false; // Flag to track if data has already been sent

  constructor() { 

  }

  setprojects(project : projects[]){
    this.all_projects = this.all_projects.concat(project);
  }

}
