import { Component } from '@angular/core';

@Component({
  selector: 'app-color-shade',
  templateUrl: './color-shade.component.html',
  styleUrls: ['./color-shade.component.scss']
})
export class ColorShadeComponent {

  private storageKey="user-background";
  private defaultColor= "#bedac9";
  userBackgroundColor:any;

  ngOnInit():void{
this.loadBackgroundPreferences();
  }

  private loadBackgroundPreferences(): void {
    this.userBackgroundColor = this.getBackgroundColor();
    window.document.body.style.backgroundColor = this.getBackgroundColor();
  }
  removePreferences(): void {
    localStorage.removeItem(this.storageKey);
    this.loadBackgroundPreferences();
  }
  saveBackgroundColor(color: string): void {
    localStorage.setItem(this.storageKey, color);
    this.loadBackgroundPreferences();
  }
  private getBackgroundColor(): string {
    return localStorage.getItem(this.storageKey) || this.defaultColor;
  }
  
}
