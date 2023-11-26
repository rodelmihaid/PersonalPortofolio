import { Component } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css'],
})
export class MainBodyComponent {
  stringuri: string[] = [
    'Dimulete Rodel Mihai',
    'Entry-level FrontEnd Developer',
    'I like informatics and programming',
  ];
  currentIndex = 0;
  variabila: string = 'i';

  constructor() {}

  ngOnInit() {
    this.actualizeazaVariabila();
  }

  actualizeazaVariabila() {
    this.variabila = this.stringuri[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.stringuri.length;
    setTimeout(() => {
      this.actualizeazaVariabila();
    }, 2000);
  }
}
