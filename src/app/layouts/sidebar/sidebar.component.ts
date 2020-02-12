import { Component, OnInit } from '@angular/core'
import { Constants } from '../../shared/constants';

declare const $: any
declare interface RouteInfo {
  path: string
  title: string
  icon: string
  class: string
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'dashboard',
    class: ''
  },
  {
    path: '/user-profile',
    title: 'User Profile',
    icon: 'person',
    class: ''
  },
  {
    path: '/table-list',
    title: 'Table List',
    icon: 'content_paste',
    class: ''
  },
  {
    path: '/typography',
    title: 'Typography',
    icon: 'library_books',
    class: ''
  },
  {
    path: '/notifications',
    title: 'Notifications',
    icon: 'notifications',
    class: ''
  },
  {
    path: '/upgrade',
    title: 'Upgrade Pro',
    icon: 'unarchive',
    class: 'active-pro'
  }
]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[]
  CONSTANTS
  constructor() {
    this.CONSTANTS = Constants
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem)
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false
    }
    return true
  }
}
