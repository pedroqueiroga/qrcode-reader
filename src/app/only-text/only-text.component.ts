import { Component } from '@angular/core';
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
export class OnlyTextComponent {
  
  constructor(public readonly textService: TextService) {}
}
