import { Component, Input, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { SurveyService } from "../services/survey.service";

@Component({
  selector: "survey-component",
  templateUrl: "./survey-component.html"
})
export class SurveyComponent implements OnInit {
  constructor(private surveyService: SurveyService) {}

  ngOnInit() {
    const test = this.surveyService.driverSurveys();
    test.subscribe(value => {
      console.log(value);
    });
  }
}
