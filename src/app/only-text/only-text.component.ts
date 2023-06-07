import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextService } from '../text.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-only-text',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './only-text.component.html',
  styleUrls: ['./only-text.component.scss']
})
export class OnlyTextComponent implements AfterViewInit {

  @ViewChild('text') text?: ElementRef<HTMLSpanElement>;

  ngAfterViewInit() {
    this.text?.nativeElement.focus();
    this.text?.nativeElement.setAttribute("tabindex", "1");
  }
  
  constructor(public readonly textService: TextService) {}
}
