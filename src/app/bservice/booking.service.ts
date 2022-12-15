import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { map } from "rxjs/operators";
import { Booking } from "../model/bookings";

@Injectable({providedIn:"root"})
export class BookingService{
    constructor(private matSnackBar: MatSnackBar,private httpClient:HttpClient) { }
    //cretate booking in database
    createBooking(bookings:{ dateTime: string, name: string, quantity: string, studentNo: string;}){
        
        console.log(bookings)
        this.httpClient
        .post<{name: string}>('https://a-l-f-4f566-default-rtdb.firebaseio.com/booking.json',bookings)
        .subscribe((response)=> {
          console.log(response);
         
          
          this.matSnackBar.open("Submit successfully", "Ok", {
            verticalPosition:"top",
            horizontalPosition: "center",
            
          })
          });
    }
    //fetch data from database
    fetchBooking(){
      return this.httpClient.get<{[key: string]: Booking}>('https://a-l-f-4f566-default-rtdb.firebaseio.com/booking.json')
      .pipe(map((response) => {
        const bookings = [];

        for(const key in response){
          if(response.hasOwnProperty(key)){
            bookings.push({...response[key], id: key})
          }
          
        }
        return bookings;
      }))

    }
    //delete booking from database
    deleteBooking(id: string){
        this.httpClient.delete('https://a-l-f-4f566-default-rtdb.firebaseio.com/booking/'+id+'.json')
      .subscribe();
    }
    //clear all booking in database
    deleteAllBooking(){
        this.httpClient.delete('https://a-l-f-4f566-default-rtdb.firebaseio.com/booking.json')
      .subscribe();
    }
    //edit data database/table
    updateBooking(id:string,value: Booking){
        this.httpClient.put('https://a-l-f-4f566-default-rtdb.firebaseio.com/booking/'+id+'.json',value)
        .subscribe();

    }
}