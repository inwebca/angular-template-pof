import { Component, Input, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import {
  SurveyService,
  ICriteriaKit,
  ICriteriaKitDetails,
  Type
} from "../services/survey.service";

@Component({
  selector: "survey-component",
  templateUrl: "./survey-component.html"
})
export class SurveyComponent implements OnInit {
  componentList$: Observable<ICriteriaKit[]>;

  constructor(private surveyService: SurveyService) {}

  ngOnInit() {
    this.componentList$ = this.surveyService.getSurveys();

    let test3 = this.componentList$.pipe(
      tap(value => console.log(value)),
      map(criteriaKit => criteriaKit.map(kit => ({
        id: kit.id,
        name: kit.name,
        question: kit.question,
        kind: kit.kind,
        details: (kit.kind === Type.CHECKBOX) ? new CriteriaKitDetailsCheckbox(kit.details) : 
      } as CriteriaKit))),
    )

    test3.subscribe();

    let test2 = this.componentList$.forEach(function(criteriaKit) {
      criteriaKit.forEach(function(kit) {
        switch (kit.kind) {
          case Type.CHECKBOX:
            return "checkbox";
          case Type.DROPDOWN:
            return "dropdown";
        }
      });
    });
  }
}

export class CriteriaKit {
  id: number;
  name: string;
  question: string;
  kind: Type;
  details: Array<CriteriaKitDetails>;
}

export class CriteriaKitDetails {
  id: number;
  label: string;
}

export class CriteriaKitDetailsDropdown extends CriteriaKitDetails{
  value: string
}

export class CriteriaKitDetailsCheckbox extends CriteriaKitDetails{
  constructor(details: ICriteriaKitDetails[]){
    super();
    this.details = details;
  }
  details: ICriteriaKitDetails[];
}

