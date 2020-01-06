import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';

  private priklad = "";


  addPlus() {
    this.priklad += "+";
  }
  addMinus() {
    this.priklad += "-";
  }

  addNumber(number) {
    this.priklad += number;
  }

  clear() {
    this.priklad = "";
  }

  addComa() {
    this.priklad += ",";
  }

  addLBracket() {
    this.priklad += "(";
  }

  addRBracket() {
    this.priklad += ")";
  }

  addTimes() {
    this.priklad += "*";
  }
  
  calculate() {
    this.priklad = eval(this.priklad);
  }
  
}

