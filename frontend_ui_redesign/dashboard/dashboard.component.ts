import { Component } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
/**
 * DashboardComponent
 * Renders the main dashboard layout with sidebar, search, user profile, statistics, and charts.
 */
export class DashboardComponent {
  services = [
    { icon: 'router', name: 'Broadband Service', color: '#0057b8' },
    { icon: 'lan', name: 'LAN Service', color: '#1ca77a' },
    { icon: 'feed', name: 'Syslog Service', color: '#f47c20' }
  ];

  user = {
    name: 'Alex Morgan',
    status: 'Online'
  };

  // Dummy values for charts; replace with dynamic data as needed
  networkActivity: [number, number, number, number, number, number, number, number, number, number, number, number] = [30, 48, 55, 68, 40, 75, 90, 96, 91, 80, 50, 74];
  deviceAcquisitions = [5, 8, 11, 7];
  contentUsage = [
    { c: 'Streaming', q1: 15, q2: 17, q3: 16, q4: 18, color: '#0057b8' },
    { c: 'Downloads', q1: 8, q2: 7, q3: 11, q4: 10, color: '#1ca77a' },
    { c: 'Browsing', q1: 12, q2: 10, q3: 15, q4: 13, color: '#f47c20' }
  ];
}
