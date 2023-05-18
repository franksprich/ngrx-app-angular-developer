import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngrx-app-angular-developer';

  ngOnInit(): void {
    // console.log(this.sum(1, 2, 3, 4, 5));
  }

  // sum(...args: number[]): number {
  //   let sum: number = 0;
  //   for (let i = 0; i < args.length; i++) {
  //     sum += args[i];
  //   }
  //   return sum;
  // }

}
