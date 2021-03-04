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
  IQuestion,
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

  get form() {
    return this.formGroup.get("form") as FormArray;
  }

  get minMax() {
    return this.formGroup.get("minMax") as FormGroup;
  }

  get multipleChoice() {
    return this.formGroup.get("multipleChoice") as FormArray;
  }

  get formArray() {
    return this.formGroup.get("formArray") as FormArray;
  }

  getType(question): any {
    if (this.isMinMax) return "minMax";
    if (this.isMultipleChoice) return "multipleChoice";
  }

  ngOnInit() {
    this.formGroup = this.fb.group({});

    this.data.questions.forEach(question => {
      if (this.isMinMax(question)) {
        const minMax = this.fb.group({
          min: [],
          max: []
        });
        this.formGroup.addControl("minMax", minMax);
        //this.formArray.push(minMax);
      }
      if (this.isMultipleChoice(question)) {
        const group = this.fb.group({
          values: []
        });
        ///this.multipleChoice.push(group);
        // this.formArray.push(group);
      }
    });

    // this.formGroup = this.fb.group({
    //   form: this.fb.array([])
    // });
    // this.data.questions.forEach(question => {
    //   if (this.isMinMax(question)) {
    //     const group = this.fb.group({
    //       min: [],
    //       max: []
    //     });
    //     this.form.push(group);
    //   }
    //   if (this.isMultipleChoice(question)) {
    //     const group = this.fb.group({
    //       values: []
    //     });
    //     this.form.push(group);
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
