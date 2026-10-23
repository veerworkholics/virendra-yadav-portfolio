export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  company: string
  category: string
  description: string
  longDescription?: string
  tech: string[]
  featured?: boolean
  image?: string
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    id: 'webmittra',
    title: 'WebMittra - No-Code Website & Digital Platform',
    company: 'Workholics Infocorp',
    category: 'SaaS',
    featured: true,
    image: '/webmittra-project.png',
    tech: ['Laravel', 'PHP', 'Multi-tenant SaaS', 'MySQL', 'No-Code Engine', 'REST APIs', 'Razorpay'],
    description:
      'No-code website creation and digital ordering platform empowering businesses to launch fast, customizable online storefronts and menus without coding.',
    longDescription:
      'Architected multi-tenant SaaS backend powering automated instant site provisioning. Developed modular layout blocks, digital catalog sync, QR ordering workflows, and subscription billing integrations.',
    links: [{ label: 'Visit WebMittra', url: 'https://webmittra.com/' }],
  },
  {
    id: 'fretbox-saas',
    title: 'FretBox - Hostel & Residential SaaS',
    company: 'Workholics Infocorp',
    category: 'SaaS',
    featured: true,
    image: '/fretbox-project.png',
    tech: ['Laravel', 'Multi-tenant SaaS', 'MySQL', 'REST API', 'Payment Gateways', 'SMS Engine'],
    description:
      'Scalable multi-tenant hostel and residential accommodation management system serving property managers, wardens, and residents across India.',
    longDescription:
      'Architected multi-tenant database partitioning ensuring strict tenant isolation. Built automated rent invoicing, digital gate pass approvals, maintenance grievance dispatching, and Razorpay subscription recurring collections.',
    links: [{ label: 'Visit FretBox Platform', url: 'https://www.fretbox.in/' }],
  },
  {
    id: 'shubhlagans',
    title: 'ShubhLagans Matrimonial Platform',
    company: 'Workholics Infocorp',
    category: 'Community',
    featured: true,
    image: '/shubhlagans-project.png',
    tech: ['Laravel', 'PHP', 'MySQL', 'Matchmaking Algorithm', 'JWT Auth', 'Payment Gateway'],
    description:
      'Comprehensive community matrimonial platform featuring custom profile matchmaking algorithms, secure photo verification, and privacy-first messaging.',
    longDescription:
      'Delivered high-performance search queries with complex filters (caste, education, horoscope, location). Built multi-step profile builder, horoscope matching integrations, and tiered subscription plans.',
    links: [{ label: 'Visit ShubhLagans', url: 'https://shubhlagans.com/' }],
  },
  {
    id: 'smvpst',
    title: 'SMVPST - Maheshwari Vivah Prakoshth',
    company: 'Workholics Infocorp',
    category: 'Community',
    featured: true,
    image: '/smvpst-project.png',
    tech: ['PHP', 'Laravel', 'MySQL', 'Biodata Form Engine', 'Convention Registration', 'Trust Management'],
    description:
      'Dedicated community matrimonial portal and annual youth convention platform for Shree Maheshwari Vivah Prakoshth Seva Trust, Indore.',
    longDescription:
      'Developed online biodata submission forms, convention delegate registration with unique roll numbers, success story archive, and member authentication for annual sammelans.',
    links: [{ label: 'Visit SMVPST Portal', url: 'https://smvpst.com/' }],
  },
  {
    id: 'sbgbt-jobjatra',
    title: 'SBGBT & JobJatra Career Portal',
    company: 'Workholics Infocorp',
    category: 'Community',
    featured: true,
    image: '/sbgbt-project.png',
    tech: ['Laravel', 'MySQL', 'Job Matching', 'Resume Parser', 'Candidate Pipeline', 'REST API'],
    description:
      'Dual-faceted social networking ecosystem and job board connecting recruiters with qualified candidates across diverse industry sectors.',
    longDescription:
      'Developed recruiter dashboards for candidate shortlisting, applicant tracking system (ATS), automated email interview invitations, and social community forum channels.',
    links: [{ label: 'Visit SBGBT Platform', url: 'https://www.sbgbteam.com/' }],
  },
  {
    id: 'davv-flash-exam',
    title: 'UCMAS FLASH Competition & Exam Portal',
    company: 'Workholics Infocorp',
    category: 'Education',
    featured: true,
    image: '/flash-competition-project.png',
    tech: ['Laravel', 'CodeIgniter', 'Online Exam Engine', 'Auto Evaluation', 'Secure Result Delivery'],
    description:
      'High-concurrency university examination and test evaluation system developed to handle tens of thousands of simultaneous test-takers securely.',
    longDescription:
      'Constructed proctored timer modules, randomized question banking, anti-cheating tab switch detectors, and instant score generation pipelines with printable digitally signed grade sheets.',
    links: [{ label: 'Visit FLASH India', url: 'https://flash.abacusedu.co/' }],
  },
  {
    id: 'aryan-herbals',
    title: 'Aryan Herbals Global E-Commerce',
    company: 'Workholics Infocorp',
    category: 'Commerce',
    featured: true,
    image: '/aryan-herbals-project.png',
    tech: ['Laravel', 'E-Commerce', 'MySQL', 'Payment Gateway', 'Inventory Sync', 'Shipment Tracking'],
    description:
      'Global herbal wellness e-commerce platform with multi-currency checkout, dynamic discounting, abandoned cart recovery, and warehouse logistics integration.',
    longDescription:
      'Integrated Stripe and PayPal for international transactions, automated tax calculations, customer loyalty points, and real-time shipment tracking webhooks.',
    links: [{ label: 'Visit Aryan Herbals', url: 'https://aryanherbals.com/' }],
  },
  {
    id: 'sunder-masala',
    title: 'Sunder Masala Coupon & Loyalty Engine',
    company: 'Workholics Infocorp',
    category: 'Commerce',
    featured: false,
    image: '/sunder-masala-project.png',
    tech: ['PHP', 'MySQL', 'Coupon Validation', 'QR Code Engine', 'Distributor Rewards'],
    description:
      'Retailer coupon scanning and promotional reward distribution system for an established FMCG spice manufacturing brand.',
    longDescription:
      'Built single-use unique cryptographic QR codes printed inside retail packaging with fraud-prevention redemption tracking and instant bank transfer payouts for retail distributors.',
    links: [{ label: 'Visit Order Portal', url: 'http://order.sundermasala.com/' }],
  },
  {
    id: 'appointment-system',
    title: 'Multi-Branch Appointment & Slot Booking',
    company: 'Chalo Online',
    category: 'Business Operations',
    featured: false,
    image: '/image.png',
    tech: ['Laravel', 'MySQL', 'Slot Calendar', 'SMS Alerts', 'Staff Allocation'],
    description:
      'Smart appointment scheduling platform enabling clients to book service slots with real-time staff calendar synchronization and SMS reminders.',
    longDescription:
      'Features buffer-time calculation between appointments, staff shift management, automatic rescheduling alerts, and customer service history logs.',
  },
  {
    id: 'staff-management',
    title: 'Enterprise Staff & Shift Management',
    company: 'Chalo Online',
    category: 'Business Operations',
    featured: false,
    image: '/staff-management-project.jpg',
    tech: ['Laravel', 'MySQL', 'Biometric / Geo Attendance', 'Payroll Processing', 'Leave Approvals'],
    description:
      'Workforce operations dashboard covering geo-fenced mobile attendance, shift swapping, leave approval hierarchies, and monthly payroll calculation.',
    longDescription:
      'Automates complex statutory deductions, overtime calculations, bonus disbursements, and generates comprehensive compliance reports in PDF and Excel formats.',
  },
  {
    id: 'electronics-management',
    title: 'Electronics Retail & IMEI Warranty ERP',
    company: 'Chalo Online',
    category: 'Business Operations',
    featured: false,
    image: '/image3.png',
    tech: ['Laravel', 'MySQL', 'IMEI / Serial Tracking', 'Warranty Validation', 'GST Billing'],
    description:
      'Specialized ERP for consumer electronics retail chains featuring barcode/IMEI tracking, vendor warranty claims, and GST-compliant invoicing.',
    longDescription:
      'Prevents duplicate device tracking, manages manufacturer RMA (Return Merchandise Authorization) cycles, and provides real-time stock transfer audits between retail outlets.',
  },
  {
    id: 'veg-tawa',
    title: 'Veg Tawa Cafe & Kitchen Workflow',
    company: 'Workholics Infocorp',
    category: 'Restaurant & POS',
    featured: false,
    image: '/veg-tawa-project.jpg',
    tech: ['PHP', 'MySQL', 'Kitchen Display', 'Table Reservation', 'Recipe Costing'],
    description:
      'Specialized vegetarian cafe management software with touch POS terminals, table reservation booking, and recipe costing analysis.',
    longDescription:
      'Enabled precise dish recipe costing to track waste margins and real-time table occupancy heatmaps for floor managers.',
  },
  {
    id: 'einstein-kidz',
    title: 'Einstein Kidz Abacus & M-Learning India',
    company: 'Workholics Infocorp',
    category: 'Education',
    featured: false,
    image: '/einstein-kidz-project.png',
    tech: ['CodeIgniter', 'PHP', 'Speed Mental Math Engine', 'LMS', 'Progress Tracking'],
    description:
      'Interactive mental math speed-training LMS and competition platform with animated visual abacus quizzes and national ranking leaderboards.',
    longDescription:
      'Built timed speed arithmetic modules testing children in mental mathematics competitions with instant answer grading and animated achievement badges.',
  },
  {
    id: 'restaurant-pos',
    title: 'Restaurant Management & Cloud POS',
    company: 'Chalo Online',
    category: 'Restaurant & POS',
    featured: true,
    image: '/restaurant-pos-project.jpg',
    tech: ['Laravel', 'MySQL', 'POS Billing', 'QR Menus', 'Kitchen KOT', 'REST APIs', 'WhatsApp Bot'],
    description:
      'Complete end-to-end cloud POS, live kitchen order tickets (KOT), contact-free QR dining menus, real-time inventory deduction, and WhatsApp bill delivery.',
    longDescription:
      'Developed for high-volume dining environments. Features split-second order sync between server tablets and the kitchen display system (KDS), automated inventory tracking based on ingredient BOM (Bill of Materials), and direct integration with thermal receipt printers.',
    links: [{ label: 'Visit Live Software', url: 'https://restaurant.chaloonline.in/' }],
  },
]
