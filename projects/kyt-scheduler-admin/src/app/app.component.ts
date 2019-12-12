import { Component, OnInit } from '@angular/core';
import { StateService } from './store/state.service';

@Component({
  selector: 'kyt-admin-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'kyt-scheduler-admin';
  constructor(private stateService: StateService) {}
  ngOnInit() {
    this.stateService.state$.subscribe((res) => {
      console.log(res);
    });
  }
}
