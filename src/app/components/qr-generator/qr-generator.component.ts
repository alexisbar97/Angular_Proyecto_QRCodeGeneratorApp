import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import QRCode from 'qrcode';

@Component({
  selector: 'app-qr-generator',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.css']
})

export class QrGeneratorComponent {
  url: string = '';
  qrCodeImage: string = '';

  generateQR() {
    if (this.url) {
      QRCode.toDataURL(this.url, { errorCorrectionLevel: 'H' }, (err: any, url: string) => {
        if (err) {
          console.error(err);
          return;
        }
        this.qrCodeImage = url;
      });
    }
  }
}
