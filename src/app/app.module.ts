import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TuringMachine } from './turing-machine';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [
    TuringMachine
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,

  ],
  providers: [],
  bootstrap: [TuringMachine]
})
export class AppModule { }
