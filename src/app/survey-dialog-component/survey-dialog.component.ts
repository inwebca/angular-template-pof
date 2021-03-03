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
  form: FormArray;

  constructor(
    public dialogRef: MatDialogRef<SurveyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDriverSurvey,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      form: this._formBuilder.array([this.init()])
    });

    this.addItem();

    // this.formArray = this.formGroup.get("form") as FormArray;

    // this.data.questions.forEach(question => {
    //   if (this.isMinMax(question)) {
    //     const formGroup = this._formBuilder.group({
    //       min: [question.choosedMin],
    //       max: [question.choosedMax]
    //     });
    //     this.formArray.push(formGroup);
    //   }
    //   if (this.isMultipleChoice(question)) {
    //     const formGroup = this._formBuilder.group({
    //       choices: [question.choices],
    //       values: [question.values]
    //     });

    //     this.formArray.push(formGroup);
    //   }
    // });

    console.log(this.form);
    console.log(this.formGroup);
  }

  init() {
    return this._formBuilder.group({
      cont: new FormControl("", null)
    });
  }

  addItem() {
    this.form = this.formGroup.get("form") as FormArray;
    this.form.push(this.init());
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
