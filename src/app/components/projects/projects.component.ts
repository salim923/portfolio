import {Component, OnInit} from '@angular/core';
interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  liveUrl: string
  githubUrl: string
}

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  activeFilter = "all"

  projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
      image: "/ecommerce-dashboard.png",
      technologies: ["Angular", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/task-management-app.png",
      technologies: ["React", "Firebase", "Material-UI"],
      category: "web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Weather Mobile App",
      description: "A cross-platform mobile app providing detailed weather forecasts with beautiful animations.",
      image: "/weather-mobile-app-interface.jpg",
      technologies: ["React Native", "Redux", "Weather API"],
      category: "mobile",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with modern design.",
      image: "/portfolio-website-design.png",
      technologies: ["Angular", "SCSS", "TypeScript"],
      category: "web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for managing multiple social media accounts with analytics.",
      image: "/social-media-dashboard.png",
      technologies: ["Vue.js", "Express.js", "PostgreSQL"],
      category: "fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 6,
      title: "Fitness Tracker App",
      description:
        "A mobile application for tracking workouts, nutrition, and fitness goals with progress visualization.",
      image: "/fitness-tracker-mobile-app.jpg",
      technologies: ["Flutter", "Dart", "SQLite"],
      category: "mobile",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ]

  filteredProjects: Project[] = []

  ngOnInit(): void {
    this.filteredProjects = this.projects
  }

  filterProjects(category: string): void {
    this.activeFilter = category

    if (category === "all") {
      this.filteredProjects = this.projects
    } else {
      this.filteredProjects = this.projects.filter((project) => project.category === category)
    }
  }
}
