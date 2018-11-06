import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  btnDisabled: boolean = true;

  onClickReset() {
    this.username = '';
    this.btnDisabled = true;
  }

  btnToggle() {
    if (this.username === '') this.btnDisabled = true;
    else this.btnDisabled = false;
  }
}
