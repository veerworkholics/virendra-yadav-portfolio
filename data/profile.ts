export interface ExperienceItem {
  company: string
  role: string
  period: string
  location?: string
  details: string
  achievements?: string[]
  technologies?: string[]
}

export interface EducationItem {
  degree: string
  year: string
  field: string
  institution?: string
  description?: string
}

export const profile = {
  name: 'Virendra Yadav',
  shortName: 'Virendra',
  role: 'Senior Laravel Developer & Technical Team Lead',
  location: 'Indore, Madhya Pradesh, India',
  email: 'vir.yadav92@gmail.com',
  phone: '+91 90749 00032',
  whatsapp: 'https://wa.me/919074900032?text=Hi%20Virendra,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.',
  resume: '/Virendra_Yadav_CV.pdf',
  summary:
    'Accomplished Senior Software Developer and Team Lead with 7+ years of hands-on expertise developing robust SaaS, enterprise ERP, POS, and high-concurrency web platforms using Laravel, PHP, CodeIgniter, and MySQL. Proven track record in microservices architecture, RESTful APIs, JWT security, multi-tenant databases, and mentoring high-performing development teams.',
  aboutLong:
    'Over the past 7+ years, I have architected and scaled multi-tenant software solutions, point-of-sale systems, billing workflows, and critical third-party integrations (Payment Gateways, SMS, WhatsApp API). I bridge complex business requirements with resilient, maintainable codebases while championing best practices in database normalization, query optimization, and team collaboration.',
  metrics: [
    { label: 'Years Experience', value: 7, suffix: '+' },
    { label: 'Projects Delivered', value: 20, suffix: '+' },
    { label: 'APIs & Services', value: 100, suffix: '+' },
    { label: 'Team Mentored', value: 15, suffix: '+' },
  ],
}

export const experience: ExperienceItem[] = [
  {
    company: 'Workholics Infocorp',
    role: 'Senior PHP Laravel Developer & Team Lead',
    period: 'August 2026 – Present',
    location: 'Indore, India',
    details:
      'Leading Laravel and PHP development initiatives, multi-tenant SaaS architecture, REST API design, MySQL query optimization, and technical team mentorship.',
    achievements: [
      'Architecting resilient multi-tenant SaaS backend with strict data isolation and scalable schema patterns.',
      'Refactoring high-traffic database queries, reducing average API response times by over 40%.',
      'Directing agile sprints, conducting in-depth code reviews, and mentoring junior to mid-level developers.',
    ],
    technologies: ['Laravel', 'PHP 8.x', 'MySQL', 'REST APIs', 'JWT', 'Redis', 'Docker', 'Git'],
  },
  {
    company: 'Chalo Online',
    role: 'Senior PHP Developer',
    period: 'March 2026 – July 2026',
    location: 'Indore, India',
    details:
      'Led the end-to-end development of modern business management suites covering restaurant POS, appointment booking, staff operations, and electronics retail.',
    achievements: [
      'Designed and deployed complete restaurant POS platform with QR menus, live KOT (Kitchen Order Tickets), and inventory tracking.',
      'Constructed secure REST APIs consumed by mobile apps and frontend web dashboards.',
      'Integrated payment gateways and real-time WhatsApp order notification systems.',
    ],
    technologies: ['Laravel', 'REST APIs', 'MySQL', 'Payment Gateways', 'WhatsApp API', 'jQuery', 'Bootstrap'],
  },
  {
    company: 'Workholics Infocorp',
    role: 'Senior PHP Developer',
    period: 'August 2019 – February 2026',
    location: 'Indore, India',
    details:
      'Developed enterprise web applications, e-commerce stores, education platforms, and custom ERP systems using Laravel and CodeIgniter.',
    achievements: [
      'Developed FretBox SaaS hostel and residential property management platform serving thousands of daily active users.',
      'Built online examination and student portal platforms for universities including DAVV and UCMAS India.',
      'Implemented robust JWT authentication, role-based access control (RBAC), and third-party webhook integrations.',
    ],
    technologies: ['Laravel', 'CodeIgniter', 'PHP', 'MySQL', 'JavaScript', 'AJAX', 'cPanel', 'AWS EC2'],
  },
]

export const education: EducationItem[] = [
  {
    degree: 'Master of Social Work (MSW)',
    year: '2018',
    field: 'Social Development & Organization Management',
    institution: 'DAVV University, Indore',
    description: 'Developed strong organizational leadership, stakeholder empathy, and community-driven project execution skills.',
  },
  {
    degree: 'Post Graduate Diploma in Computer Applications (PGDCA)',
    year: '2016',
    field: 'Computer Applications & Systems',
    institution: 'Indore, India',
    description: 'Foundational computer science principles, database management, structured programming, and software development.',
  },
  {
    degree: 'Bachelor of Commerce (B.Com)',
    year: '2015',
    field: 'Commerce, Accounting & Business Studies',
    institution: 'Indore, India',
    description: 'Solid foundation in business workflows, accounts, financial ledgers, and operational processes which power ERP and POS development.',
  },
]
