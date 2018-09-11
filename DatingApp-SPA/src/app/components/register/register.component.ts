import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor() {}

  register() {
    console.log(this.model);
  }

  cancel() {
    this.cancelRegister.emit(false); // can be anything, an object etc.
  }

  ngOnInit() {}
}
