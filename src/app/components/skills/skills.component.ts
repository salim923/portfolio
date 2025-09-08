import {Component, OnInit} from '@angular/core';
interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  name: string
  icon: string
  skills: Skill[]
}

interface Tool {
  name: string
  icon: string
}
@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skillCategories: SkillCategory[] = [
    {
      name: "Frontend Development",
      icon: "fas fa-laptop-code",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Angular", level: 85 },
        { name: "React", level: 50 },
      ],
    },
    {
      name: "Backend Development",
      icon: "fas fa-server",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 78 },
        { name: "Java", level: 75 },
        { name: "C#", level: 72 },
      ],
    },
    {
      name: "Database & Cloud",
      icon: "fas fa-database",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "SQLServer", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "Firebase", level: 85 },
        { name: "Docker", level: 70 },
      ],
    },
  ]

  tools: Tool[] = [
    { name: "VS Code", icon: "fas fa-code" },
    {name: "IntelliJ IDEA", icon: "fas fa-lightbulb" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "GitHub", icon: "fab fa-github" },
    { name: "Figma", icon: "fab fa-figma" },
    { name: "Postman", icon: "fas fa-paper-plane" },
  ]

  ngOnInit(): void {}
}
