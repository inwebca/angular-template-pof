import { Component, Input, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";

@Component({
  selector: "survey-component",
  templateUrl: "./survey-component.html"
})
export class SurveyComponent implements OnInit {
  componentList$: Observable<CriteriaKit[]>;

  @Input() name: string;

  ngOnInit() {
    const criteriaKits = [
      new CriteriaKit(1, "question 1 ?", new Dropdown([1,2,3])),
      new CriteriaKit(2, "question 2 ?", new Checkbox())
    ];

    this.componentList$ = of(criteriaKits);
  }
}

export class CriteriaKit {
  constructor(id: number, question: string, kind: Kind) {
    this.id = id;
    this.question = question;
    this.kind = kind;
  }
  id: number;
  question: string;
  kind: Kind;
}

type Kind = Dropdown | Checkbox;

class Dropdown {
  readonly kindName: string = "dropdown";
  constructor(data: Array<any>){
    this.data = data;
  }
  data: Array<any>;
}

class Checkbox {
  readonly kindName: string = "checkbox";
}
