import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { IMinMaxQuestion } from "../services/survey.service";
@Component({
  selector: "min-max-component",
  templateUrl: "./min-max.component.html"
})
export class MinMaxComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() min: any;
  @Input() max: any;

  constructor(private fb: FormBuilder) {}

  get formArray() {
    return this.form.get("formArray") as FormArray;
  }

  ngOnInit() {
    console.log(this.formArray);

    // this.minMaxForm.patchValue({
    //   min: this.data.choosedMin,
    //   max: this.data.choosedMax
    // });
  }
}
