import { NotificationService } from './../../shared/services/notification.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(public notificationService: NotificationService) { }

  ngOnInit() {
  }

  showNotification(from, align, _type, _message = 'Notification Template!') {
    this.notificationService.showNotification(from, align, _type, _message)
  }

}
