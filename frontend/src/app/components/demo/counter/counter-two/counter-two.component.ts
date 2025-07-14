import { Component, SkipSelf } from '@angular/core';
import { CounterService } from '../../../../services/counter.service';

@Component({
  selector: 'app-counter-two',
  templateUrl: './counter-two.component.html',
  styleUrl: './counter-two.component.css',
  providers: [CounterService],
})
export class CounterTwoComponent {
  constructor(@SkipSelf() public cService: CounterService) {}
}
