import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
// import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imageData: object;
  constructor(private data: DataService){
    // this.imageData = '';
  }

  getPersonAge(image: string){
    this.data.getPersonAge(image).subscribe((res) => {
      console.log(res);
      this.imageData = res;
    }, (error) => {
      console.log(error);
    });
  }
}
