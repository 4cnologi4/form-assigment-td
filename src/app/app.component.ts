import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  subscriptions = ["Basic", "Advanced", "Pro"];
  defaultS: string = this.subscriptions[1];
  display: boolean = false;

  user = {
    email: "",
    password: "",
    subscription: ""
  };

  onSubmit(form: NgForm) {
    this.display = true;
    this.user.email = form.value.userData.email;
    this.user.password = form.value.userData.password;
    this.user.subscription = form.value.userData.subscription;
    form.reset();
  }

  closeWindow() {
    this.display = false;
  }
}
