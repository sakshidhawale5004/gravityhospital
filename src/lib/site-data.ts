export const HOSPITAL = {
  name: "Gravity Hospital",
  full: "Gravity Hospital & Research Centre",
  tagline: "Advanced Multi-Speciality Care in Pune",
  address:
    "Triveni Nagar Chowk, Satyam Nagar, Nigdi, P.C.M.C., Pune – 411062, Maharashtra",
  phones: ["+91 77965 13130", "+91 77965 13100"],
  email: "gravityhospital@gmail.com",
  website: "www.gravityhospital.com",
  whatsapp: "917796513130", // digits only, no +
};

export const whatsappLink = (msg = "Hi Gravity Hospital, I'd like to enquire.") =>
  `https://wa.me/${HOSPITAL.whatsapp}?text=${encodeURIComponent(msg)}`;

export type ServiceCategory = "All" | "Medicine & Critical Care" | "Surgical & Orthopaedics" | "Women & Eye/Skin";

export type Service = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  image: string;
  icon: string;
  category: "Medicine & Critical Care" | "Surgical & Orthopaedics" | "Women & Eye/Skin";
  highlights: string[];
  procedures: string[];
  conditions: string[];
};

// Services with local photography from /public/services
export const SERVICES: Service[] = [
  {
    slug: "medicine",
    name: "General Medicine",
    short: "Comprehensive adult internal medicine care.",
    icon: "🩺",
    category: "Medicine & Critical Care",
    image: "/services/General%20Medicine.jpg",
    intro:
      "Our General Medicine department manages the full spectrum of adult illnesses, from routine health check-ups to complex multi-system disorders, with an evidence-based, patient-first approach.",
    highlights: [
      "24×7 physician availability",
      "Chronic disease management",
      "Preventive health check-ups",
      "Fever, infection & lifestyle disorders",
    ],
    procedures: [
      "Comprehensive OPD consultations",
      "Master Health Check-ups",
      "IV therapy & short-stay observation",
      "Vaccination & immunisation",
    ],
    conditions: [
      "Diabetes & Hypertension",
      "Thyroid disorders",
      "Fever of unknown origin",
      "Anaemia & fatigue",
    ],
  },
  {
    slug: "respiratory",
    name: "Respiratory / Pulmonology",
    short: "Care for lungs, airways and sleep-breathing disorders.",
    icon: "🫁",
    category: "Medicine & Critical Care",
    image: "/services/Respiratory%20Pulmonology.jpg",
    intro:
      "Advanced diagnostics and treatment for asthma, COPD, respiratory infections, tuberculosis and sleep apnea, backed by modern pulmonary function testing.",
    highlights: [
      "Pulmonary Function Tests (PFT)",
      "Nebulisation & oxygen therapy",
      "Bronchoscopy support",
      "TB & post-COVID care",
    ],
    procedures: [
      "Spirometry & PFT",
      "Sleep study referral",
      "Pleural tap / aspiration",
      "Bronchial hygiene therapy",
    ],
    conditions: ["Asthma", "COPD", "Pneumonia", "Tuberculosis", "Sleep Apnea"],
  },
  {
    slug: "surgery",
    name: "General & Laparoscopic Surgery",
    short: "Minimally invasive and open surgical care.",
    icon: "🔪",
    category: "Surgical & Orthopaedics",
    image: "/services/General%20&%20Laparoscopic%20Surgery.jpg",
    intro:
      "From emergency appendicitis and hernia to advanced laparoscopic procedures, our surgical team delivers safe, precise care with faster recovery times.",
    highlights: [
      "Laparoscopic & open surgery",
      "24×7 emergency surgical cover",
      "Modular operation theatres",
      "Enhanced Recovery After Surgery (ERAS)",
    ],
    procedures: [
      "Laparoscopic Appendicectomy",
      "Hernia Repair (Mesh / Lap)",
      "Laparoscopic Cholecystectomy",
      "Piles, Fissure & Fistula surgery",
    ],
    conditions: [
      "Appendicitis",
      "Gallstones",
      "Hernia",
      "Abscess & soft-tissue infections",
    ],
  },
  {
    slug: "gynaecology",
    name: "Gynaecology & Obstetrics",
    short: "Women's health across every life stage.",
    icon: "🤰",
    category: "Women & Eye/Skin",
    image: "/services/Gynaecology%20&%20Obstetrics.jpg",
    intro:
      "Compassionate care for pregnancy, delivery, menstrual disorders and gynaec surgery — with round-the-clock labour room and neonatal support.",
    highlights: [
      "Normal & C-section deliveries",
      "High-risk pregnancy management",
      "Laparoscopic gynaec surgery",
      "Menopause & PCOD clinic",
    ],
    procedures: [
      "Antenatal care & USG",
      "Painless (epidural) delivery",
      "Hysterectomy (Lap / Open)",
      "D&C, Hysteroscopy",
    ],
    conditions: [
      "PCOD / PCOS",
      "Fibroids",
      "Infertility work-up",
      "Menstrual irregularities",
    ],
  },
  {
    slug: "orthopedic",
    name: "Orthopaedics",
    short: "Bone, joint and spine care with modern techniques.",
    icon: "🦴",
    category: "Surgical & Orthopaedics",
    image: "/services/Orthopaedics.jpg",
    intro:
      "Trauma, fracture care, joint replacement and spine consultations delivered by experienced orthopaedic surgeons with dedicated OT and rehabilitation.",
    highlights: [
      "24×7 trauma & fracture care",
      "Total Knee & Hip Replacement",
      "Arthroscopic surgery",
      "Spine consultation",
    ],
    procedures: [
      "Fracture fixation (plating / nailing)",
      "Joint replacement",
      "Arthroscopy",
      "Physiotherapy & rehab",
    ],
    conditions: [
      "Fractures & dislocations",
      "Osteoarthritis",
      "Back & neck pain",
      "Sports injuries",
    ],
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    short: "Heart care from prevention to critical intervention.",
    icon: "❤️",
    category: "Medicine & Critical Care",
    image: "/services/Cardiology.jpg",
    intro:
      "Advanced cardiac evaluation with ECG, 2D-Echo, TMT and 24×7 emergency cardiac support, including coordinated care for heart attacks and heart failure.",
    highlights: [
      "24×7 chest pain evaluation",
      "2D Echo, ECG, TMT",
      "Heart-attack (STEMI) protocol",
      "Cardiac ICU support",
    ],
    procedures: [
      "ECG & Holter monitoring",
      "2D Echocardiography",
      "TMT / Stress test",
      "Angiography referral",
    ],
    conditions: [
      "Heart attack (MI)",
      "Hypertension",
      "Heart failure",
      "Arrhythmias",
    ],
  },
  {
    slug: "neurology",
    name: "Neurology",
    short: "Care for stroke, seizures and nerve disorders.",
    icon: "🧠",
    category: "Medicine & Critical Care",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Rapid stroke evaluation, epilepsy management and treatment for headaches, neuropathy and movement disorders, supported by in-house CT scan and ICU.",
    highlights: [
      "Stroke-ready hospital",
      "In-house CT scan",
      "Epilepsy & headache clinic",
      "Neuro-rehabilitation",
    ],
    procedures: [
      "CT Brain",
      "EEG referral",
      "Nerve conduction studies",
      "Thrombolysis for eligible stroke",
    ],
    conditions: [
      "Stroke",
      "Epilepsy",
      "Migraine",
      "Parkinson's disease",
    ],
  },
  {
    slug: "ent",
    name: "ENT — Ear, Nose & Throat",
    short: "Full-spectrum ENT care for all ages.",
    icon: "👂",
    category: "Surgical & Orthopaedics",
    image:
      "https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Consultations and surgery for hearing loss, sinusitis, tonsils, snoring, vertigo and voice disorders using endoscopic and micro-surgical techniques.",
    highlights: [
      "Endoscopic sinus surgery",
      "Tonsil & adenoid surgery",
      "Hearing evaluation",
      "Vertigo & tinnitus clinic",
    ],
    procedures: [
      "Nasal endoscopy",
      "Tympanoplasty",
      "FESS",
      "Tonsillectomy",
    ],
    conditions: ["Sinusitis", "Otitis media", "Tonsillitis", "Vertigo"],
  },
  {
    slug: "ophthalmology",
    name: "Ophthalmology",
    short: "Modern eye care and refractive evaluation.",
    icon: "👁️",
    category: "Women & Eye/Skin",
    image: "/services/Ophthalmology.jpg",
    intro:
      "Comprehensive eye check-ups, cataract evaluation, diabetic retinopathy screening and management of common eye disorders.",
    highlights: [
      "Cataract evaluation",
      "Diabetic eye screening",
      "Refraction & spectacles",
      "Glaucoma screening",
    ],
    procedures: [
      "Slit-lamp examination",
      "IOP / Tonometry",
      "Fundus examination",
      "Cataract surgery referral",
    ],
    conditions: ["Cataract", "Refractive errors", "Diabetic retinopathy", "Glaucoma"],
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    short: "Skin, hair and cosmetic dermatology care.",
    icon: "✨",
    category: "Women & Eye/Skin",
    image: "/services/Dermatology.jpg",
    intro:
      "Evidence-based care for skin infections, acne, pigmentation, hair loss and chronic skin conditions, along with medically supervised cosmetic dermatology.",
    highlights: [
      "Acne & pigmentation clinic",
      "Hair loss evaluation",
      "Allergy & eczema care",
      "Chemical peels",
    ],
    procedures: [
      "Skin biopsy",
      "Cryotherapy",
      "Chemical peels",
      "Wart & mole removal",
    ],
    conditions: ["Acne", "Psoriasis", "Eczema", "Fungal infections", "Hair loss"],
  },
  {
    slug: "nephrology",
    name: "Nephrology",
    short: "Kidney care, hypertension and dialysis coordination.",
    icon: "🩸",
    category: "Medicine & Critical Care",
    image: "/services/Nephrology.jpg",
    intro:
      "Diagnosis and management of kidney disease, resistant hypertension, and coordination for dialysis and long-term renal care.",
    highlights: [
      "Chronic kidney disease clinic",
      "Resistant hypertension",
      "Dialysis coordination",
      "Post-transplant follow-up",
    ],
    procedures: [
      "Kidney function tests",
      "Urine microscopy",
      "USG KUB",
      "Renal biopsy referral",
    ],
    conditions: [
      "Chronic Kidney Disease",
      "Acute Kidney Injury",
      "Nephrotic syndrome",
      "Kidney stones",
    ],
  },
  {
    slug: "urology",
    name: "Urology & Urinary System",
    short: "Care for kidney stones, prostate and urinary disorders.",
    icon: "💧",
    category: "Surgical & Orthopaedics",
    image: "/services/Urology%20&%20Urinary%20System.jpg",
    intro:
      "Complete evaluation and treatment of urinary stones, prostate disorders, urinary infections and male health, with minimally invasive options.",
    highlights: [
      "Kidney stone clinic",
      "Prostate evaluation",
      "UTI management",
      "Endo-urology support",
    ],
    procedures: [
      "USG KUB",
      "Cystoscopy referral",
      "DJ stenting",
      "TURP referral",
    ],
    conditions: [
      "Kidney & ureteric stones",
      "Prostate enlargement (BPH)",
      "Recurrent UTI",
      "Haematuria",
    ],
  },
];

export type Facility = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  image: string;
  icon: string;
  features: string[];
  contact: string;
};

export const FACILITIES: Facility[] = [
  {
    slug: "icu",
    name: "Intensive Care Unit (ICU)",
    short: "Multi-disciplinary critical care, 24×7.",
    icon: "🏥",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Our modern ICU is equipped with multi-para monitors, ventilators, defibrillators and infusion pumps, staffed round the clock by intensivists and critical-care trained nurses.",
    features: [
      "Ventilator & BiPAP support",
      "Central multi-para monitoring",
      "1:1 nursing for critical cases",
      "24×7 intensivist cover",
    ],
    contact: "Reach reception for ICU admissions and family updates.",
  },
  {
    slug: "ipd",
    name: "In-Patient Department (IPD)",
    short: "Comfortable, well-monitored ward and room facilities.",
    icon: "🛏️",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
    intro:
      "General, semi-special, special and deluxe rooms designed for patient comfort and family convenience, with attentive nursing and dietary support.",
    features: [
      "General, Semi-Special & Special rooms",
      "24×7 nursing care",
      "Dietician-planned meals",
      "Attendant-friendly rooms",
    ],
    contact: "Room bookings are confirmed at the time of admission.",
  },
  {
    slug: "emergency-opd",
    name: "Emergency OPD",
    short: "Walk-in emergency consultations, 24×7.",
    icon: "🚨",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Dedicated emergency OPD for immediate triage, first-aid, stabilisation and specialist call-outs — supported by in-house lab, pharmacy and CT scan.",
    features: [
      "24×7 emergency physicians",
      "Triage & first response",
      "Rapid diagnostics",
      "Direct ICU / OT escalation",
    ],
    contact: "Walk-in any time — no prior appointment required for emergencies.",
  },
  {
    slug: "emergency-admission",
    name: "Emergency Admission",
    short: "Streamlined, low-paperwork critical admissions.",
    icon: "🏥",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80",
    intro:
      "In emergencies, treatment begins first — paperwork is handled in parallel by our admissions team to save every possible minute for the patient.",
    features: [
      "Treatment-first policy",
      "Insurance / cashless assistance",
      "Family counselling support",
      "Dedicated admission desk",
    ],
    contact: "Call our emergency helpline or come directly to the emergency OPD.",
  },
  {
    slug: "pharmacy",
    name: "24×7 Pharmacy",
    short: "In-house pharmacy stocked with essential and emergency drugs.",
    icon: "💊",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80",
    intro:
      "A round-the-clock pharmacy ensures every prescription — routine or emergency — is available on the spot, with pharmacist counselling for safe medication use.",
    features: [
      "24×7 availability",
      "Emergency & life-saving drugs",
      "Pharmacist counselling",
      "Bill-linked dispensing",
    ],
    contact: "Located on the ground floor, next to the billing counter.",
  },
  {
    slug: "laboratory",
    name: "Diagnostic Laboratory",
    short: "Reliable pathology and biochemistry, 24×7.",
    icon: "🧪",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Fully equipped laboratory offering routine and specialised investigations with quick turnaround times — essential for both emergency and elective care.",
    features: [
      "Haematology & Biochemistry",
      "Microbiology & Serology",
      "Urgent / STAT reports",
      "Home sample collection (on request)",
    ],
    contact: "Report timings vary by test; STAT reports available in emergencies.",
  },
  {
    slug: "ct-scan",
    name: "CT Scan",
    short: "In-house CT imaging for rapid diagnosis.",
    icon: "🩻",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Our in-house CT scan supports fast decision-making for stroke, trauma, chest and abdominal emergencies — with radiologist reporting.",
    features: [
      "Plain & contrast CT",
      "CT Brain / Chest / Abdomen",
      "Trauma & stroke protocols",
      "Rapid radiologist reporting",
    ],
    contact:
      "For CT Scan appointments, please call reception or WhatsApp us to check availability.",
  },
  {
    slug: "ambulance",
    name: "24×7 Ambulance",
    short: "Basic and advanced life-support ambulance on call.",
    icon: "🚑",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Round-the-clock ambulance service with trained staff, oxygen and essential emergency equipment for safe pre-hospital transport.",
    features: [
      "24×7 availability",
      "Oxygen & emergency kit",
      "Trained ambulance staff",
      "Inter-hospital transfers",
    ],
    contact: "Ambulance requests: +91 77965 13130 / +91 77965 13100",
  },
];

export const DOCTORS = [
  {
    slug: "dr-pratap-somwanshi",
    name: "Dr. Pratap Somwanshi",
    role: "Managing Director & Head of Hospital",
    speciality: "Hospital Leadership",
    image: "/gravity/dr%20pratap%20somwanshi.jpeg",
    bio: "Managing Director of Gravity Hospital & Research Centre, leading a mission-driven team focused on accessible, high-quality, compassionate healthcare in PCMC, Pune.",
  },
  {
    slug: "dr-deepak-lokhande",
    name: "Dr. Deepak Lokhande",
    role: "Consultant",
    speciality: "General & Laparoscopic Surgery",
    image: "/gravity/dr.deepaklokhande.jpeg",
    bio: "Experienced general and laparoscopic surgeon, known for calm reassurance in emergency surgical cases including appendicitis and hernia repair.",
  },
  {
    slug: "dr-vijay-lokhande",
    name: "Dr. Vijay Lokhande",
    role: "Consultant",
    speciality: "Internal Medicine",
    image: "/gravity/dr.vijaylokhande.jpeg",
    bio: "Internal medicine specialist with a focus on diabetes, hypertension and complex adult medical care.",
  },
  {
    slug: "dr-mahesh-marne",
    name: "Dr. Mahesh Marne",
    role: "Consultant",
    speciality: "General Medicine",
    image: "/gravity/dr.%20mahesh%20marne.jpeg",
    bio: "Trusted physician for gastroenterology-related medical concerns and everyday adult medicine.",
  },
  {
    slug: "dr-shekhar-ralebhat",
    name: "Dr. Shekhar Ralebhat",
    role: "Consultant",
    speciality: "Orthopaedics",
    image: "/gravity/dr%20shekhar%20ralebhat.jpeg",
    bio: "Orthopaedic surgeon specialising in trauma, fractures and joint disorders.",
  },
  {
    slug: "dr-dilip-jangude",
    name: "Dr. Dilip Jangude",
    role: "Consultant",
    speciality: "Surgery",
    image: "/gravity/drdilipjangude.jpeg",
    bio: "Surgical consultant with expertise in general and emergency surgical procedures.",
  },
  {
    slug: "dr-subhash-nikam",
    name: "Dr. Subhash Nikam",
    role: "Consultant",
    speciality: "Medicine",
    image: "/gravity/drsubhashnikam.jpeg",
    bio: "Physician with a strong focus on chronic disease management and preventive care.",
  },
  {
    slug: "dr-vibhav-surve",
    name: "Dr. Vibhav Surve",
    role: "Surgery Support",
    speciality: "Surgical Team",
    image: "/gravity/drvibhavsurve.jpeg",
    bio: "Part of the surgical care team, supporting perioperative management and patient recovery.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Satish Mandlik",
    location: "Nigdi Pradhikaran",
    text: "My son Swaraj had appendicitis and needed emergency surgery. Dr. Deepak Lokhande and the Gravity team gave us confidence, clarity and family-like care — everything from treatment to billing was transparent.",
  },
  {
    name: "Tejashree Jadhav",
    location: "Pune",
    text: "My husband was admitted for kidney stone treatment. The doctors are highly experienced and handled everything with great expertise and genuine care for the patient.",
  },
  {
    name: "Bhalchandra Chavan",
    location: "Pune",
    text: "Grateful for the hospital's quick response and excellent care during my father's heart attack. The doctors and staff were professional, supportive and ensured his safety.",
  },
  {
    name: "PANDURANG HANKARE",
    location: "Local Guide",
    text: "My son was admitted at Gravity Hospital. The doctors were highly professional and explained everything clearly, which helped reduce our anxiety as parents.",
  },
  {
    name: "Manisha Darekar",
    location: "Ahilyanagar",
    text: "I travelled 150 km to Gravity Hospital for spinal cord injury treatment. From the moment we entered, the team guided and cared for us with real dedication.",
  },
  {
    name: "Gayatri Kharat",
    location: "Pune",
    text: "I visited Gravity for a food infection and gastro issue. The staff was very supportive, care was prompt, and Dr. Mahesh Marne and Dr. Abhishek Karmarkar were excellent.",
  },
  {
    name: "Sanket Thite",
    location: "Pune",
    text: "Good place for treatment, best nursing service and cleaning help. Food is served within 10 minutes. Dr. Bansode sir explained treatment well and billing was smooth.",
  },
  {
    name: "Almas Sayyed",
    location: "Local Guide",
    text: "Great services — I would definitely recommend Gravity for surgery or any ailment. Special thanks to Dr. Jangude and Dr. Amol Rathod; nurses and sisters are very helpful.",
  },
];

export const FAQS: { category: string; q: string; a: string }[] = [
  {
    category: "Services",
    q: "What specialities does Gravity Hospital offer?",
    a: "We offer General Medicine, Respiratory, General & Laparoscopic Surgery, Gynaecology & Obstetrics, Orthopaedics, Cardiology, Neurology, ENT, Ophthalmology, Dermatology, Nephrology and Urology, plus 24×7 emergency and critical care.",
  },
  {
    category: "Services",
    q: "Do you offer 24×7 emergency care?",
    a: "Yes. Our Emergency OPD, ICU, Pharmacy, Laboratory, CT Scan and Ambulance are available 24×7 with trained doctors and nurses on duty.",
  },
  {
    category: "OPD / IPD",
    q: "How do I book an OPD appointment?",
    a: "You can use our online Appointment Request form, WhatsApp us, or call +91 77965 13130. Walk-in OPD is also available during regular hours.",
  },
  {
    category: "OPD / IPD",
    q: "What is the IPD admission process?",
    a: "After consultation, our admission desk collects basic details, checks bed availability, explains the estimated cost, and helps with insurance/cashless paperwork. In emergencies, treatment starts first and paperwork follows.",
  },
  {
    category: "OPD / IPD",
    q: "Can family members stay with the patient?",
    a: "Yes. Semi-special, special and deluxe rooms are attendant-friendly. Visiting hours apply for general wards and ICU for patient safety.",
  },
  {
    category: "Billing",
    q: "Do you offer cashless / insurance facilities?",
    a: "We support most major TPAs and insurance companies for cashless treatment. Please share your insurance card at admission — our team will assist with pre-authorisation.",
  },
  {
    category: "Billing",
    q: "How transparent is the billing?",
    a: "Estimates are shared at admission and updated during the stay. Detailed itemised bills are provided at discharge and any queries are explained by our billing team.",
  },
  {
    category: "Ambulance",
    q: "How do I request an ambulance?",
    a: "Call +91 77965 13130 or +91 77965 13100 — our 24×7 ambulance with oxygen and emergency kit will be dispatched to your location.",
  },
  {
    category: "Ambulance",
    q: "Do you handle inter-hospital transfers?",
    a: "Yes. We can arrange safe inter-hospital transfers with trained staff and required equipment.",
  },
  {
    category: "CT Scan",
    q: "Do I need an appointment for a CT scan?",
    a: "For elective CT scans we recommend calling ahead. For emergencies, CT is available immediately, 24×7, as part of trauma and stroke protocols.",
  },
  {
    category: "CT Scan",
    q: "How soon do I get my CT report?",
    a: "Emergency CT reports are shared within a short turnaround; elective reports are usually available the same day.",
  },
];

export const DEPARTMENTS_FOR_FORM = SERVICES.map((s) => s.name).concat([
  "General Enquiry",
  "Health Check-up",
]);
