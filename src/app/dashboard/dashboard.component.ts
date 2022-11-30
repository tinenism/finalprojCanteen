import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    studentNo: new FormControl('',),
    dateTime: new FormControl('',),
    quantity: new FormControl('',)
  
  });

  constructor(private matSnackBar: MatSnackBar,private httpClient:HttpClient) { }

  ngOnInit(): void {}

  onSubmit(){
    console.log(this.dashForm.value)

    this.httpClient
    .post('https://a-l-f-4f566-default-rtdb.firebaseio.com/booking.json',this.dashForm.value)
    .subscribe((response)=> {
      console.log(response);
      this.dashForm.reset();
      
      this.matSnackBar.open("Submit successfully", "Ok", {
        verticalPosition:"top",
        horizontalPosition: "center",
        
      })
      })
    }
  }