import React from 'react';
import type { CvData } from './types';
import { ExperienceCard } from './components/ExperienceCard';
import { SkillBadge } from './components/SkillBadge';
import { Icon } from './components/Icon';

const cvData: CvData = {
  name: 'Fernando Javier Molgaray',
  role: 'Estudiante Avanzado de Ciencias de la Comunicación',
  contact: {
    email: 'molgaray@gmail.com',
    phone: '11 4061 5263',
    address: 'Vera 610, Capital Federal',
    cuit: '20-24243496-0',
    age: '50 años',
    status: 'Disponible'
  },
  summary: 'Estudiante avanzado de Ciencias de la Comunicación con una vasta experiencia en gestión administrativa y atención al público en el ámbito universitario. Comprometido con el periodismo comunitario y en constante aprendizaje de nuevas tecnologías como la Inteligencia Artificial y el diseño web.',
  experience: [
    {
      title: 'Gestión de Recursos Bibliográficos',
      company: 'Biblioteca "Nahuel Agüero", Dpto. de Artes Audiovisuales, UNA',
      period: '2017 - Presente',
      responsibilities: [
        'Gestión de recursos bibliográficos, atención al público estudiantil y docente.',
        'Organización de material académico y apoyo en actividades administrativas del departamento.'
      ]
    },
     {
      title: 'Asistente Administrativo',
      company: 'Posgrado de Arte Terapia, Universidad Nacional de las Artes',
      period: '2006 - 2017',
      responsibilities: [
        'Atención al público y asistencia a estudiantes en todos los pasos de su carrera.',
        'Carga de datos de alumnos en la Base de datos.',
        'Seguimiento de expedientes de designación docente, tramitación de títulos y firma de convenios.'
      ]
    },
    {
      title: 'Asistente Administrativo',
      company: 'Rectorado, Universidad Nacional de las Artes',
      period: '2004 - 2006',
      responsibilities: [
        'Atención al público y asistencia a estudiantes.',
        'Carga de datos de alumnos y seguimiento de expedientes y tramitaciones varias.'
      ]
    },
    {
      title: 'Operador Social - Periodista',
      company: 'Radio Comunitaria FM Bajo Flores',
      period: 'Julio 2002 - Presente',
      responsibilities: [
        'Seguimiento de necesidades y logros de adolescentes, transmisión a la institución y al Programa.',
        'Dictado de talleres de Radio y periodismo.'
      ]
    },
    {
      title: 'Data Entry',
      company: 'RETESAR SA (Telefónica de Argentina)',
      period: 'Febrero 2000 - Febrero 2001',
      responsibilities: [
        'Carga de fichas de instaladores en el sistema propio de Telefónica de Argentina.',
        'Trato directo con clientes para consultas y asesoramiento a instaladores.'
      ]
    }
  ],
  education: [
    {
      degree: 'Licenciatura en Ciencias de la Comunicación',
      university: 'Universidad de Buenos Aires',
      period: '2023 - Cursando'
    },
    {
      degree: 'Bachiller con Orientación Docente',
      university: 'Colegio Nacional con Anexo Comercial - San Antonio de Padua',
      period: '1987 - 1992'
    }
  ],
  certificates: [
    {
      name: 'Power BI',
      institution: 'DAXUS Latam',
      date: 'Agosto 2025',
      url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEha8pxjLsSQ_sZo9LrVgSadAf9e3QulEkyDY_7QAZX66KfwpRSJMhUk8IgthajsoXSySNGe6ebgFuQau-ruewSPsDc2hCyIvCRErOBUUm-nZI3kkZkfCSUjbiGsav5Nyr2CIyOklpKqFpYh551uEQ4hdyooOHt2iZTEPtwwlZQ-3DZlCqqM7q_kbjlnRrnZ/s3509/25.08%20certificado%20power%20bi%20fernando-javier-molgaray1270f6c8-0e54-47b6-be17-43ba61e02bc5_page-0001.jpg'
    },
    {
      name: 'Introducción a la Inteligencia Artificial',
      institution: 'BIG School',
      date: 'Mayo 2025',
      url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg20lTZwg4mCiZnrlxM3YjQjJ2a35CK9oNZ3vBosfI8bfuwA5boMZyWNBEaRHIArQCDpzW0KlcsjrdnrRiH4GtashQBRueBgn_k7nvCVb9JEVnyEs4JUeTMboEgSr58-w03rUei9uPz1iZOfQ3j-QjmycnDK5F7Xoj966BZlNJwBO15JBeh6ZfYnVGvh32E/s3000/25.05%20Fernando%20Javier_Molgaray_page-0001.jpg'
    },
    {
      name: 'Curso de IA Google-Santander',
      institution: 'Google - Santander',
      date: 'Agosto 2024',
      url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgdgeJR50qJ9PZvl_04w7gguE6VolbLHqtxAJIZ3AyxXlnAI1KIGtD7hPUJJzKT9yq0he2iF6jSi-J8i6nAiir_hsAGuCAtnOoxhESuYrfDM2712kfbp1E5wEP0u0U7lO4ayTei5sOWa08sJ2-wyGfvg3V-2j-k1d-LHRs5nqgaSUVQd52jvkMsrkuv4Ut/s4500/24.08%20curso%20Ai%20google%20santander%20certificado_page-0001.jpg'
    }
  ],
  skills: {
    'Habilidades Técnicas y de Gestión': [
      'Gestión Administrativa', 'Base de datos y expedientes', 'Atención al Público',
      'Paquete Office', 'Inteligencia Artificial', 'Comunicación',
      'Gestión de Proyectos', 'Diseño Web', 'Periodismo y Radio'
    ]
  },
  languages: [
    { lang: 'Español', level: 'Nativo' },
    { lang: 'Inglés', level: 'Intermedio' }
  ]
};


const App: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-10 font-sans text-slate-800">
      <main className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-3">
        {/* Sidebar */}
        <aside className="lg:col-span-1 bg-slate-50 p-8 border-r border-slate-200">
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://picsum.photos/seed/fernandomolgaray/200" 
              alt={cvData.name} 
              className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white"
            />
            <h1 className="mt-6 text-4xl font-bold text-slate-900">{cvData.name}</h1>
            <h2 className="mt-2 text-xl font-medium text-sky-600">{cvData.role}</h2>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-slate-900 border-b-2 border-sky-500 pb-2">Información de Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center">
                <Icon name="email" className="w-5 h-5 text-sky-600 mr-3" />
                <a href={`mailto:${cvData.contact.email}`} className="hover:text-sky-600 transition-colors">{cvData.contact.email}</a>
              </li>
              <li className="flex items-center">
                <Icon name="phone" className="w-5 h-5 text-sky-600 mr-3" />
                <span>{cvData.contact.phone}</span>
              </li>
               <li className="flex items-center">
                <Icon name="location" className="w-5 h-5 text-sky-600 mr-3" />
                <span>{cvData.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Icon name="cuit" className="w-5 h-5 text-sky-600 mr-3" />
                <span>CUIT: {cvData.contact.cuit}</span>
              </li>
              <li className="flex items-center">
                <Icon name="age" className="w-5 h-5 text-sky-600 mr-3" />
                <span>Edad: {cvData.contact.age}</span>
              </li>
              <li className="flex items-center">
                <Icon name="status" className="w-5 h-5 text-sky-600 mr-3" />
                <span>Estado: {cvData.contact.status}</span>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-slate-900 border-b-2 border-sky-500 pb-2">Habilidades</h3>
            <div className="mt-4 space-y-4">
              {Object.entries(cvData.skills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="font-semibold text-sm text-slate-600 mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(skill => <SkillBadge key={skill} name={skill} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-slate-900 border-b-2 border-sky-500 pb-2">Idiomas</h3>
            <ul className="mt-4 space-y-2">
                {cvData.languages.map(lang => (
                    <li key={lang.lang} className="flex justify-between">
                        <span className="font-medium">{lang.lang}</span>
                        <span className="text-slate-600">{lang.level}</span>
                    </li>
                ))}
            </ul>
          </div>

        </aside>

        {/* Main Content */}
        <div className="lg:col-span-2 p-8 sm:p-12 space-y-12">
          <section>
            <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-sky-500 pb-2 flex items-center">
              <Icon name="summary" className="w-6 h-6 mr-3 text-sky-600" />
              Resumen Profesional
            </h3>
            <p className="mt-4 text-slate-700 leading-relaxed">{cvData.summary}</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-sky-500 pb-2 flex items-center">
              <Icon name="experience" className="w-6 h-6 mr-3 text-sky-600" />
              Experiencia Profesional
            </h3>
            <div className="mt-6 space-y-8">
              {cvData.experience.map((job, index) => <ExperienceCard key={index} job={job} />)}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-sky-500 pb-2 flex items-center">
              <Icon name="education" className="w-6 h-6 mr-3 text-sky-600" />
              Educación
            </h3>
            <div className="mt-6 space-y-4">
                {cvData.education.map((edu, index) => (
                    <div key={index} className="p-4 bg-slate-50/50 rounded-lg">
                        <div className="flex justify-between items-baseline">
                            <h4 className="text-lg font-semibold text-slate-800">{edu.degree}</h4>
                            <p className="text-sm text-slate-500 font-medium">{edu.period}</p>
                        </div>
                        <p className="text-md text-sky-700">{edu.university}</p>
                    </div>
                ))}
            </div>
          </section>
          
          <section>
            <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-sky-500 pb-2 flex items-center">
              <Icon name="certificate" className="w-6 h-6 mr-3 text-sky-600" />
              Certificados y Cursos
            </h3>
            <div className="mt-6 space-y-4">
                {cvData.certificates.map((cert, index) => (
                  <a 
                    key={index} 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group block p-4 bg-slate-50/50 rounded-lg hover:bg-sky-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex justify-between items-baseline">
                        <h4 className="text-lg font-semibold text-slate-800">{cert.name}</h4>
                        <div className="flex items-center space-x-2">
                           <p className="text-sm text-slate-500 font-medium">{cert.date}</p>
                           <Icon name="external-link" className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
                        </div>
                    </div>
                    <p className="text-md text-sky-700">{cert.institution}</p>
                  </a>
                ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default App;