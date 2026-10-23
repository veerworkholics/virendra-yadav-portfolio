export interface SkillItem {
  skill: string
  category: 'Backend' | 'Database' | 'Frontend' | 'Tools' | 'Architecture'
  description: string
  icon: string
  level: number
  experienceYears: string
  tags: string[]
}

export const skills: SkillItem[] = [
  {
    skill: 'PHP (8.x / 7.x)',
    category: 'Backend',
    description: 'Expert-level object-oriented PHP, MVC patterns, design patterns, clean code principles, and performance tuning.',
    icon: 'Code',
    level: 95,
    experienceYears: '7+ Years',
    tags: ['OOP', 'MVC', 'PSR Standards', 'Composer'],
  },
  {
    skill: 'Laravel Framework',
    category: 'Backend',
    description: 'Enterprise & SaaS application architecture, Eloquent ORM, Queues/Jobs, Middleware, Service Providers, and Blade.',
    icon: 'Layers',
    level: 96,
    experienceYears: '7+ Years',
    tags: ['Eloquent', 'Artisan', 'Queues', 'Broadcasting', 'Policies'],
  },
  {
    skill: 'CodeIgniter',
    category: 'Backend',
    description: 'Lightweight PHP development for fast-loading portals, custom accounting modules, and legacy system modernization.',
    icon: 'Layers',
    level: 90,
    experienceYears: '5+ Years',
    tags: ['MVC', 'Fast Routing', 'Legacy Migration'],
  },
  {
    skill: 'REST APIs & JWT Security',
    category: 'Backend',
    description: 'Stateless RESTful APIs, JWT token authorization, OAuth2 workflows, rate limiting, and secure endpoints for mobile/web apps.',
    icon: 'ShieldCheck',
    level: 94,
    experienceYears: '6+ Years',
    tags: ['JWT', 'OAuth2', 'Sanctum', 'Postman', 'Swagger'],
  },
  {
    skill: 'Multi-Tenant SaaS Architecture',
    category: 'Architecture',
    description: 'Single-database and multi-database tenancy architectures, tenant domain routing, and automated tenant provisioning.',
    icon: 'Server',
    level: 92,
    experienceYears: '5+ Years',
    tags: ['Data Isolation', 'Subdomain Routing', 'Tenant Migrations'],
  },
  {
    skill: 'MySQL & Query Optimization',
    category: 'Database',
    description: 'Relational schema design, normalization, indexing strategies, complex joins, query profiling, and slow-query tuning.',
    icon: 'Database',
    level: 92,
    experienceYears: '7+ Years',
    tags: ['Indexing', 'Stored Procedures', 'EXPLAIN Profiling', 'Transactions'],
  },
  {
    skill: 'Third-Party Business Integrations',
    category: 'Backend',
    description: 'Razorpay, Stripe, PayPal, SMS gateways (Twilio/MSG91), and WhatsApp Business API for transactional messaging.',
    icon: 'Cloud',
    level: 93,
    experienceYears: '6+ Years',
    tags: ['Razorpay', 'Stripe', 'WhatsApp Cloud API', 'Webhooks'],
  },
  {
    skill: 'JavaScript, jQuery & AJAX',
    category: 'Frontend',
    description: 'Dynamic asynchronous UI components, DOM manipulation, JSON serialization, and interactive web client logic.',
    icon: 'Zap',
    level: 88,
    experienceYears: '7+ Years',
    tags: ['ES6+', 'AJAX', 'Event Driven', 'DOM'],
  },
  {
    skill: 'HTML5 & Modern CSS3',
    category: 'Frontend',
    description: 'Semantic markup, accessibility (a11y), responsive layouts, CSS Flexbox/Grid, and cross-browser consistency.',
    icon: 'Layout',
    level: 92,
    experienceYears: '7+ Years',
    tags: ['Semantic HTML', 'CSS Grid', 'Flexbox', 'Responsive'],
  },
  {
    skill: 'Bootstrap & Tailwind CSS',
    category: 'Frontend',
    description: 'Rapid UI design systems, custom theme overrides, mobile-first responsive dashboards, and admin panels.',
    icon: 'Layout',
    level: 90,
    experienceYears: '6+ Years',
    tags: ['Responsive Admin', 'Theme Customization', 'Utility-First'],
  },
  {
    skill: 'Git, GitHub & Version Control',
    category: 'Tools',
    description: 'Git flow branching strategies, pull requests, merge conflict resolution, CI/CD webhooks, and team collaboration.',
    icon: 'GitBranch',
    level: 92,
    experienceYears: '7+ Years',
    tags: ['GitFlow', 'Branching', 'Code Reviews', 'Rebase'],
  },
  {
    skill: 'Docker, cPanel & Linux Deployment',
    category: 'Tools',
    description: 'Containerized development environments, Apache/Nginx server configs, SSL certificates, cron jobs, and cPanel/VPS deployments.',
    icon: 'Server',
    level: 86,
    experienceYears: '5+ Years',
    tags: ['Docker Compose', 'Nginx', 'Apache', 'Cron Jobs', 'cPanel/VPS'],
  },
]
