import { Component, OnInit } from '@angular/core';
import { StateService } from '@kyt-admin/store/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'kyt-scheduler-user';
  constructor(private stateService: StateService) {}
  ngOnInit() {
    this.stateService.state$.subscribe((res) => {
      console.log(res);
    });
  }
}
