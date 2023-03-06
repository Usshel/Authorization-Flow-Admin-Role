import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { MeService } from '../../services/me.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggedInComponent {
  readonly meData$: Observable<any> = this._meService.currentlyLoginUser();
  
  constructor(private _meService: MeService) {
  }
}
