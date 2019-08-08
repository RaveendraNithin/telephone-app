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

  // submit function
  onSubmit(e) {
    if (!this.number.invalid) {
      this.getresults(this.number.value);
    }
  }

  // get result function
  getresults(numString) {
    let filteredOperator = []; // initialise an array
    this.dataList.forEach(operator => { // loop through the operators list
      operator.data.forEach(item => { //  loop through the operators prefix & cost data
        if (numString.startsWith(item.prefix)) { // check whether entered number starts with prefix
          filteredOperator.push({ // if true , push tho the array as object
            name: operator.name,
            id: operator.id,
            prefix: item.prefix,
            length: item.prefix.length,
            cost: parseFloat(item.cost)
          });
        }
      });
    });
    filteredOperator.sort((a, b) => {
      // sort filtered list based on length
      if (a.length > b.length) {
        return -1;
      } else if (a.length < b.length) {
        return 1;
      } else {
        // sort filtered list based on cost, when length is equal
        if (a.cost > b.cost) {
          return 1;
        } else if (a.cost < b.cost) {
          return -1;
        }
      }
    });
    this.result = filteredOperator[0];
  }

}
