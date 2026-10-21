export interface ProjectLink { label: string; url: string }
export interface Project { title: string; company: string; category: string; description: string; links?: ProjectLink[] }

// Add confirmed software URLs to a project using links: [{ label: "Visit website", url: "https://..." }].
export const projects: Project[] = [
 { title: 'Restaurant Management System', links: [{ label: 'Visit Restaurant Software', url: 'https://restaurant.chaloonline.in/' }], company: 'Chalo Online', category: 'Restaurant & POS', description: 'POS billing, QR menus, kitchen order tickets (KOT), online ordering, and inventory management.' },
 { title: 'Appointment Management System', company: 'Chalo Online', category: 'Business Operations', description: 'Appointment scheduling and management platform within a suite of business applications.' },
 { title: 'Staff Management System', company: 'Chalo Online', category: 'Business Operations', description: 'Staff management platform supporting business operations.' },
 { title: 'Electronics Management System', company: 'Chalo Online', category: 'Business Operations', description: 'Electronics management platform developed alongside restaurant, appointment, and staff management systems.' },
 { title: 'FretBox', links: [{ label: 'Visit FretBox', url: 'https://www.fretbox.in/' }], company: 'Workholics Infocorp', category: 'SaaS', description: 'Hostel and residential management SaaS platform.' },
 { title: 'ShubhLagans.com & SMVPST.com', links: [{ label: 'Visit ShubhLagans', url: 'https://shubhlagans.com/' }, { label: 'Visit SMVPST', url: 'https://smvpst.com/' }], company: 'Workholics Infocorp', category: 'Community', description: 'Matrimonial platforms in a broader portfolio of industry-specific web applications.' },
 { title: 'SBGBT & JobJatra.com', links: [{ label: 'Visit SBGBT', url: 'https://www.sbgbteam.com/' }], company: 'Workholics Infocorp', category: 'Community', description: 'Social networking platform and job portal.' },
 { title: 'Veg Tawa', company: 'Workholics Infocorp', category: 'Restaurant & POS', description: 'Restaurant and cafe management platform.' },
 { title: 'DAVV, UCMAS India & FLASH India', links: [{ label: 'Visit FLASH India', url: 'https://flash.abacusedu.co/' }], company: 'Workholics Infocorp', category: 'Education', description: 'University portal and online examination platforms.' },
 { title: 'Einstein Kidz Abacus & M-Learning India', company: 'Workholics Infocorp', category: 'Education', description: 'Learning, examination, and education platforms.' },
 { title: 'AryanHerbals.com', links: [{ label: 'Visit Aryan Herbals', url: 'https://aryanherbals.com/' }], company: 'Workholics Infocorp', category: 'Commerce', description: 'E-commerce platform.' },
 { title: 'Sunder Masala', links: [{ label: 'Visit Sunder Masala', url: 'http://order.sundermasala.com/' }], company: 'Workholics Infocorp', category: 'Commerce', description: 'Coupon and offer management system.' },
]
