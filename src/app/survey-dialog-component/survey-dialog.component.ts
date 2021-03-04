import { FormatWidth } from "@angular/common";
import { Component, Inject, Input, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Observable, of } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import {
  IDriverSurvey,
  IMinMaxQuestion,
  IMultipleChoiceQuestion,
  SurveyService
} from "../services/survey.service";

@Component({
  selector: "survey-dialog-component",
  templateUrl: "./survey-dialog.component.html"
})
export class SurveyDialogComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SurveyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDriverSurvey,
    private fb: FormBuilder
  ) {}

  get group1() {
    return this.formGroup.get("group1") as FormArray;
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      group1: this.fb.array([]),
      group2: this.fb.group({
        email2: ""
      })
    });

    const group: any = {};

    this.data.questions.forEach(question => {
      if (this.isMinMax(question)) {
        const group = this.fb.group({
          min: [],
          max: []
        });
        this.group1.push(group);
      }

      if (this.isMultipleChoice(question)) {
      }
    });

    //const test = new FormGroup(group);
    //console.log(test);

    // this.formGroup = this._formBuilder.group({
    //   form: this._formBuilder.array([])
    // });

    // this.form = this.formGroup.get("form") as FormArray;

    // this.data.questions.forEach(question => {
    //   if (this.isMinMax(question)) {
    //     const formGroup = this._formBuilder.group({
    //       min: [question.choosedMin],
    //       max: [question.choosedMax]
    //     });
    //     this.form.push(formGroup);
    //   }
    //   if (this.isMultipleChoice(question)) {
    //     const formGroup = this._formBuilder.group({
    //       choices: [question.choices],
    //       values: [question.values]
    //     });

    //     this.form.push(formGroup);
    //   }
    // });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  isMinMax(object: any): object is IMinMaxQuestion {
    return "choosedMin" in object;
  }

  isMultipleChoice(object: any): object is IMultipleChoiceQuestion {
    return "choices" in object;
  }
}
