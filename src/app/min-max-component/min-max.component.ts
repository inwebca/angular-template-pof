import { Component, Input, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  ControlContainer,
  FormGroupDirective
} from "@angular/forms";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { IMinMaxQuestion } from "../services/survey.service";
@Component({
  selector: "min-max-component",
  templateUrl: "./min-max.component.html"
})
export class MinMaxComponent implements OnInit {
  @Input() group: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.group);

    // this.minMaxForm.patchValue({
    //   min: this.data.choosedMin,
    //   max: this.data.choosedMax
    // });
  }
}
