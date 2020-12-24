import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  withinSpaceParameters (width, height) {
    if (height < 0 || height >340000 || width < 0 || width > 260000) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
    }
  

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.takeOffEnabled = false;
      this.message = 'She FLIES!';
    }
  }
  land (rocketImage) {
    let result = window.confirm('Are you sure you want to land?');
    if (result) {
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = 'She lands!';
      this.takeOffEnabled = true;
      rocketImage.style.bottom = '0px';
    }
  }

  abortMission (rocketImage) {
    let result = window.confirm('Are you sure you want to scrub the launch?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission scrubbed!';
      this.takeOffEnabled = true;
      rocketImage.style.bottom = '0px';
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction==='right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width=this.width + 10000;
    }
    else if (direction==='left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width=this.width - 10000;
    }
    else if (direction==='up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height=this.height + 10000;
    }
    else {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height=this.height - 10000;
    }
    this.withinSpaceParameters(this.width, this.height);
  } 
  
}



