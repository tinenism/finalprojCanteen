import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookingService } from '../bservice/booking.service';
import { Booking } from '../model/bookings';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allBooking: Booking [] =[];
  isFetching: boolean = false;
  @ViewChild('bookingsForm') form: NgForm;
  

  constructor(private bookingService:BookingService) { }

  ngOnInit():void{

  }

    
  }

  