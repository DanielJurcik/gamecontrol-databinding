import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  timerStarted = false;
  timerRef;

  oddsNumbers : Number[] = [];
  evenNumbers : Number[] = [];

  @Input() time : number;
  @Output() startButtonPressed = new EventEmitter<{}>();
  
  constructor() { }

  ngOnInit(): void {
  }

  startBtnPress(){
    this.startButtonPressed.emit({});
    this.timerStarted = true;
    this.timerRef =setInterval(()=>{
      this.time++;

      if(this.time % 2 == 0) this.evenNumbers.push(this.time);
      else this.oddsNumbers.push(this.time);

    },1000)
    
  }

  endBtnPress(){
    clearInterval(this.timerRef);
    this.timerStarted = false;
  }

}
