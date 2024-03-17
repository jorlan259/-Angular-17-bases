import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  showContent = signal<boolean>(false);
  grade = signal<Grade>('A');

  frameworks = signal<string[]>(['Angular', 'React', 'Vue', 'Svelte']);
  frameworks2 = signal<string[]>([]);

  toggleContent() {
    this.showContent.update((value) => !value);
  }
}
