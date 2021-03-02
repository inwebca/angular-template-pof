import { Component, Input, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ICriteriaKitDetails } from "../services/survey.service";
import { CriteriaKitDetails } from "../survey-component/survey.component";

@Component({
  selector: "checkbox-component",
  templateUrl: "./checkbox.component.html"
})
export class CheckboxComponent implements OnInit {
  @Input() details: Array<CriteriaKitDetails>;
  @Input() question: string;

  // details$: Observable<CriteriaKitDetailsCheckbox[]>;

  ngOnInit() {
    // const detailsObs$ = of(this.details);
    // this.details$ = detailsObs$.pipe(
    //   map(values =>
    //     values.map(
    //       item =>
    //         ({
    //           id: item.id,
    //           value: Boolean(item.value),
    //           label: item.label
    //         } as CriteriaKitDetailsCheckbox)
    //     )
    //   )
    // );
  }
}

export class CriteriaKitDetailsCheckbox {
  id: number;
  value: boolean;
  label: string;
}
