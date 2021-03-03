import { Component, Input, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { IDriverSurvey, SurveyService } from "../services/survey.service";

@Component({
  selector: "survey-component",
  templateUrl: "./survey-component.html"
})
export class SurveyComponent implements OnInit {
  driverSurveys$: Observable<IDriverSurvey[]>;
  constructor(private surveyService: SurveyService) {}

  ngOnInit() {
    this.driverSurveys$ = this.surveyService.driverSurveys();
  }

  onClick(surveyId: number) {
    const survey$ = this.surveyService.driverSurvey(surveyId);
    survey$.subscribe(value => {
      console.log(value);
    });
  }
}
