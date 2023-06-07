import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgxScannerQrcodeComponent, NgxScannerQrcodeModule, ScannerQRCodeResult } from 'ngx-scanner-qrcode';
import { TextService } from '../text.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgxScannerQrcodeModule],
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements AfterViewInit {
  title = 'qr-code-reader';

  @ViewChild("action") qrcodeComponent?: NgxScannerQrcodeComponent;

  constructor(
    private readonly router: Router,
    private readonly textService: TextService,
  ) {}

  ngAfterViewInit() {
    const backFacingCamera =
      this.qrcodeComponent?.devices.value.find((device) => device.label.includes('back'));
    backFacingCamera && this.qrcodeComponent?.playDevice(backFacingCamera.deviceId);
    this.qrcodeComponent?.start();
  }

  async onEvent(event: ScannerQRCodeResult[], action: NgxScannerQrcodeComponent) {
    const data = event[0].value;
    if (data) {
      action.pause();
      this.textService.text = data;
      await this.router.navigateByUrl('only-text');
    }
  }
}
