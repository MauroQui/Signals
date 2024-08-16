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
  
    counter$ = interval(200).pipe(take(20)); // Limitar a 20 emisiones
    counter = toSignal(this.counter$)
   
    counter2$ = interval(200).pipe(take(20)); // Limitar a 20 emisiones;
    counterConValorInicial = toSignal(this.counter2$, {initialValue: 0})
   
    counter3$ = interval(200).pipe(take(20)); // Limitar a 20 emisiones
    counterUpTo5 = toSignal(this.counter3$)
  
}
