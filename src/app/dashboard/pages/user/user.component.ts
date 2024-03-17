import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';



import { TitleComponent } from '@shared/title/title.component';
import type { User } from '@interfaces/request.response';
import { switchMap } from 'rxjs';
import { UserService } from '@services/user.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {
  private router = inject(ActivatedRoute);
  private userService = inject(UserService);
  temp: string = 'test';

  // public user = signal<User | undefined>(undefined);
  public user = toSignal<User | undefined>(
    this.router.params.pipe(
      switchMap(({ id }) => this.userService.getUserById(id))
    )
  );
  public userName = computed(() => {
    return !this.user() ? 'User' : this.user()!.firstName + ' ' + this.user()!.lastName;
  })



  // constructor() {
  //   // console.log(this.router.snapshot.params);
  //   console.log(this.router.params);
  // }
}
