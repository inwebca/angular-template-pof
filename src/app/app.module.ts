import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { SurveyComponent } from "./survey-component/survey.component";
import { DropdownComponent } from "./dropdown-component/dropdown.component";
import { MinMaxComponent } from "./min-max/min-max.component";
import { SurveyDialogComponent } from "./survey-dialog-component/survey-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    SurveyComponent,
    DropdownComponent,
    MinMaxComponent,
    SurveyDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
