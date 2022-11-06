import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  NgForm,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss'],
})
export class SimulatorComponent implements OnInit {
  result: Array<any> = [];
  fields: any = {};
  simulator: any = {};

  constructor(fb: FormBuilder) {}
  /**
   * function calculate, the on submit fn of the form, we'll be called once we
   * click calculate button
   * takes all the required fields of thr form and calculate the monthlyIncome and the return
   * result stored in an array Array<{year:number,return:number monthlyIncome:number}>
   */
  calculate = () => {
    // reset our array in case of an existing old data
    this.result = [];
    //initialize all variables
    let monthlyIncome = 0;
    let returnPercentage = 0;
    let fees = 0;
    //loop on number of the years to show
    for (let index = 1; index < 4; index++) {
      if (index === 1) {
        // sum of all fees depending on year number
        fees =
          this.simulator.monthlyRent * 0.3 + parseInt(this.simulator.annualFee);
      }
      if (index === 2) {
        fees =
          this.simulator.monthlyRent * 0.25 +
          parseInt(this.simulator.annualFee);
      }
      if (index === 3) {
        fees =
          this.simulator.monthlyRent * 0.2 + parseInt(this.simulator.annualFee);
      }
      //equation to get the return percentage of the current year
      returnPercentage =
        ((this.simulator.monthlyRent * 12 - fees) /
          this.simulator.purchasePrice) *
        100;
      // equation to get the monthly income of the current year
      monthlyIncome = this.simulator.monthlyRent - fees / 12;
      //push data into our resukt array
      this.result.push({
        year: index,
        returnPercentage: returnPercentage.toFixed(2),
        monthlyIncome: monthlyIncome.toFixed(2),
      });
    }
  };

  ngOnInit() {}
}
