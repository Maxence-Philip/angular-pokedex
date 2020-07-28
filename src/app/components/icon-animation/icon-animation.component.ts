import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-animation',
  templateUrl: './icon-animation.component.html',
  styleUrls: ['./icon-animation.component.scss']
})
export class IconAnimationComponent {
  @Input() startIcon: string;
  @Input() endIcon: string;
  @Input() animate: boolean;

  @Output() iconClicked = new EventEmitter();

  toggle() {
    this.animate = !this.animate;
    this.iconClicked.emit();
  }
}
