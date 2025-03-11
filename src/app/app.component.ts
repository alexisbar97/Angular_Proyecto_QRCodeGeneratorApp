import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrGeneratorComponent } from './components/qr-generator/qr-generator.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, QrGeneratorComponent, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qr-generator';
}
