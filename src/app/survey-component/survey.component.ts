import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable, of } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { IDriverSurvey, SurveyService } from "../services/survey.service";
import { SurveyDialogComponent } from "../survey-dialog-component/survey-dialog.component";

@Component({
  selector: "survey-component",
  templateUrl: "./survey-component.html"
})
export class SurveyComponent implements OnInit {
  driverSurveys$: Observable<IDriverSurvey[]>;
  constructor(private surveyService: SurveyService, public dialog: MatDialog) {}

  ngOnInit() {
    this.driverSurveys$ = this.surveyService.driverSurveys();
  }

  onClick(surveyId: number) {
    const survey$ = this.surveyService.driverSurvey(surveyId);
    survey$.subscribe(value => {
      console.log(value);
    });

    const dialogRef = this.dialog.open(SurveyDialogComponent, {
      width: "250px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
