import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  public opName = new FormControl('', [Validators.required]);
  public operatorsList: Array<any> = [
    { name: 'Operator A', id: 'OP01' },
    { name: 'Operator B', id: 'OP02' }
  ];
  public dataList;
  public dataSource: any = [];

  constructor( private sharedService: SharedService) { }

  ngOnInit() {
    this.dataList = this.sharedService.dataList;
  }

  getErrorMessage() {
    return this.opName.hasError('required') ? 'You must enter a name' : '';
  }

  onSubmit(e) {
    console.log(this.opName.value);
    if (this.opName.value) {
      this.operatorsList.push({ name: this.opName.value, id: '' });
    }
  }

  getData(element) {
    console.log(element);
    const dataItem = this.dataList.filter(item => item.id === element.id);
    if (dataItem.length > 0) {
      this.dataSource = dataItem[0].data;
      console.log(this.dataSource);
      console.log(typeof (this.dataSource));
    } else {
      this.dataSource = [];
    }
  }


}
