import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public number = new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]);
  public result;
  public dataList;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.dataList = this.sharedService.dataList;
  }

  getErrorMessage() {
    return this.number.hasError('required') ? 'You must enter a 10 digit number' :
      this.number.hasError('pattern') ? 'Not a valid phone number' :
        '';
  }

  onSubmit(e) {
    if (!this.number.invalid) {
      console.log(this.number.value);
      this.getresults(this.number.value);
    }
  }

  getresults(numString) {
    let filteredOperator = [];
    this.dataList.forEach(operator => {
      operator.data.forEach(item => {
        if (numString.startsWith(item.prefix)) {
          filteredOperator.push({
            name: operator.name,
            id: operator.id,
            prefix: item.prefix,
            length: item.prefix.length,
            cost: parseFloat(item.cost)
          });
        }
      });
    });
    console.log(filteredOperator);
    filteredOperator.sort((a, b) => {
      if(a.length > b.length){
        return -1;
      } else if(a.length < b.length){
        return 1;
      } else {
        if(a.cost > b.cost){
          return 1;
        } else if(a.cost < b.cost){
          return -1;
        }
      }
    });
    console.log('sorted');
    console.log(filteredOperator);
    this.result = filteredOperator[0];
  }

}
