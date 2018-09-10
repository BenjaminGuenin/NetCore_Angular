import { AuthService } from "./../../_services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        console.log("Logged successfully");
      },
      error => {
        console.log("ERROR");
      }
    );
    console.log(this.model);
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !!token; // return true if there is something in the token, false if not.
  }

  logout() {
    localStorage.removeItem("token");
    console.log("logged out");
  }
}
