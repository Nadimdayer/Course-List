import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nadim Ahmad';
  response ={
    "customerInformatino": {
        "firstname": "Liyakat",
        "lastname": "Hussain",
        "CoursesEnrolled": [
            {
                "id": 1,
                "courseName": "Angular Course",
                "duration": "30",
                "ratings": "5",
                "totalLectures": 5,
                "completedLecture": 1,
                "tutorName": "Test",
                "price":400,
                "topics": [
                        "What is Angular",
                        "Component in Angular",
                        "Module in Angular",
                        "Services in Angular",
                        "Directive in Angular"
                ]
            },
            {
                "id": 2,
                "courseName": "React Course",
                "duration": "15",
                "ratings": "4",
                "totalLectures": 5,
                "completedLecture": 1,
                "tutorName": "Test 2",
                "price":500,
                "topics": [
                    "What is React",
                    "Component in React",
                    "Module in React",
                    "Services in React",
                    "Directive in React"
            ]
            }
        ]
    }
}
}
