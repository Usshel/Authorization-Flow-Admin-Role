import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginUserComponent {
  readonly login: FormGroup = new FormGroup({ email: new FormControl(), password: new FormControl() });

  constructor(private _router: Router, private _authService: AuthService) {
  }

  onLoginSubmitted(login: FormGroup): void {
    this._authService.login(login.value.email, login.value.password).subscribe(
      {
        error: (err) => console.log(err),
        complete: () => this._router.navigate(['logged-in'])
      }
    )
  }
}
