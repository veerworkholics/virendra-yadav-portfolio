export const skills = [
 {skill:'PHP',category:'Backend',description:'Secure server-side development and MVC architecture.',icon:'Code'},
 {skill:'Laravel',category:'Backend',description:'SaaS, enterprise applications, and business management platforms.',icon:'Layers'},
 {skill:'CodeIgniter',category:'Backend',description:'PHP applications for industry-specific business workflows.',icon:'Layers'},
 {skill:'REST APIs & JWT',category:'Backend',description:'RESTful services, JSON, and JWT authentication.',icon:'ShieldCheck'},
 {skill:'Multi-tenant SaaS',category:'Backend',description:'Architecture and development of multi-tenant applications.',icon:'Server'},
 {skill:'Business Integrations',category:'Backend',description:'Payment gateways, SMS, and WhatsApp APIs.',icon:'Cloud'},
 {skill:'MySQL',category:'Database',description:'Database design and query optimization.',icon:'Database'},
 {skill:'HTML5 & CSS3',category:'Frontend',description:'Structured and styled web interfaces.',icon:'Layout'},
 {skill:'Bootstrap',category:'Frontend',description:'Responsive interfaces for business applications.',icon:'Layout'},
 {skill:'jQuery & AJAX',category:'Frontend',description:'Interactive interfaces and asynchronous requests.',icon:'Zap'},
 {skill:'Git & GitHub',category:'Tools',description:'Version control and collaborative development.',icon:'GitBranch'},
 {skill:'Docker & cPanel',category:'Tools',description:'Application environments and deployment tools.',icon:'Server'},
].map(item => ({...item,level:0}))
