"use client";

export interface Speaker {
  id: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  reviewRequired?: boolean;
  reviewReason?: string;
}

export const speakers: Speaker[] = [
  {
    "id": "shamsul-izhan",
    "name": "Shamsul Izhan Bin Abdul Majid",
    "designation": "Head",
    "company": "National AI Office",
    "image": "/malaysia/images/speakers/shamsul-izhan.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "dato-amirudin",
    "name": "Dato' Ts. Dr. Haji Amirudin Bin Abdul Wahab",
    "designation": "Chief Executive Officer",
    "company": "CyberSecurity Malaysia",
    "image": "/malaysia/images/speakers/dato-amirudin.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "vicks-kanagasingam",
    "name": "Vicks Kanagasingam",
    "designation": "Advisor & Head of Data Governance Protem Committee",
    "company": "Ministry of Digital, Malaysia",
    "image": "/malaysia/images/speakers/vicks-kanagasingam.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "stephanie-liew",
    "name": "Stephanie Liew",
    "designation": "Chief Information Security Officer, APMEA",
    "company": "British American Tobacco (BAT)",
    "image": "/malaysia/images/speakers/stephanie-liew.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "budiman-bujang",
    "name": "Budiman Bujang",
    "designation": "Deputy Chief Digital Officer",
    "company": "Johor Corporation",
    "image": "/malaysia/images/speakers/budiman-bujang.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "christophe-vicic",
    "name": "Christophe Vicic",
    "designation": "Chief Growth Officer",
    "company": "JLL Malaysia",
    "image": "/malaysia/images/speakers/christophe-vicic.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "lee-li-foon",
    "name": "Lee Li Foon",
    "designation": "Chief Technology Officer",
    "company": "AHAM Capital Asset Management",
    "image": "/malaysia/images/speakers/lee-li-foon.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "aaron-kee",
    "name": "Aaron Kee",
    "designation": "Chief Business Officer",
    "company": "CARSOME Group",
    "image": "/malaysia/images/speakers/aaron-kee.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "braendan-yong",
    "name": "Braendan Yong Kong Choong",
    "designation": "Chief Technology Officer",
    "company": "Al Rajhi Bank",
    "image": "/malaysia/images/speakers/braendan-yong.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "sk-joo",
    "name": "SK Joo",
    "designation": "Chief Technology Officer",
    "company": "Senheng Electric (KL) Sdn. Bhd.",
    "image": "/malaysia/images/speakers/sk-joo.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "tze-phei-tee",
    "name": "Tze Phei Tee",
    "designation": "Group Chief Information Officer",
    "company": "Wasco Berhad",
    "image": "/malaysia/images/speakers/tze-phei-tee.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "g-saravanan",
    "name": "G Saravanan",
    "designation": "Chief Information Officer",
    "company": "National Cancer Society of Malaysia",
    "image": "/malaysia/images/speakers/g-saravanan.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "satpal-singh",
    "name": "Satpal Singh",
    "designation": "Chief Strategy & Sustainability Officer",
    "company": "PLUS Malaysia",
    "image": "/malaysia/images/speakers/satpal-singh.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "dr-keeratpal-singh",
    "name": "Dr. Keeratpal Singh",
    "designation": "Chief AI and Data Officer, Asia Pacific, Financial Services",
    "company": "Worldline",
    "image": "/malaysia/images/speakers/dr-keeratpal-singh.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "low-ngai-yuen",
    "name": "Low Ngai Yuen",
    "designation": "Managing Director",
    "company": "AEON360",
    "image": "/malaysia/images/speakers/low-ngai-yuen.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "aaron-ang",
    "name": "Aaron Ang",
    "designation": "Vice-President & Chief Technology Officer",
    "company": "DDAS",
    "image": "/malaysia/images/speakers/aaron-ang.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "prof-dr-toh-shang-yee",
    "name": "Prof. Dr. Toh Shang Yee",
    "designation": "CISO",
    "company": "MCIS Insurance Berhad",
    "image": "/malaysia/images/speakers/prof-dr-toh-shang-yee.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "suresh-sankaran-srinivasan",
    "name": "Suresh Sankaran Srinivasan",
    "designation": "Group Head - Cyber Security & Data Privacy",
    "company": "Axiata Group Berhad",
    "image": "/malaysia/images/speakers/suresh-sankaran-srinivasan.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "dr-chua-wen-shyan",
    "name": "Dr. Chua Wen-Shyan",
    "designation": "Head of Malaysian Smart Factory 4.0",
    "company": "SELANGOR HUMAN RESOURCE DEVELOPMENT CENTRE",
    "image": "/malaysia/images/speakers/dr-chua-wen-shyan.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "moh-hanapi-bisri",
    "name": "Mohd Hanapi Bisri",
    "designation": "Head of Group ICT",
    "company": "Petra Energy",
    "image": "/malaysia/images/speakers/moh-hanapi-bisri.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "sina-manavi",
    "name": "Sina Manavi",
    "designation": "Global Head of Cloud Security and Compliance",
    "company": "DHL IT Shared Service",
    "image": "/malaysia/images/speakers/sina-manavi.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "mohd-azil-noor-bin-salleh",
    "name": "Mohd Azil Noor Bin Salleh",
    "designation": "Head Data Architect & Analytics",
    "company": "SME DEVELOPMENT BANK BERHAD",
    "image": "/malaysia/images/speakers/mohd-azil-noor-bin-salleh.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "amit-mehta",
    "name": "Amit Mehta",
    "designation": "Head of Product - Customer Experience",
    "company": "Pos Malaysia",
    "image": "/malaysia/images/speakers/amit-mehta.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "ts-dr-rusnita-isnin-hamdan",
    "name": "Ts. Dr. Rusnita Isnin Hamdan",
    "designation": "Principal Assistant Director",
    "company": "Jabatan Digital Negara",
    "image": "/malaysia/images/speakers/ts-dr-rusnita-isnin-hamdan.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "noorzita-mohamad-nor",
    "name": "Noorzita Mohamad Nor",
    "designation": "Director, Business Services & Regional Operations Division",
    "company": "MIDA",
    "image": "/malaysia/images/speakers/noorzita-mohamad-nor.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "rohit-churi",
    "name": "Rohit Churi",
    "designation": "Director Regional Head of Platforms",
    "company": "CIMB",
    "image": "/malaysia/images/speakers/placeholder.png",
    "reviewRequired": true,
    "reviewReason": "No matching image file found for 'Rohit Churi'."
  },
  {
    "id": "md-abdul-mukaddem",
    "name": "Md Abdul Mukaddem",
    "designation": "Director, Digital Commercial & AI",
    "company": "Coca-Cola Singapore, Malaysia & Brunei",
    "image": "/malaysia/images/speakers/md-abdul-mukaddem.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "ahsan-mehmood",
    "name": "Ahsan Mehmood",
    "designation": "Head of Data Management, APAC",
    "company": "Quantexa",
    "image": "/malaysia/images/speakers/ahsan-mehmood.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "raffaello-sanzio-rodiman",
    "name": "Raffaello Sanzio Rodiman",
    "designation": "Head of Data Management & Application Development",
    "company": "Orsted",
    "image": "/malaysia/images/speakers/raffaello-sanzio-rodiman.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "frank-kang",
    "name": "Frank Kang",
    "designation": "Country Head - Malaysia",
    "company": "Antler",
    "image": "/malaysia/images/speakers/frank-kang.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "weisheng-neo",
    "name": "Weisheng Neo",
    "designation": "General Partner",
    "company": "Qualgro",
    "image": "/malaysia/images/speakers/weisheng-neo.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "andre-sequerah",
    "name": "Andre Sequerah",
    "designation": "Managing Partner",
    "company": "ScaleUp Malaysia",
    "image": "/malaysia/images/speakers/andre-sequerah.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "farah-wahidah-ab-rafik",
    "name": "Farah Wahidah Ab Rafik",
    "designation": "Head of Investment Unit",
    "company": "Cradle Seed Ventures",
    "image": "/malaysia/images/speakers/farah-wahidah-ab-rafik.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "shi-ying-lau",
    "name": "Shi Ying Lau",
    "designation": "Managing Partner",
    "company": "Adaptive Capital Partners",
    "image": "/malaysia/images/speakers/shi-ying-lau.webp",
    "reviewRequired": false,
    "reviewReason": ""
  },
  {
    "id": "asif-muhammad-iqbal",
    "name": "Asif Muhammad Iqbal",
    "designation": "Independent Data and AI Advisor",
    "company": "Malaysia",
    "image": "/malaysia/images/speakers/placeholder.png",
    "reviewRequired": true,
    "reviewReason": "No matching image file found for 'Asif Muhammad Iqbal'."
  },
  {
    "id": "adrian-chew",
    "name": "Adrian Chew",
    "designation": "Partner and Malaysia AI, Data and Technology Consulting Leader",
    "company": "EY",
    "image": "/malaysia/images/speakers/placeholder.png",
    "reviewRequired": true,
    "reviewReason": "No matching image file found for 'Adrian Chew'."
  },


];
