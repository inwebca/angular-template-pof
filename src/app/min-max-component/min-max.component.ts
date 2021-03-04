import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { IMinMaxQuestion } from "../services/survey.service";
@Component({
  selector: "min-max-component",
  templateUrl: "./min-max.component.html"
})
export class MinMaxComponent implements OnInit {
  @Input() data: FormArray;

  ngOnInit() {
    console.log(this.data);

    // this.minMaxForm.patchValue({
    //   min: this.data.choosedMin,
    //   max: this.data.choosedMax
    // });
  }
}
