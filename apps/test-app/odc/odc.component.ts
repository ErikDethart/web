import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-odc',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './odc.component.html',
  styleUrls: ['./odc.component.scss']
})
export class ODCComponent {
  @ViewChild('modal') modal!: ElementRef;
  public title: string = "";
  text: string = "";

  constructor() {}

  ngAfterViewInit() {
    this.capture({ title: 'Hello, World!', text: 'Scan something' });
  }

  async capture(options: {
    title: string,
    text: string
  }): Promise <string | undefined> {
    this.title = options.title;
    this.text = options.text;
    return new Promise((resolve, reject) => {
      const dialog = this.modal.nativeElement;
      dialog.addEventListener('close', (event: any) => {
        const { detail } = event;
        if (detail.action === 'confirm') {
          resolve(detail.value);
        } else {
          reject();
        }
      });
      dialog.showModal();
    });
  }
}
