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
  ngOnInit() {
    const test$ = of(this.details);

    test$.pipe(tap(value => console.log(value)));

    test$.subscribe();
  }
}
