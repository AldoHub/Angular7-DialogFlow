export class Message {
    content: FormData;
    timestamp: Date;
    user: string;
  
    constructor(content: FormData, user: string, timestamp?: Date){
      this.content = content;
      this.timestamp = timestamp;
      this.user = user;
    }
  }