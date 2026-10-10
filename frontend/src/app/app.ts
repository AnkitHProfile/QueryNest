import { Component, inject, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface HealthResponse{
  status: string;
  message: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  private http = inject(HttpClient);
  message = signal('Click the button to check the backend.');

  checkBackend(){
    this.message.set('Checking...');
  }
}