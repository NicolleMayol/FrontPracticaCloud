import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  skills: any[] = [
    {
      name: 'Java',
      image: './assets/java.svg'
    },
    {
      name: 'JavaScript',
      image: './assets/javascript.svg'
    },
    {
      name: 'Android',
      image: './assets/android.svg'
    },
    {
      name: 'Kotlin',
      image: './assets/kotlin.svg'
    },
    {
      name: 'Spring boot',
      image: './assets/spring.svg'
    },
    {
      name: 'Angular',
      image: './assets/angular.svg'
    },
    {
      name: 'NestJs',
      image: './assets/nestjs.svg'
    },
    {
      name: 'React',
      image: './assets/react.svg'
    },
    {
      name: 'Node Js',
      image: './assets/nodejs.svg'
    },
    {
      name: 'TypeScript',
      image: './assets/typescript.svg'
    },
    {
      name: 'Express',
      image: './assets/express.svg'
    },
    {
      name: 'Jest',
      image: './assets/jest.svg'
    },
    {
      name: 'Html 5',
      image: './assets/html5.svg'
    },
    {
      name: 'Css3',
      image: './assets/css3.svg'
    },
    {
      name: 'Bootstrap',
      image: './assets/bootstrap-plain.svg'
    },
    {
      name: 'Jquery',
      image: './assets/jquery.png'
    },
    {
      name: 'Python',
      image: './assets/python.svg'
    },
    {
      name: 'Material UI',
      image: './assets/mui.png'
    },
    {
      name: 'Git',
      image: './assets/git.svg'
    },
    {
      name: 'Gitlab',
      image: './assets/gitlab.svg'
    },
    {
      name: 'Postgresql',
      image: './assets/postgresql.svg'
    },
    {
      name: 'Mysql',
      image: './assets/mysql.svg'
    },
    {
      name: 'Mongo DB',
      image: './assets/mongodb.svg'
    },
    {
      name: 'Redis',
      image: './assets/redis.svg'
    },
    {
      name: 'Kafka',
      image: './assets/kafka.svg'
    },
    {
      name: 'Docker',
      image: './assets/docker.svg'
    },
    {
      name: 'Figma',
      image: './assets/figma.svg'
    },
    {
      name: 'Jenkins',
      image: './assets/jenkins.svg'
    },
    {
      name: 'AWS',
      image: './assets/aws.svg'
    },
    {
      name: 'Xampp',
      image: './assets/xampp.png'
    },
    {
      name: 'Linux',
      image: './assets/linux.svg'
    },
    {
      name: 'Firebase',
      image: './assets/firebase.png'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
