import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './change-detection.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ChangeDetectionComponent {
  currentFrameWork = computed(() => `Then changed detection is ${this.frameworkAsSignal().name}`);
  frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });
  frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  };
  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React';

      this.frameworkAsSignal.update((framework) => ({
        ...framework,
        name: 'React'
      }));
    }, 3000);
  }
}
