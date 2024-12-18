import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private formdata: any = [];

  constructor() { }

  setFormData(data:any){
    this.formdata = data;

  }
  getFormData(){
    return this.formdata;
  }

  
  
}
