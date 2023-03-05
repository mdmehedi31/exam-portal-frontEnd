import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit{


  categoryList:any;
  constructor(
    private cat: CategoryService,
    private sanck: MatSnackBar,
  ){}

  ngOnInit(): void {
    
    this.cat.categories().subscribe(
      (data:any)=>{
          this.categoryList=data;
      },
      (error)=>{

        this.sanck.open('Error Loading..','',{
          duration:3000,
        });
        console.log(error);
      }
    );
  }

}
