import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrl: './exercise1.component.css'
})
export class Exercise1Component {
  title = 'NAME';

  userName: string = '';
  selectedFont: string = 'Arial';
  fontSize: number = 14;
  alignment: string[] = [];

  updateAlignment(alignment: string, event: any) {
    if (event.target.checked) {
      this.alignment.push(alignment);
    } else {
      this.alignment = this.alignment.filter(a => a !== alignment);
    }
  }

  getAlignment() {
    return this.alignment.join(' ');
  }
}
