import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgxScannerQrcodeComponent, NgxScannerQrcodeModule, ScannerQRCodeConfig, ScannerQRCodeResult } from 'ngx-scanner-qrcode';
import { TextService } from '../text.service';
import { filter, Subscription, take } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [CommonModule, NgxScannerQrcodeModule, FormsModule],
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements AfterViewInit, OnDestroy {
  title = 'qr-code-reader';
  selectedDevice = '';
  private readonly subsink = new Subscription();

  config: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth,
        facingMode: "environment"
      },
    }
  };

  @ViewChild('action') qrcodeComponent?: NgxScannerQrcodeComponent;
  @ViewChild('selectDevice') selectDevice?: ElementRef<HTMLSelectElement>;

  constructor(
    private readonly router: Router,
    private readonly textService: TextService,
  ) {}

  ngAfterViewInit() {
    this.qrcodeComponent?.start();
    this.textService.text = '';
    this.subsink.add(
      this.qrcodeComponent?.devices.pipe(
        filter((devices) => devices.length > 0),
        take(1)
      ).subscribe((devices) => {
        console.log('hello world');
        const backFacingCamera =
          devices.find((device) =>
            (device.label.toLowerCase().includes('back') ||
             device.label.toLowerCase().includes('rear') ||
             device.label.toLowerCase().includes('environment') ||
             device.label.toLowerCase().includes('traseira')));
        if (backFacingCamera && this.selectDevice) {
          this.qrcodeComponent?.playDevice(backFacingCamera.deviceId).subscribe(() => {
            this.selectedDevice = backFacingCamera.deviceId;
          });
        }
      }).add(() => {
        if (this.selectedDevice === '') {
          this.selectedDevice = this.qrcodeComponent?.devices.value[this.qrcodeComponent.deviceIndexActive].deviceId ?? '';
        }
      })
    );
  }

  ngOnDestroy() {
    this.subsink.unsubscribe();
  }

  onDetectQRCodeEvent(event: ScannerQRCodeResult[], action: NgxScannerQrcodeComponent) {
    const data = event[0].value;
    if (data) {
      action.stop().subscribe(() => {
        this.textService.text = data;
        this.router.navigateByUrl('only-text');
      });
    }
  }
}
