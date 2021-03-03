import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { IMinMaxQuestion } from "../services/survey.service";
@Component({
  selector: "min-max-component",
  templateUrl: "./min-max.component.html"
})
export class MinMaxComponent implements OnInit {
  @Input() data: IMinMaxQuestion;

  minMaxForm = new FormGroup({
    min: new FormControl(""),
    max: new FormControl("")
  });

  ngOnInit() {
    this.minMaxForm.patchValue({
      min: this.data.choosedMin,
      max: this.data.choosedMax
    });
  }
}
