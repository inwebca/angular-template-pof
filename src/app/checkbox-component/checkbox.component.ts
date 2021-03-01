import { Component, Input, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ICriteriaKitDetails } from "../survey-component/survey.component";

@Component({
  selector: "checkbox-component",
  templateUrl: "./checkbox.component.html"
})
export class CheckboxComponent implements OnInit {
  @Input() details: Array<ICriteriaKitDetails>;
  @Input() question: string;

  details$: Observable<CriteriaKitDetailsCheckbox[]>;

  ngOnInit() {
    const detailsObs$ = of(this.details);

    const test = detailsObs$.pipe(
      map(values =>
        values.map(
          item =>
            ({
              id: item.id,
              value: Boolean(item.value),
              label: item.label
            } as CriteriaKitDetailsCheckbox)
        )
      )
    );

    this.details$ = test;
  }
}

export class CriteriaKitDetailsCheckbox {
  id: number;
  value: boolean;
  label: string;
}
