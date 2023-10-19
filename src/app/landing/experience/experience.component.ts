import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/core/model/Experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  companies: Experience[] = [
    {
      companyName: 'Redbee Studios',
      position: 'Web/mobile Developer Ssr.',
      date: '03/2022 - Actualidad',
      lines: ['- Datafast Ecuador facilitador de pagos con débito y crédito', '- Investigación, implementación y desarrollo de app mobile.', '- Desarrollo de app mobile ecommerce para Cencosud Chile.', '- Arquitecturas modernas android.'],
      image: './assets/redbee.jpg'
    },
    {
      companyName: 'Huenei It Services',
      position: 'Software Developer Ssr.',
      date: '07/2020 - 03/2022',
      lines: ['- Mantenimiento, planificación y desarrollo de soluciones tecnológicas para bancos en Red link S.A.', '- Desarrollo y mejoramiento de funcionalidades para el Homebanking en distintas entidades bancarias.', '- Mejoramiento y optimización de transacciones.'],
      image: './assets/huenei.jpg'
    },
    {
      companyName: 'Conexia S.A.',
      position: 'Java Developer Junior Advance',
      date: '03/2019 - 07/2020',
      lines: ['- Mantenimiento y desarrollo de soluciones tecnológicas.', '- Desarrollo de mejoras para la Obras Sociales y Arts públicas y privadas.', '- Manejo y envió de datos a través de herramientas ETL.', '- manejo de bases de datos a través de postgresql.'],
      image: './assets/conexia.jpg'
    },
    {
      companyName: 'Geco',
      position: 'Java developer trainee',
      date: '07/2018 - 10/2018',
      lines: ['- Sistema de turnos online.', '- Sistema de turnos y llamado por pantalla.', '- Tiendas y carrito de compra online.', '- Sistema de turnos.'],
      image: './assets/geco.jpg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
