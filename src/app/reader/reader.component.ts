import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgxScannerQrcodeComponent, NgxScannerQrcodeModule, ScannerQRCodeResult } from 'ngx-scanner-qrcode';
import { TextService } from '../text.service';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgxScannerQrcodeModule],
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements AfterViewInit {
  title = 'qr-code-reader';

  @ViewChild('action') qrcodeComponent?: NgxScannerQrcodeComponent;
  @ViewChild('selectDevice') selectDevice?: ElementRef<HTMLSelectElement>;

  constructor(
    private readonly router: Router,
    private readonly textService: TextService,
  ) {}

  ngAfterViewInit() {
    this.qrcodeComponent?.devices.pipe(
      filter((devices) => devices.length > 0),
      take(1)
    ).subscribe((devices) => {
      const backFacingCamera =
        devices.find((device) => device.label.includes('back'));
      if (backFacingCamera && this.selectDevice) {
        this.selectDevice.nativeElement.value = backFacingCamera.deviceId;
        this.selectDevice.nativeElement.dispatchEvent(new Event('change'));
      }
    });
    this.qrcodeComponent?.start();
  }

  onDetectQRCodeEvent(event: ScannerQRCodeResult[], action: NgxScannerQrcodeComponent) {
    const data = event[0].value;
    if (data) {
      action.pause();
      this.textService.text = data;
      this.router.navigateByUrl('only-text');
    }
  }
}
