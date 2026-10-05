export interface CourseItem {
  id: string;
  title: string;
  category: 'technical' | 'vocational' | 'industrial' | 'professional' | 'soft-skills';
  duration: string;
  mode: 'Offline' | 'Online' | 'Hybrid';
  summary: string;
  highlights: string[];
  eligibility: string;
  careerRoles: string[];
  certifications: string;
}

export interface ProjectRecord {
  id: string;
  partner: string;
  course: string;
  studentsCount: number;
  programType: 'Training & placement' | 'Training' | 'Mobilization';
  mode: 'Offline mode' | 'online mode';
  category: 'Tech' | 'Vocational' | 'Finance/Admin' | 'Industrial';
  notes?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'classroom' | 'beautician' | 'tailoring' | 'embroidery' | 'pmkvy-ai' | 'celebration' | 'placement';
  image: string;
  caption: string;
  tag: string;
  details: string;
  pdfPage: number;
}

export const ACADEMY_INFO = {
  name: 'ILAKKU TECH SKILLS ACADEMY',
  shortName: 'Ilakku Academy',
  parentOrg: 'Ilakku Tech Solutions',
  establishedYear: 2018,
  tagline: 'SKILL TRAINING & PLACEMENT',
  motto: 'Career Starts Here',
  udyamRegNumber: 'UDYAM-TN-24-0108582',
  accreditation: 'MSME Registered Skill Training Centre, Recognized by the Ministry of Micro, Small and Medium Enterprises, Govt. of India',
  phone: '+91 9159150364',
  phoneRaw: '9159150364',
  email: 'ilakkutechskillsacademy@gmail.com',
  address: {
    building: 'Kamaraj Bhavan, No 571 1st Floor',
    street: 'Poonamallee High Rd, Aminjikarai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600029',
    country: 'India'
  },
  stats: {
    totalStudents: '8,890+',
    established: '2018',
    majorProjects: '18+',
    placementPartners: '40+',
    avgPlacementRate: '85%'
  },
  vision: 'To be a leading center of excellence in skill development, empowering individuals with industry-relevant knowledge and hands-on training to enhance employability, entrepreneurship, and lifelong learning.',
  mission: [
    {
      title: 'Empower Learners',
      description: 'Provide high-quality, practical skill training that meets current industry standards.',
      icon: 'GraduationCap'
    },
    {
      title: 'Promote Employability',
      description: 'Bridge the gap between education and employment by equipping individuals with job-ready skills.',
      icon: 'Briefcase'
    },
    {
      title: 'Encourage Innovation & Entrepreneurship',
      description: 'Foster creativity, problem-solving, and entrepreneurial thinking among trainees.',
      icon: 'Lightbulb'
    },
    {
      title: 'Collaborate with Industry',
      description: 'Partner with businesses, government bodies, and institutions to offer real-world training and placement opportunities.',
      icon: 'Building2'
    }
  ],
  whyChooseUs: [
    {
      title: 'Proven Track Record',
      description: 'Over 8,890 trainees empowered through state and national skill programs with verifiable impact.',
      icon: 'Award'
    },
    {
      title: 'Certified & Experienced Trainers',
      description: 'Industry veterans and certified master craftsmen delivering hands-on practical education.',
      icon: 'UserCheck'
    },
    {
      title: 'Flexible Delivery Methods',
      description: 'Fully equipped modern classrooms, hi-tech labs, online live sessions, and hybrid modules.',
      icon: 'Laptop'
    },
    {
      title: 'Measurable Outcomes & Placement Support',
      description: 'Dedicated recruitment drives, continuous post-training counseling, and lifelong career mentorship.',
      icon: 'TrendingUp'
    }
  ]
};

export const COURSES_DATA: CourseItem[] = [
  {
    id: 'junior-dev',
    title: 'Junior Software Developer',
    category: 'technical',
    duration: '3 to 4 Months',
    mode: 'Offline',
    summary: 'Full-stack fundamentals, modern programming languages, database architecture, and live project development.',
    highlights: ['HTML5, CSS3, JavaScript, Python / Java basics', 'Relational database schema & SQL queries', 'Version control with Git & GitHub', 'Live capstone software build & code reviews'],
    eligibility: 'Any graduate / diploma / 12th pass with basic computer interest',
    careerRoles: ['Junior Software Engineer', 'Web Developer Intern', 'Frontend Assistant', 'Technical Support Developer'],
    certifications: 'Ilakku Academy & Industry Skill Assessment Certificate'
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    category: 'technical',
    duration: '3 Months',
    mode: 'Offline',
    summary: 'Practical data cleaning, statistical modeling, dashboard visualization with PowerBI/Excel, and business intelligence.',
    highlights: ['Advanced MS Excel with Power Query & Pivot Tables', 'Data analysis using Python (Pandas, NumPy)', 'Interactive dashboards with PowerBI / Tableau', 'Real-world business case study analytics'],
    eligibility: 'Graduates in B.Sc, B.Com, B.E, B.Tech, or BCA',
    careerRoles: ['Data Analyst', 'MIS Executive', 'Business Intelligence Associate', 'Operations Analyst'],
    certifications: 'Certified Data Analytics Professional'
  },
  {
    id: 'tally-gst',
    title: 'MS Office with Tally Prime + GST',
    category: 'technical',
    duration: '2 Months',
    mode: 'Offline',
    summary: 'Computerized accounting, inventory management, taxation compliance, GST filing, and financial reporting.',
    highlights: ['Voucher entry, ledger bookkeeping, and trial balance', 'GST computation, GSTR-1, GSTR-3B filings', 'Payroll processing and TDS fundamentals', 'Bank reconciliation and balance sheet creation'],
    eligibility: 'B.Com, M.Com, BBA, or anyone seeking accounts career',
    careerRoles: ['Accounts Assistant', 'Tally Operator', 'Billing & Invoicing Executive', 'Tax Associate'],
    certifications: 'Tally & GST Certified Practitioner'
  },
  {
    id: 'ai-digital',
    title: 'AI, Digital & Financial Literacy',
    category: 'technical',
    duration: '6 to 8 Weeks',
    mode: 'Offline',
    summary: 'Mastering modern AI tools, digital communication, cybersecurity basics, and modern personal/business finance.',
    highlights: ['Generative AI prompts & productivity workflows', 'Cloud productivity tools & digital collaboration', 'Safe digital banking, UPI, and fraud prevention', 'Basic programming logic & algorithmic problem solving'],
    eligibility: 'Open to youth, students, and job seekers',
    careerRoles: ['Digital Office Assistant', 'AI Prompt & Data Operator', 'Customer Support Associate'],
    certifications: 'National Digital Skilling Credential'
  },
  {
    id: 'beautician-cosmetology',
    title: 'Professional Beautician & Cosmetology',
    category: 'vocational',
    duration: '3 Months',
    mode: 'Offline',
    summary: 'Comprehensive bridal styling, skincare, makeup artistry, threading, waxing, hair spa, and salon entrepreneurship.',
    highlights: ['Traditional South Indian bridal hairstyle with floral & jewel adornment', 'Airbrush and HD bridal makeup techniques', 'Skin analysis, facials, bleaching, and therapeutic skincare', 'Salon management and independent client servicing'],
    eligibility: 'Women candidates (no formal minimum academic barrier)',
    careerRoles: ['Bridal Makeup Artist', 'Salon Stylist', 'Skin Care Specialist', 'Independent Salon Owner'],
    certifications: 'Professional Cosmetology & Beautician Certificate'
  },
  {
    id: 'tailoring-garment',
    title: 'Professional Tailoring & Garment Making',
    category: 'vocational',
    duration: '3 Months',
    mode: 'Offline',
    summary: 'Industrial power sewing machine operation, pattern drafting, blouse cutting, dressmaking, and fashion finishing.',
    highlights: ['Industrial sewing machine operation & safety', 'Exact measurements, draft paper cutting & fabric layout', 'Sari blouse styles (katori, princess cut, collar designs)', 'Churidar, gowns, nightwear, and boutique alterations'],
    eligibility: 'Open to women and aspiring fashion entrepreneurs',
    careerRoles: ['Apparel Tailor', 'Boutique Designer', 'Garment Unit Operator', 'Fashion Entrepreneur'],
    certifications: 'Garment Construction & Tailoring Credential'
  },
  {
    id: 'hand-embroidery-aari',
    title: 'Hand Embroidery & Aari / Maggam Work',
    category: 'vocational',
    duration: '2.5 Months',
    mode: 'Offline',
    summary: 'Intricate bridal embroidery craft, needle mastery, zardozi, kundan stones, sequins, and artisan blouse necklines.',
    highlights: ['Traditional Aari needle holding & chain stitch perfection', 'Zari metallic thread handling, cutdana & stone fixing', 'Elaborate bridal neckline framing and sleeve borders', 'Creative motifs (peacock, floral, butterfly, 3D thread work)'],
    eligibility: 'Any individual with keen interest in handicraft & fashion',
    careerRoles: ['Aari Work Specialist', 'Bridal Blouse Craftsman', 'Boutique Designer', 'Home-based Entrepreneur'],
    certifications: 'Artisan Needlecraft Certificate'
  },
  {
    id: 'cnc-machining',
    title: 'CNC Machine Programming & Operation',
    category: 'industrial',
    duration: '3 Months',
    mode: 'Offline',
    summary: 'Precision mechanical manufacturing, CNC lathe & milling controls, G-code/M-code programming, and safety.',
    highlights: ['Engineering drawing interpretation & tolerances', 'G-Code & M-Code setup and tool offsetting', 'Precision measuring tools (vernier calipers, micrometers)', 'Industrial workshop safety and quality assurance'],
    eligibility: 'ITI, Diploma in Mechanical, or 10th/12th with technical aptitude',
    careerRoles: ['CNC Operator', 'Machinist', 'Quality Inspector', 'Production Assistant'],
    certifications: 'Certified CNC Technician'
  },
  {
    id: 'asst-electrician',
    title: 'Assistant Electrician & Domestic Wiring',
    category: 'industrial',
    duration: '3 Months',
    mode: 'Offline',
    summary: 'Residential and commercial wiring, circuit protection, conduit installation, grounding, and basic troubleshooting.',
    highlights: ['Single & three-phase distribution systems', 'MCB, ELCB, and RCCB installations & earthing tests', 'Domestic appliances diagnosis & wiring schematics', 'Electrical safety protocol (IS / National Electrical Code)'],
    eligibility: '10th pass / ITI or interested candidates',
    careerRoles: ['Assistant Electrician', 'Maintenance Technician', 'Panel Board Assembler', 'Facility Assistant'],
    certifications: 'National Electrical Trades Credential'
  },
  {
    id: 'electronics-technician',
    title: 'Electronics Technician',
    category: 'industrial',
    duration: '3 Months',
    mode: 'Offline',
    summary: 'Testing and repairing consumer electronics, multimeter diagnosis, soldering techniques, and PCB component replacement.',
    highlights: ['Multimeter diagnostics, oscilloscope readings', 'SMD soldering, desoldering, and component testing', 'Power supply troubleshooting and circuit repairs', 'Mobile and appliance hardware fundamentals'],
    eligibility: 'ITI / Diploma / 10th-12th Science',
    careerRoles: ['Hardware Service Technician', 'Electronics Assembly Associate', 'PCB Quality Inspector'],
    certifications: 'Electronics Service Specialist'
  },
  {
    id: 'business-dev-exec',
    title: 'Business Development & Sales Executive',
    category: 'professional',
    duration: '2 Months',
    mode: 'Offline',
    summary: 'B2B/B2C sales pitching, negotiation, lead generation, CRM pipelines, and corporate client communications.',
    highlights: ['Cold pitching, qualifying leads, and objection handling', 'CRM software management (LeadSquared, Zoho, Excel)', 'Professional presentation skills and business etiquette', 'Closing techniques and quota management'],
    eligibility: 'Graduates in any discipline with strong communication skills',
    careerRoles: ['Business Development Executive (BDE)', 'Inside Sales Associate', 'Client Relationship Officer'],
    certifications: 'Corporate Sales Professional'
  },
  {
    id: 'soft-skills-prep',
    title: 'Soft Skills & Corporate Readiness',
    category: 'soft-skills',
    duration: 'Integrated Module (4 Weeks)',
    mode: 'Hybrid',
    summary: 'Personality grooming, verbal fluency, interview simulated drills, teamwork, and emotional intelligence.',
    highlights: ['Effective corporate communication & email etiquette', 'Resume drafting, LinkedIn profile optimization', 'Mock group discussions & 1-on-1 interview practice', 'Time management, workplace ethics, and emotional regulation'],
    eligibility: 'Open to all registered trainees across any program',
    careerRoles: ['Workplace Ready Professional', 'Front Office Executive', 'Customer Success Associate'],
    certifications: 'Corporate Readiness Mastery'
  }
];

export const PROJECTS_RECORD: ProjectRecord[] = [
  {
    id: 'proj-1',
    partner: 'Rooman Technologies',
    course: 'Sewing Machine Operator, CRM, Junior Software Developer',
    studentsCount: 3000,
    programType: 'Mobilization',
    mode: 'Offline mode',
    category: 'Vocational',
    notes: 'Massive mobilization drive across Chennai and surrounding districts'
  },
  {
    id: 'proj-2',
    partner: 'Excelus Learning Solutions',
    course: 'Business Development Executive',
    studentsCount: 300,
    programType: 'Training & placement',
    mode: 'Offline mode',
    category: 'Finance/Admin',
    notes: 'Intensive corporate sales and placement training'
  },
  {
    id: 'proj-3',
    partner: 'Edubridge India',
    course: 'Finance & Database Process Associate',
    studentsCount: 200,
    programType: 'Training & placement',
    mode: 'online mode',
    category: 'Finance/Admin',
    notes: 'Virtual live batches with direct BFSI placement drives'
  },
  {
    id: 'proj-4',
    partner: 'CIEL Skills and Careers Pvt Ltd',
    course: 'Junior Software Developer',
    studentsCount: 250,
    programType: 'Training & placement',
    mode: 'Offline mode',
    category: 'Tech',
    notes: 'Classroom programming bootcamp with hiring rounds'
  },
  {
    id: 'proj-5',
    partner: 'CIEL Skills and Careers Pvt Ltd',
    course: 'MS Office with Tally + GST',
    studentsCount: 200,
    programType: 'Training & placement',
    mode: 'Offline mode',
    category: 'Finance/Admin',
    notes: 'Practical accounting labs and tax filing simulations'
  },
  {
    id: 'proj-6',
    partner: 'Deepam for Education Empowerment & Development',
    course: 'Data Science and Analytics',
    studentsCount: 50,
    programType: 'Training & placement',
    mode: 'Offline mode',
    category: 'Tech',
    notes: 'Intensive cohort for young graduates and women in STEM'
  },
  {
    id: 'proj-7',
    partner: 'Deepam for Education Empowerment & Development',
    course: 'Beautician',
    studentsCount: 100,
    programType: 'Training',
    mode: 'Offline mode',
    category: 'Vocational',
    notes: 'Women empowerment program with hands-on cosmetology studio'
  },
  {
    id: 'proj-8',
    partner: 'Deepam for Education Empowerment & Development',
    course: 'Hand Embroidery & Aari Work',
    studentsCount: 100,
    programType: 'Training',
    mode: 'Offline mode',
    category: 'Vocational',
    notes: 'Artisan craft training fostering self-employment and micro-business'
  },
  {
    id: 'proj-9',
    partner: 'Star Skills',
    course: 'Tailoring',
    studentsCount: 200,
    programType: 'Training & placement',
    mode: 'Offline mode',
    category: 'Vocational',
    notes: 'Apparel manufacturing skills and local boutique placements'
  },
  {
    id: 'proj-10',
    partner: 'TNSDC (Tamil Nadu Skill Development Corp)',
    course: 'Junior Software Developer',
    studentsCount: 60,
    programType: 'Training & placement',
    mode: 'Offline mode',
    category: 'Tech',
    notes: 'Govt. of Tamil Nadu skilling initiative'
  },
  {
    id: 'proj-11',
    partner: 'TNSDC (Tamil Nadu Skill Development Corp)',
    course: 'IT Technical Support',
    studentsCount: 60,
    programType: 'Training & placement',
    mode: 'Offline mode',
    category: 'Tech',
    notes: 'Hardware, OS diagnostics, and IT networking labs'
  },
  {
    id: 'proj-12',
    partner: 'TNSDC (Tamil Nadu Skill Development Corp)',
    course: 'Credit Processing Officer',
    studentsCount: 60,
    programType: 'Training & placement',
    mode: 'online mode',
    category: 'Finance/Admin',
    notes: 'Banking operations and loan appraisal workflows'
  },
  {
    id: 'proj-13',
    partner: 'TNSDC (Tamil Nadu Skill Development Corp)',
    course: 'Call Center Executive',
    studentsCount: 60,
    programType: 'Training & placement',
    mode: 'Offline mode',
    category: 'Finance/Admin',
    notes: 'Customer support, voice drills, and BPO placements'
  },
  {
    id: 'proj-14',
    partner: 'RPL CSR (Recognition of Prior Learning)',
    course: 'Assistant Electrician',
    studentsCount: 450,
    programType: 'Training',
    mode: 'Offline mode',
    category: 'Industrial',
    notes: 'Formal assessment and certification for practicing technicians'
  },
  {
    id: 'proj-15',
    partner: 'RPL CSR (Recognition of Prior Learning)',
    course: 'Electronics Technician',
    studentsCount: 350,
    programType: 'Training',
    mode: 'Offline mode',
    category: 'Industrial',
    notes: 'Industry-standard PCB repair and diagnostic credentialing'
  },
  {
    id: 'proj-16',
    partner: 'Women Empowerment Program',
    course: 'CNC',
    studentsCount: 400,
    programType: 'Training',
    mode: 'Offline mode',
    category: 'Industrial',
    notes: 'Special female mechanical engineering batch for industrial machining'
  },
  {
    id: 'proj-17',
    partner: 'Corporate CSR Initiative',
    course: 'Artificial Intelligence (AI)',
    studentsCount: 1500,
    programType: 'Training',
    mode: 'Offline mode',
    category: 'Tech',
    notes: 'Digital, AI, and financial literacy skilling across youth batches'
  },
  {
    id: 'proj-18',
    partner: 'Youth Skilling Initiative',
    course: 'GEET Program',
    studentsCount: 1500,
    programType: 'Training & placement',
    mode: 'Offline mode',
    category: 'Tech',
    notes: 'Comprehensive youth skilling and sustainable livelihood placement'
  }
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'gal-hero-classroom',
    title: 'High-Tech IT Lab & Computer Classrooms',
    category: 'classroom',
    image: '/src/assets/images/hero_academy_classroom_1791203505855.jpg',
    caption: 'Modern air-conditioned computer laboratory at Aminjikarai campus with desktop systems, high-speed connectivity, and interactive projection.',
    tag: 'Infrastructure',
    details: 'Full infrastructure equipped with high-performance desktop systems, individual student workstations, projector screens, and mentor support for hands-on software development and data science training.',
    pdfPage: 8
  },
  {
    id: 'gal-beautician-bridal',
    title: 'Bridal Styling & Cosmetology Studio',
    category: 'beautician',
    image: '/src/assets/images/beautician_bridal_styling_1791203519333.jpg',
    caption: 'Traditional South Indian bridal hair styling adorned with fresh fragrant jasmine flowers, gold jadai temple jewelry, and professional cosmetics kits.',
    tag: 'Women Empowerment',
    details: 'Equipped with salon-grade mirrors, professional makeup palettes (Forever52, Kryolan), facial treatment beds, and live bridal styling workstations.',
    pdfPage: 12
  },
  {
    id: 'gal-tailoring-workshop',
    title: 'Garment Construction & Tailoring Workshop',
    category: 'tailoring',
    image: '/src/assets/images/tailoring_garment_workshop_1791203533118.jpg',
    caption: 'Industrial sewing machine workshop where women trainees master pattern making, precision stitching, sari blouse cutting, and boutique fashion.',
    tag: 'Vocational Skill',
    details: 'Features rows of motorized sewing machines, large pattern cutting tables, mannequin fittings, and orientation ceremonies lighting traditional lamps.',
    pdfPage: 13
  },
  {
    id: 'gal-embroidery-aari',
    title: 'Intricate Hand Embroidery & Aari Needlework',
    category: 'embroidery',
    image: '/src/assets/images/hand_embroidery_aari_art_1791203546877.jpg',
    caption: 'Artisan trainees mastering Aari needle craft, metallic zari threading, zardozi work, beads, and custom bridal blouse motifs on circular wooden hoops.',
    tag: 'Artisan Craft',
    details: 'Showcases traditional craft skills enabling home-based entrepreneurship. Trainees create high-value bridal embroidery, floral gowns, butterfly motifs, and ornate borders.',
    pdfPage: 14
  },
  {
    id: 'gal-placement-recruitment',
    title: 'Corporate Placement Drive & HR Interviews',
    category: 'placement',
    image: '/src/assets/images/placement_drive_interviews_1791203563079.jpg',
    caption: 'On-campus hiring interviews conducted by visiting recruitment partners including IT services, BFSI firms, and corporate HRs.',
    tag: '100% Placement Support',
    details: 'Regular campus recruitment drives with companies like Causeve Sense & Compute, CIEL, Star Skills, and retail/service firms offering immediate appointment letters.',
    pdfPage: 20
  }
];

export const PDF_PHOTO_SERIES = [
  {
    page: 8,
    category: 'Classroom & Infrastructure',
    title: 'Ilakku Tech Skills Academy Classrooms (Chennai)',
    description: 'Fully furnished seminar seating, projector displays, individual student desks, and computer terminals in central Chennai.',
    count: '3 Batches Daily',
    features: ['High-speed LAN', 'Interactive Projectors', 'Ergonomic Seating', 'Individual PC Terminals']
  },
  {
    page: 9,
    category: 'Classroom & Infrastructure',
    title: 'Dedicated IT Lab & Learning Atmosphere',
    description: 'Specialized lab setups with dual monitor rows, whiteboards for algorithmic breakdown, and quiet study zones.',
    count: '60+ Workstations',
    features: ['Modern Desktop Systems', 'Software Development IDEs', 'Dedicated Trainer Podiums', 'CCTV Secured']
  },
  {
    page: 10,
    category: 'Technical Skilling',
    title: 'Data Science, Analytics & Tally + GST Batches',
    description: 'Active classroom sessions with live chart demonstrations, Excel formulas, business dashboards, and corporate financial accounting.',
    count: '250+ Certified',
    features: ['PowerBI Dashboards', 'Tally Prime with GST', 'Corporate Financial Reports', 'Projector Case Studies']
  },
  {
    page: 11,
    category: 'Vocational Training',
    title: 'Professional Beautician & Cosmetology Studio',
    description: 'Studio setup with professional makeup brushes, eyeshadow palettes, foundation sets, facial treatment chairs, and hands-on client practice.',
    count: '100+ Trainees',
    features: ['Forever52 Cosmetics', 'Facial & Skincare Stations', 'Bridal Makeup Mirror Stations', 'Sanitized Tools']
  },
  {
    page: 12,
    category: 'Vocational Training',
    title: 'South Indian Bridal Hairstyle & Hair Ornaments',
    description: 'Trainees demonstrating traditional South Indian long bridal braids decorated with fresh jasmine strands (malli poo) and golden temple jewelry.',
    count: 'Bridal Mastery',
    features: ['Jasmine Floral Styling', 'Temple Jewelry Braid Clips', 'Silk Saree Draping', 'Bridal Artistry']
  },
  {
    page: 13,
    category: 'Vocational Training',
    title: 'Tailoring & Industrial Sewing Center',
    description: 'Full capacity garment making hall with motorized sewing machines, fabric rolls, measurement charts, and traditional inaugural lamp lighting.',
    count: '200+ Women Empowered',
    features: ['Power Sewing Machines', 'Pattern Cutting Diagrams', 'Inaugural Lamp Lighting Ceremony', 'Garment Finishing']
  },
  {
    page: 14,
    category: 'Vocational Training',
    title: 'Hand Embroidery & Aari Work Classroom',
    description: 'Dozens of women trainees practicing intricate hand embroidery on specialized circular wooden frames with gold metallic threads and Aari needles.',
    count: '100+ Artisans',
    features: ['Circular Wooden Hoops', 'Aari Hook Needles', 'Zari & Silk Threads', 'One-on-One Mentorship']
  },
  {
    page: 15,
    category: 'Vocational Training',
    title: 'Student Aari & Zari Artworks Showcase',
    description: 'Exquisite student creations: bridal blouse cutwork, beaded butterflies, 3D thread work gowns, and ornate neckline stone embellishments.',
    count: 'Handmade Portfolio',
    features: ['3D Thread Work Art', 'Butterfly Zardozi Motifs', 'Bridal Blouse Necklines', 'Kundan & Bead Art']
  },
  {
    page: 16,
    category: 'Government Schemes',
    title: 'PMKVY (Pradhan Mantri Kaushal Vikas Yojana) & Skill India',
    description: 'Accredited government scheme training sessions, mobilization programs, Skill India banner halls, and safety apparel demonstrations.',
    count: 'Skill India Certified',
    features: ['Skill India Partner', 'PMKVY Certified Curriculum', 'Mobilization Drives', 'Govt. Recognized Certification']
  },
  {
    page: 17,
    category: 'CSR & Future Skills',
    title: 'Digital, AI & Financial Literacy Skilling Program',
    description: 'CSR supported skilling initiative with uniformed student trainees in written assessments, digital counseling, and AI prompt foundations.',
    count: '1,500+ Trainees',
    features: ['Uniformed Trainee Batches', 'Assessment & Testing Hall', 'GPS Geo-tagged Classrooms', 'Financial Literacy']
  },
  {
    page: 18,
    category: 'Student Success',
    title: 'Course Completed Student Batches',
    description: 'Graduating students proudly displaying course completion badges, certificates, and PMKVY study kits with thumbs up celebrations.',
    count: '8,890+ Total Alumni',
    features: ['PMKVY Kits & Bags', 'Batch Group Photographs', 'Graduation Smiles', 'Career Readiness']
  },
  {
    page: 19,
    category: 'Celebration & Awards',
    title: 'Celebration & Certificate Distribution',
    description: 'International Women\'s Day cake cutting ceremony, family felicitation, and distribution of official government and academy certificates.',
    count: 'Annual Celebrations',
    features: ['Women\'s Day Cake Cutting', 'Certificate Distribution', 'Community & Family Presence', 'Alumni Network']
  },
  {
    page: 20,
    category: 'Placements',
    title: 'Campus Placement Drives & Corporate Interviews',
    description: 'HR representatives conducting technical interviews and personal appraisals, hiring students directly into corporate roles.',
    count: '40+ Hiring Drives',
    features: ['Causeve Sense & Compute Drives', 'Direct HR Interviews', '1-on-1 Aptitude Tests', 'Immediate Offer Letters']
  }
];
