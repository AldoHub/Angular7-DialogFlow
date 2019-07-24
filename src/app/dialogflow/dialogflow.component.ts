import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { DialogflowService } from "../dialogflow.service";

//import the model
import {Message} from "../models/message";

@Component({
  selector: 'app-dialogflow',
  templateUrl: './dialogflow.component.html',
  styleUrls: ['./dialogflow.component.css']
})
export class DialogflowComponent implements OnInit {

  constructor(private dialogflow: DialogflowService) { }

  messages: Message[] = [];
  message: Message;


  public dialogForm = new FormGroup({
    message: new FormControl('', Validators.required),
  });

  public sendMessage(formData: FormData){
    this.message = new Message( formData["message"], "username" ,new Date());
    this.messages.push(this.message);
    console.log(this.message);
    console.log(this.messages);    
    this.dialogflow.getResponse(this.message.content).subscribe( res => {
      this.messages.push(
        new Message(res["result"]["fulfillment"]["speech"], "roboto" ,res["timestamp"])
      )
    })
  }

  ngOnInit() {
  }

}
