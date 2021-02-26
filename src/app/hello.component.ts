import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent implements OnInit {
  componentList: ComponentType[];

  @Input() name: string;

  ngOnInit() {
    this.componentList = [
      new ComponentType(1, "dropdown"),
      new ComponentType(2, "checkbox")
    ];

    const componentList$ = of(this.componentList);

    componentList$.sub;
  }
}

export class ComponentType {
  constructor(id, kind) {
    this.id = id;
    this.kind = kind;
  }
  id: number;
  kind: string;
}
