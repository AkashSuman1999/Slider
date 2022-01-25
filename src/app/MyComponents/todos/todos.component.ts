import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  
  constructor() { 
    
    
   }

   todos: any[] =   [
    {
    sno : 1,
    title : "this is title1",
    desc : "description1",
    active: true
  }, 
  {
    sno : 2,
    title : "this is title2",
    desc : "description2",
    active: true
  },
  {
    sno : 3,
    title : "this is title3",
    desc : "description3",
    active: true
  }
]

  ngOnInit(): void {
  }

}
