import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

export type ButtonOptions = {
  neutral?: boolean;
  primary?: boolean;
  secondary?: boolean;
  accent?: boolean;
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  ghost?: boolean;
  link?: boolean;
  outline?: boolean;
  active?: boolean;
  disabled?: boolean;
  glass?: boolean;
  noAnimation?: boolean;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  wide?: boolean;
  block?: boolean;
  circle?: boolean;
  square?: boolean;
};

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class ButtonComponent {
  @Input() neutral = false;
  @Input() primary = false;
  @Input() secondary = false;
  @Input() accent = false;
  @Input() info = false;
  @Input() success = false;
  @Input() warning = false;
  @Input() error = false;
  @Input() ghost = false;
  @Input() link = false;
  @Input() outline = false;
  @Input() active = false;
  @Input() disabled = false;
  @Input() glass = false;
  @Input() noAnimation = false;
  @Input() size: 'lg' | 'md' | 'sm' | 'xs' = 'md';
  @Input() wide = false;
  @Input() block = false;
  @Input() circle = false;
  @Input() square = false;
}
