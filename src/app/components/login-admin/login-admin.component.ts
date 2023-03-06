import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MeService } from 'src/app/services/me.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginAdminComponent {
  readonly adminLogin: FormGroup = new FormGroup({ adminEmail: new FormControl(), adminPassword: new FormControl() });

  constructor(private _authService: AuthService, private _router: Router, private _meService: MeService) {
  }

  onAdminLoginSubmitted(adminLogin: FormGroup): void {
    this._authService.adminLogin(adminLogin.value.adminEmail, adminLogin.value.adminPassword).subscribe({
      error: (err) => console.log(err),
      complete: () => (this._router.navigate(['logged-in']))
    })

  }
}
