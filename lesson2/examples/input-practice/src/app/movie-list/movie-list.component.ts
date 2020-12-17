import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie (newTitle: string) {
      let errorMessage = '';
      if(newTitle.length < 1) {
         errorMessage = 'Please enter a title';
         //return this.movies;
      } else if (this.movies.includes(newTitle)) {
         errorMessage = `You already have ${newTitle} on your list!`;
      } else {
         this.movies.push(newTitle);
      }  
      return errorMessage;
   }
}
