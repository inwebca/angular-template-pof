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
  componentList$: Observable<CriteriaKit[]>;

  constructor(private surveyService: SurveyService) {}

  ngOnInit() {
    this.componentList$ = this.surveyService.getSurveys().pipe(
      tap(value => console.log(value)),
      map(criteriaKit =>
        criteriaKit.map(
          kit =>
            ({
              id: kit.id,
              name: kit.name,
              question: kit.question,
              kind: kit.kind,
              details: kit.details
            } as CriteriaKit)
        )
      )
    );
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
  value: boolean | string;
}

// export class CriteriaKitDetailsDropdown extends CriteriaKitDetails {
//   value: string;
// }

// export class CriteriaKitDetailsCheckbox extends CriteriaKitDetails {
//   value: boolean;
// }

// function convertToClass(
//   details: ICriteriaKitDetails[],
//   kind: Type
// ): CriteriaKitDetailsDropdown[] | CriteriaKitDetailsCheckbox[] {
//   switch (kind) {
//     case Type.CHECKBOX:
//       return criteriaKitDetailsCheckbox(details);
//     case Type.DROPDOWN:
//       return criteriaKitDetailsDropdown(details);
//   }
// }

// function criteriaKitDetailsCheckbox(
//   details: ICriteriaKitDetails[]
// ): CriteriaKitDetailsCheckbox[] {
//   let detailsCheckbox = Array<CriteriaKitDetailsCheckbox>();

//   details.forEach(function(detail) {
//     detailsCheckbox.push({
//       id: detail.id,
//       label: detail.label,
//       value: Boolean(detail.value)
//     });
//   });

//   return detailsCheckbox;
// }

// function criteriaKitDetailsDropdown(
//   details: ICriteriaKitDetails[]
// ): CriteriaKitDetailsDropdown[] {
//   let detailsDropdown = Array<CriteriaKitDetailsDropdown>();

//   details.forEach(function(detail) {
//     detailsDropdown.push({
//       id: detail.id,
//       label: detail.label,
//       value: detail.value.toString()
//     });
//   });

//   return detailsDropdown;
// }
