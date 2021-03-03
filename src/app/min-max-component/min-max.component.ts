import { Component, Input, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { IMinMaxQuestion } from "../services/survey.service";
@Component({
  selector: "min-max-component",
  templateUrl: "./min-max.component.html"
})
export class MinMaxComponent implements OnInit {
  @Input() data: IMinMaxQuestion;

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
