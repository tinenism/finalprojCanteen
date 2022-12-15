import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookingService } from '../bservice/booking.service';
import { Booking } from '../model/bookings';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  allBooking: Booking [] =[];
  isFetching: boolean = false;
  editMode: boolean =false;
  currentReservationId: string;
  @ViewChild('bookingsForm') form: NgForm;


  constructor(private bookingService:BookingService) { }

  ngOnInit(){
    this.fetchBooking();
  }

  onBookingFetch(){
    this.fetchBooking(); 
  }
  onSubmit(bookings:{ dateTime: string, name: string, quantity: string, studentNo: string;}){
    if(!this.editMode)
    this.bookingService.createBooking(bookings)
    else
      this.bookingService.updateBooking(this.currentReservationId, bookings)
    }
  private fetchBooking(){
    this.isFetching = true;
    this.bookingService.fetchBooking().subscribe((bookings) =>{
      this.allBooking = bookings;
      this.isFetching = false;
    })
  }

  onDeleteBooking(id:string){
    this.bookingService.deleteBooking(id)

  }
  onClear(){
    this.bookingService.deleteAllBooking()
  }

  onEdit(id: string){
    this.currentReservationId = id;
    // Get the reservation base on id
    let currentBooked = this.allBooking.find((b)=>{return b.id === id})
    //console.log(this.form)
    //populate the form with reservation details
    this.form.setValue({
      dateTime: currentBooked.dateTime, 
      name: currentBooked.name,
      quantity: currentBooked.quantity, 
      studentNo: currentBooked.studentNo
    })
    //change the button value to update reseravtion
    this.editMode = true;

  }
  
}


