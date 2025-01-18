import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JsonTableComponent} from './json-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-json';
}
