import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-signal-ejemplo6',
  standalone: true,
  imports: [],
  templateUrl: './signal-ejemplo6.component.html',
  styleUrl: './signal-ejemplo6.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export default class SignalEjemplo6Component {
 /*counter$ = interval(1000);
  counter = toSignal(this.counter$) 

  counter2$ = interval(1000);
  counterConValorInicial = toSignal(this.counter2$, {initialValue: 0})
*/
  counter3$ = interval(200).pipe(take(20));
  counterUpTo5 = toSignal(this.counter3$);
}
