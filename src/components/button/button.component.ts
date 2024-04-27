import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() variant: string = '';
  @Output() onClick = new EventEmitter<string>();

  constructor() {}
  ngOnInit(): void {}

  emitEvent() {
    this.onClick.emit("Test");
  }
}
