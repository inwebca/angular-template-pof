import { Component, Input, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import {
  SurveyService,
  ICriteriaKit,
  ICriteriaKitDetails
} from "../services/survey.service";

@Component({
  selector: "survey-component",
  templateUrl: "./survey-component.html"
})
export class SurveyComponent implements OnInit {
  @Input() name: string;

  constructor(private surveyService: SurveyService) {}

  ngOnInit() {
    let test = this.surveyService.getSurveys();

    // const checkboxes = this.componentList$.pipe(
    //   map(criterias =>
    //     criterias.filter(criteria => criteria.kind === Type.CHECKBOX)
    //   )
    // );

    // const dropdown = this.componentList$.pipe(
    //   map(criterias =>
    //     criterias.filter(criteria => criteria.kind === Type.DROPDOWN)
    //   )
    // );
  }
}
