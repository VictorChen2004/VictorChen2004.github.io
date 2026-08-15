import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://victorchen2004.github.io";

export const metadata: Metadata = {
  title: {
    absolute: "Victor Xucheng Chen | Economics Researcher at CUHK-Shenzhen",
  },
  description:
    "The academic website of Victor Xucheng Chen, also known as Victor Chen and Xucheng Chen, an economics student and researcher at CUHK-Shenzhen working across applied microeconomics, macroeconomics, labor, education, gender, development, and finance.",
};

type ResearchProject = {
  category: "Working paper" | "Work in progress" | "Selected writing";
  year: string;
  title: string;
  role: string;
  collaborators?: string;
  location: string;
  note?: string;
  highlight: string;
  details: string[];
  href?: string;
  linkLabel?: string;
};

const researchProjects: ResearchProject[] = [
  {
    category: "Working paper",
    year: "Dec 2025–present",
    title:
      "Factory Parents, Classroom Outcomes: Occupational Networks and Peer Effects in Education",
    role: "Working Paper · Independent Research",
    collaborators: "Advisor: Prof. Emily Zheng, CUHK-Shenzhen",
    location: "Shenzhen, China",
    note:
      "Accepted by the 2nd Chinese Educational Year Seminar\nSupported by the 29th & 30th URA\nCuriosity Research Award",
    highlight:
      "Using random classroom assignment, the study finds that a ten-percentage-point increase in peers from production-worker families reduces standardized academic scores by approximately 0.21 standard deviations.",
    details: [
      "We study how exposure to classmates from manufacturing and production-worker families affects academic achievement in urban Chinese middle schools. Using the random assignment of students to classrooms within school-grade cohorts in the China Education Panel Survey (CEPS), we find that a ten-percentage-point increase in the share of peers with production-worker parents reduces standardized academic scores by approximately 0.21 standard deviations.",
      "The effect is robust across specifications and appears in mathematics, Chinese, and English. Parent questionnaire data show declines in engagement with children’s friendship networks, inter-family connections, peer-relationship communication, school discussion, confidence in children’s academic futures, and parent-initiated teacher contact.",
      "Parents in classrooms with more working-class families also report lower evaluations of the educational environment. Falsification tests using business and service-sector workers yield null effects, pointing to the role of occupationally shaped social-capital networks in educational inequality.",
    ],
  },
  {
    category: "Working paper",
    year: "May 2025–present",
    title: "The Macroeconomic Impact of SME Lending",
    role: "Working Paper · Undergraduate Author",
    collaborators: "With Prof. Shaoshuang Yang, CUHK-Shenzhen",
    location: "Shenzhen, China",
    highlight:
      "A 4.27-million-observation merchant–month panel reveals how credit constraints, firm size, and entrepreneurial risk preferences jointly shape SME growth and volatility.",
    details: [
      "Co-authored an empirical paper using a 4.27-million-observation merchant–month panel to study how SME credit lines, entrepreneurial risk preferences, and firm size jointly shape sales growth on a large digital-payment platform.",
      "Constructed a linked merchant-level dataset from internal credit, transaction, wealth, and loan tables covering approximately 100,000 merchants; engineered credit limits, utilization ratios, liquidity-constraint indicators, growth measures, and volatility statistics.",
      "Designed and implemented the Stata empirical strategy, including AR(1) persistence tests, fixed-effects growth regressions with province and year fixed effects, and interactions among risk preference, firm size, and credit conditions.",
      "Built event-style measures of downturn and quasi-exit, including a 90% sales drop and three-month low-activity spells, and documented how risk tolerance and credit constraints relate to both faster growth and higher volatility among larger SMEs.",
    ],
    href: "https://drive.google.com/file/d/10iCuUzlnKLX-rwIK2E_3p3-wIJR4wDCJ/view",
    linkLabel: "Paper · 26 Nov 2025",
  },
  {
    category: "Working paper",
    year: "May 2025–present",
    title: "Retail Money Flows and Stock Returns in China",
    role: "Working Paper · Undergraduate Author",
    collaborators: "With Prof. Chuan Shi, CUHK-Shenzhen",
    location: "Shenzhen, China",
    highlight:
      "Chinese high-frequency data show robust stock-return predictability from small-order net inflows, including significant alpha after controlling for salient behavioral pricing factors.",
    details: [
      "Contributed to a quantitative asset-pricing paper on the predictive power of small-order net inflows using Chinese tick-by-tick transaction data from 2018–2024; constructed flow indicators and calibrated trade-direction and size-threshold definitions.",
      "Conducted Fama–MacBeth regressions across multiple size thresholds and net-flow estimation methods, and implemented univariate and double portfolio sorts to test representative strategies.",
      "Performed orthogonalization to control for confounding effects and examined interactions between small-order signals and behavioral pricing factors such as salience, documenting significant alpha in double-sorted portfolios.",
      "Independently wrote core methodology, data-construction, and empirical-results sections and developed the analytical code in Python and R for factor modeling, signal engineering, and high-frequency data cleaning.",
    ],
    href: "https://drive.google.com/file/d/1b4wtSL_Q2i9IbBTDoFE8WYkNQaI-QWYy/view",
    linkLabel: "Paper · 26 Nov 2025",
  },
  {
    category: "Working paper",
    year: "Jun–Aug 2025",
    title:
      "Beyond Patents: R&D, Capital, and the Productivity Puzzle in Early-Stage High-Tech Firms",
    role: "Working Paper · Undergraduate Independent Research",
    collaborators: "Advisor: Prof. Myungun Kim, University of Cambridge",
    location: "Cambridge, United Kingdom (Remote)",
    note: "Best Paper · Cambridge Online Summer Research Programme 2025",
    highlight:
      "The study separates the signaling value of patents from the performance effects of R&D spending in early-stage Chinese high-tech firms.",
    details: [
      "Conducted an independent empirical study of innovation and productivity in Chinese high-tech startups using a proprietary 2020–2024 dataset of patent records, R&D expenditures, and firm-performance indicators.",
      "Used quantitative analysis and mechanism-based reasoning to examine the signaling role of patents and the performance impact of R&D investment, identifying heterogeneity across industries and regions.",
      "Received the programme’s Best Paper award and presented the findings at its academic research conference.",
    ],
    href: "https://ssrn.com/abstract=5365829",
    linkLabel: "SSRN preprint · 11 Aug 2025",
  },
  {
    category: "Work in progress",
    year: "Sep 2026–present",
    title: "Mobile Internet and Crime: Evidence from China’s 4G Rollout",
    role: "Working Paper · Undergraduate Author",
    collaborators: "With Dr. Chenxuan Chen, Peking University",
    location: "Shenzhen, China",
    highlight:
      "The project links China’s staggered 4G rollout to criminal-conviction records to study how mobile internet access changes local crime.",
    details: [
      "Exploit the staggered rollout of 4G base stations across Chinese cities and counties in a difference-in-differences framework to identify the causal effect of mobile internet access on local crime rates.",
      "Construct a panel dataset linking 4G infrastructure deployment records with criminal-conviction data from PKU LawSec (北大法宝), a comprehensive repository of Chinese court judgments.",
      "Document heterogeneous effects across property crimes, violent offenses, and cyber-related criminal activity, alongside the overall relationship between expanded 4G coverage and local crime rates.",
      "Investigate mechanisms including information diffusion, lower coordination costs among criminal networks, and the reallocation of economic opportunity.",
    ],
  },
  {
    category: "Selected writing",
    year: "Sep–Dec 2025",
    title:
      "A Bayesian Game of Online Accusations",
    role: "ECON3160 Game Theory Course Project",
    collaborators: "Advisor: Prof. Yangbo Song, CUHK-Shenzhen",
    location: "Shenzhen, China",
    highlight:
      "The model shows how platform amplification and weak reputational penalties can sustain digital witch-hunt equilibria even when guilt is highly uncertain.",
    details: [
      "Developed a Bayesian game in which a Key Opinion Leader with noisy private information decides whether to accuse a target, while a continuum of users who observe only the accusation choose whether to join a collective attack or exercise restraint.",
      "Characterized Perfect Bayesian Equilibria under pooling and separating accusation strategies, identifying conditions under which platform amplification and weak reputational penalties generate self-reinforcing digital witch-hunt equilibria despite substantial uncertainty about guilt.",
      "Extended the model to competing KOLs with independent signals and pile-on complementarities, as well as dynamic reputational penalties that accumulate over time, showing how corroboration, attention competition, and forward-looking discipline reshape accusation standards and crowd behavior.",
    ],
  },
  {
    category: "Selected writing",
    year: "Sep–Dec 2025",
    title:
      "When Structure Beats Flexibility: A Comparative Study of Forecasting in Bitcoin Markets",
    role: "Undergraduate Independent Research",
    collaborators: "Advisor: Prof. Haichun Ye, CUHK-Shenzhen",
    location: "Shenzhen, China",
    highlight:
      "In a controlled 500-day out-of-sample comparison, TGARCH’s advantage over LSTM is concentrated in volatility forecasting rather than return prediction.",
    details: [
      "Compared AR(1)–GARCH and TGARCH econometric models with LSTM neural networks for forecasting Bitcoin returns and volatility using daily 2015–2025 data in EViews and Python.",
      "Established key cryptocurrency-market stylized facts and implemented an ARMA–(T)GARCH selection and diagnostic pipeline using ADF tests, ARCH–LM tests, BIC-based selection, and post-estimation Q-statistics.",
      "Designed a transparent 500-day out-of-sample framework with identical information sets across models, showing that TGARCH’s predictive edge arises from explicitly structured conditional-variance dynamics, with the largest gains in volatility forecasting.",
    ],
  },
  {
    category: "Selected writing",
    year: "Sep 2024–Mar 2025",
    title:
      "Sexual Minorities’ Perspectives on Feminism: A Dialogue Between Gender and Sexuality",
    role: "Undergraduate Independent Research",
    collaborators: "Advisor: Prof. Shirley Xiao, CUHK-Shenzhen",
    location: "Shenzhen, China",
    note: "Accepted by the CUHK-Shenzhen Undergraduate Research Conference 2024",
    highlight:
      "Interviews and intersectionality-based analysis examine how overlapping gender and sexual identities shape coalition-building and social preferences.",
    details: [
      "Investigated how overlapping identities shape group alignment and social preferences through semi-structured interviews and inductive thematic coding.",
      "Analyzed structural and normative constraints on identity-based coalition-building using intersectionality theory and comparative case analysis.",
      "Derived implications for preference formation, collective-action dynamics, and the design of more inclusive social policies.",
    ],
    href: "https://drive.google.com/file/d/1k3uX-1eUMcWRaJUmmeTaLarc_7PFkzBc/view",
    linkLabel: "Read paper",
  },
  {
    category: "Selected writing",
    year: "Sep 2024",
    title:
      "Research on Production Process Decision-making Based on Defect Rate Optimization",
    role: "Undergraduate Author",
    location: "Shenzhen, China",
    note:
      "Second Prize · Guangdong Contemporary Undergraduate Mathematical Contest in Modeling",
    highlight:
      "A production-chain optimization model combines one-sided sampling tests, genetic algorithms, and Monte Carlo simulation to balance quality assurance with cost.",
    details: [
      "Developed a sampling-inspection model using one-sided hypothesis testing and statistical distributions, minimizing inspections while ensuring quality.",
      "Built a cost–revenue optimization model for the full production chain in Python, incorporating enumeration and genetic algorithms for decision-making.",
      "Applied Monte Carlo simulations to estimate defect rates under uncertainty and adjusted strategies accordingly.",
      "Produced visualized outputs and evaluated trade-offs between precision and computational cost.",
    ],
  },
];

const researchGroups = [
  {
    title: "Working Papers",
    tone: "terracotta",
    projects: researchProjects.filter(
      (project) => project.category === "Working paper",
    ),
  },
  {
    title: "Work in Progress",
    tone: "sienna",
    projects: researchProjects.filter(
      (project) => project.category === "Work in progress",
    ),
  },
  {
    title: "Selected Writing",
    tone: "rosewood",
    projects: researchProjects.filter(
      (project) => project.category === "Selected writing",
    ),
  },
];

const researchAssistantExperience = [
  {
    dates: "May 2026–present",
    title: "Speech Recognition and Treatment-Compliance Analysis in Congo",
    role: "Research Assistant",
    organization:
      "Supervised by Prof. Clotaire Weigel, University of California, Berkeley",
    location: "Berkeley, United States",
    highlight:
      "Built an end-to-end speech-processing workflow for long, low-resource field-sermon recordings and prepared treatment-compliance coding for downstream analysis.",
    details: [
      "Developed a workflow covering long-recording chunking, automatic speech recognition, language detection, and preparation for treatment-compliance analysis.",
      "Tested Whisper and Meta MMS for French and Tshiluba-related audio; evaluated a Luganda proxy when direct Tshiluba support was unavailable and documented model uncertainty and limitations.",
      "Translated administrative, collective, and individual treatment messages into coding dimensions covering tax communication, justice and poverty, prosperity, and individual responsibility.",
    ],
  },
  {
    dates: "Jul–Sep 2025",
    title: "Technology-Driven Market Concentration through Idea Allocation",
    role: "Research Assistant",
    organization:
      "Supervised by Prof. Shaoshuang Yang, CUHK-Shenzhen, and Prof. Yueyuan Ma, University of California, Santa Barbara",
    location: "Shenzhen, China",
    highlight:
      "Converted patent-citation and market-concentration methods from the literature into reproducible Stata and graph-analysis workflows.",
    details: [
      "Helped construct Herfindahl–Hirschman Index measures of market concentration and translated established algorithms from the literature into reproducible Stata code.",
      "Processed USPTO patent data to calculate backward- and forward-citation indices and reviewed patent documents, citation records, and related literature to characterize novelty and idea quality.",
      "Built a citation graph linking citing and cited patents, implemented graph-based centralization and decentralization measures, proposed algorithmic refinements, and documented the empirical workflow.",
    ],
  },
  {
    dates: "Jun–Aug 2025",
    title:
      "Collaborative Growth and Global Win-Win: An Overview of China’s Key Industry Clusters Going Global",
    role: "Research Assistant · Report Author",
    organization:
      "Supervised by Prof. Jian Wang and Prof. Jieshuang He, CUHK-Shenzhen · Center for China’s Economic and Outbound Strategy, Shenzhen Finance Institute",
    location: "Shenzhen, China",
    highlight:
      "Synthesized more than 300 reports and cases into a strategic account of how China’s pan-cultural industry cluster expands globally.",
    details: [
      "Co-authored a comprehensive report on outbound-expansion strategies in China’s pan-cultural industry cluster, identifying success patterns, structural challenges, and policy recommendations from more than 300 reports and case studies.",
      "Compared the global expansion paths of Chinese and foreign firms across upstream, midstream, and downstream sectors; produced economic visualizations and integrated cross-industry findings into a unified narrative.",
      "Worked with the Global Relations Project Team from Southern California to place the findings in a broader international context.",
    ],
  },
  {
    dates: "Aug 2024–Mar 2025",
    title:
      "The Obstacles Faced by Female Entrepreneurs When Attempting to Recruit Talent",
    role: "Research Assistant",
    organization: "Supervised by Prof. Zhongchen Hu, CUHK-Shenzhen",
    location: "Shenzhen, China",
    highlight:
      "Supported a LinkedIn field experiment comparing employer responses to otherwise identical firms that differed only in the founder’s gender.",
    details: [
      "Reviewed the literature on recruitment barriers and the internalization of discrimination in hiring processes.",
      "Conducted and operated online field experiments through LinkedIn and maintained platform profiles to protect the validity and integrity of the design.",
      "Collected employer-response data for firms identical in their basic characteristics except for the founder’s gender, enabling measurement of women’s employment conditions in the relevant industry.",
    ],
  },
];

type Material = {
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

const materialSections: { title: string; items: Material[] }[] = [
  {
    title: "Paper Presentations",
    items: [
      {
        label: "Chinese Economy · September 2025",
        title: "Presentation for Chinese Economy Course",
        description:
          "In this presentation, we studied Getting Ahead in the Communist Party: Explaining the Advancement of Central Committee Members in China (2012), written by Victor Shih and co-authors. We followed the paper from its introduction and motivation through its conclusion, while also discussing possible updates and related trends in contemporary China.",
        image: "/materials/chinese-economy.png",
        imageAlt:
          "Cover slide for a presentation on Getting Ahead in the Communist Party",
        href: "https://drive.google.com/file/d/1u9da43kVG5i8SrbUvir92hv4Q1Ntb24e/view",
      },
      {
        label: "AI Paper Study Panel · 2024",
        title: "Presentation for AI Paper Study Panel",
        description:
          "I presented AI Can Help People Feel Heard, but an AI Label Diminishes This Impact, by Yidan Yin, Nan Jia, and Cheryl J. Wakslak. I particularly enjoyed this paper: it offers a thoughtful perspective on the relationship between AI and human beings and develops a clever way to quantify that relationship. Its conclusion has continued to resonate with me in daily life.",
        image: "/materials/ai-paper-study.png",
        imageAlt:
          "Cover slide for a presentation on AI labels and perceived understanding",
        href: "https://drive.google.com/file/d/17V3ixmgMdEnShVKJaiIHxeD6KrX13tMZ/view",
      },
      {
        label: "Econometrics & Instrumental Variables · December 2024",
        title: "Presentation for Econometrics and IV Course",
        description:
          "I presented The Colonial Origins of Comparative Development: An Empirical Investigation, by Daron Acemoglu, Simon Johnson, and James A. Robinson. I was especially impressed by the paper’s instrumental-variable design and explained its intuition and basic logic to develop a clearer understanding of how an IV should be chosen.",
        image: "/materials/colonial-origins.png",
        imageAlt:
          "Cover slide for a presentation on the colonial origins of comparative development",
        href: "https://drive.google.com/file/d/19fJ8uhVBgF9Uwo_Z2ORYQtc0ZciDEdZF/view",
      },
    ],
  },
  {
    title: "Materials I Compiled and Used to Teach",
    items: [
      {
        label: "ECON3121 · Midterm Review · Spring 2025",
        title: "Midterm Review for Introductory Econometrics",
        description:
          "These are the materials I compiled and used to teach the midterm review session for ECON3121. The slides consolidate the central concepts, equations, and empirical intuition students needed for the first half of the course.",
        image: "/materials/econometrics-midterm.png",
        imageAlt: "Cover slide for the ECON3121 midterm review",
        href: "https://drive.google.com/file/d/1_1_FkNhwZai4Nu22oMPqKo0Mff7r8pyC/view",
      },
      {
        label: "ECON3121 · Final Review · Spring 2025",
        title: "Final Review for Introductory Econometrics",
        description:
          "I also compiled and taught the final review in the same semester. This companion deck brings together the later course topics and provides a structured route through the material before the final examination.",
        image: "/materials/econometrics-final.png",
        imageAlt: "Cover slide for the ECON3121 final review",
        href: "https://drive.google.com/file/d/1NCFK4npkOHnfPF6ukA1ZnRKrnfTUiv2n/view",
      },
    ],
  },
];

const experienceGroups = [
  {
    title: "Teaching & Mentorship",
    intro:
      "Teaching is where I turn technical material into explanations, exercises, and conversations that other students can genuinely use.",
    items: [
      {
        dates: "Sep 2024–present",
        title: "Teaching Assistant",
        role: "Microeconomics · Financial Management · Econometrics",
        organization:
          "School of Management and Economics, CUHK-Shenzhen",
        materialNote:
          "Selected Econometrics review materials are available in the Materials section. Other teaching materials can be shared upon request.",
        courses: [
          {
            name: "Microeconomics",
            action: "Available upon request",
            href: "mailto:xuchengchen@link.cuhk.edu.cn?subject=Microeconomics%20teaching%20materials%20request",
          },
          {
            name: "Financial Management",
            action: "Available upon request",
            href: "mailto:xuchengchen@link.cuhk.edu.cn?subject=Financial%20Management%20teaching%20materials%20request",
          },
          {
            name: "Econometrics",
            action: "See materials below",
            href: "#materials",
          },
        ],
        details: [
          "Held 110+ office hours, answered 600+ student questions, and graded 300+ assignments.",
          "Led 40+ tutorials supported by more than 700 pages of LaTeX slides; taught data analysis in Excel and helped compile Econometrics lecture materials throughout the semester.",
          "Produced supplementary financial-concept video lectures that reached more than 3,000 viewers nationwide.",
          "Led weekly Microeconomics tutorials for as many as 85 students and was recognized by peers as a popular and effective Undergraduate Student Teaching Fellow.",
        ],
      },
      {
        dates: "Jan 2025–Feb 2026",
        title: "Academic Mentor & Student Lecturer",
        role:
          "SME Academic Advisory Programme · 2026 Winter Camp for High School Students",
        organization:
          "School of Management and Economics, CUHK-Shenzhen",
        details: [
          "Served in the mentor group for 100+ first-year students and contributed to establishing a new advisory programme for Economics majors.",
          "Held Academic Advisory meetings on exchange applications, academic writing, and course selection.",
          "Provided one-to-one guidance, collected student feedback on course design, and helped support the establishment of two new courses.",
        ],
      },
    ],
  },
  {
    title: "Academic Leadership & Communication",
    intro:
      "Beyond the classroom, I organize academic communities and translate economic research for wider student audiences.",
    items: [
      {
        dates: "Mar 2024–present",
        title: "Vice President & Head of Academic Department",
        role: "CUHK-Shenzhen Economics Club",
        organization: "School of Management and Economics",
        details: [
          "Organized large-scale Microeconomics and Econometrics review sessions across three semesters, including an English-language Microeconomics lecture attended by 400+ local and international students.",
          "Designed and delivered 120+ LaTeX slides for an Econometrics session, supplementing core materials and introducing foundational Stata commands.",
          "Coordinated more than 10 paper-reading seminars and presented analytical commentary on influential research, including Angrist’s 1996 instrumental-variables paper.",
        ],
      },
      {
        dates: "Sep 2023–present",
        title: "Editor & Student Reporter",
        role: "CUHK-Shenzhen SME News",
        organization: "School of Management and Economics",
        details: [
          "Reported on Open Day forums, faculty interviews, alumni profiles, and other key SME events from an economic perspective.",
          "Coordinated with professors and academic departments to present research and teaching philosophies accurately and accessibly.",
          "Interviewed scholars working in behavioral and development economics and translated their academic ideas into engaging stories for student readers.",
        ],
      },
    ],
  },
  {
    title: "Debate & Campus Leadership",
    intro:
      "Debate and student leadership have trained me to communicate under pressure, listen across perspectives, and take responsibility for a community.",
    items: [
      {
        dates: "Oct 2023–present",
        title: "Selected Member",
        role: "CUHK-Shenzhen English Debate Team",
        organization: "British Parliamentary Debate",
        details: [
          "Represented CUHK-Shenzhen in intercollegiate BP-format tournaments on public policy, political economy, and business issues.",
          "Reached the semifinal of the 2023 Novice Debate Challenge and was selected as an official team member; placed first in group at the 2024 Macau Debate Open.",
          "At the 2025 Greater Bay Area Novice Championship, reached the semifinal, placed first in group, and received 4th Best Speaker in the Open Group.",
          "Placed first in group at the 2025 Guangdong Debate Challenge on motions involving company structure, startups and SMEs, monetary policy, and tariffs.",
        ],
      },
      {
        dates: "Aug 2023 & Aug 2025",
        title: "Student Representative, Mentor & Class Leader",
        role: "English Pre-sessional Course",
        organization: "Office of Student Affairs, CUHK-Shenzhen",
        details: [
          "Selected through competitive English assessments as the official student representative in both 2023 and 2025.",
          "Delivered English keynote speeches to more than 600 participants in 2023 and 800 in 2025, with coverage in official university media.",
          "Led a cohort of 30 first-year students through academic and campus orientation and served as a bilingual liaison among students, instructors, and administrators.",
        ],
      },
      {
        dates: "Sep 2023–present",
        title: "First Lesson Host & Committee Member",
        role: "Ling College, CUHK-Shenzhen",
        organization: "Residential College Community",
        details: [
          "Hosted the college-wide First Lesson and welcomed the residential community at the beginning of the academic year.",
          "Organize student events and peer-support initiatives, including the Studying for 21 Days programme designed to encourage perseverance and durable study habits.",
        ],
      },
    ],
  },
];

const honors = [
  {
    year: "2026",
    title: "30th Undergraduate Research Award",
    detail: "CUHK-Shenzhen",
  },
  {
    year: "2025",
    title: "National Scholarship",
    detail: "Highest national honor for undergraduates in China",
  },
  {
    year: "2025",
    title: "University Honors",
    detail: "Excellent Student Award",
  },
  {
    year: "2025",
    title: "29th Undergraduate Research Award",
    detail: "CUHK-Shenzhen",
  },
  {
    year: "2025",
    title: "Curiosity Research Award",
    detail: "CUHK-Shenzhen",
  },
  {
    year: "2025",
    title: "Best Paper",
    detail: "Cambridge Online Summer Research Programme",
  },
  {
    year: "2025",
    title: "4th Best Speaker & Semifinalist",
    detail: "Greater Bay Area Novice Championship · Open Group",
  },
  {
    year: "2025",
    title: "Ling College Volunteer Award",
    detail: "Ling College Scholarships Award",
  },
  {
    year: "2025",
    title: "Annual Hot Search Award",
    detail: "SME News",
  },
  {
    year: "2025",
    title: "Person of the Year",
    detail: "Profiled by Lakeside Magazine",
  },
  {
    year: "2024",
    title: "Second Prize",
    detail: "Guangdong Contemporary Undergraduate Mathematical Contest in Modeling",
  },
  {
    year: "Ongoing",
    title: "SME Academic Performance Scholarship",
    detail: "Every academic year · Top 2% in SME",
  },
  {
    year: "Ongoing",
    title: "Dean’s List",
    detail: "Every academic year",
  },
  {
    year: "2023–2026",
    title: "Ling Inspirational & Bowen II Scholarships",
    detail: "Multi-year scholarship support",
  },
];

const personSchema = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Victor Xucheng Chen",
  alternateName: ["Victor Chen", "Xucheng Chen", "Chen Xucheng", "陈绪成"],
  url: SITE_URL,
  mainEntityOfPage: { "@id": `${SITE_URL}/#profile` },
  image: `${SITE_URL}/xucheng-chen.jpg`,
  email: "mailto:xuchengchen@link.cuhk.edu.cn",
  jobTitle: "Economics Researcher and Student",
  description:
    "Victor Xucheng Chen, also known as Victor Chen and Xucheng Chen, is an Economics Science student and undergraduate researcher at CUHK-Shenzhen.",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "The Chinese University of Hong Kong, Shenzhen",
    alternateName: "CUHK-Shenzhen",
    url: "https://www.cuhk.edu.cn/en",
  },
  knowsAbout: [
    "Applied Microeconomics",
    "Applied Macroeconomics",
    "Labor Economics",
    "Development Economics",
    "Gender Economics",
    "Economics of Education",
    "Financial Economics",
  ],
  award: honors.map((honor) => `${honor.title} (${honor.year})`),
  sameAs: [
    "https://github.com/VictorChen2004",
    "https://sites.google.com/view/xuchengchen/",
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Victor Xucheng Chen",
      alternateName: ["Victor Chen", "Xucheng Chen"],
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: "Victor Xucheng Chen — Academic Profile",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
    personSchema,
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Victor Xucheng Chen — home">
          <span className="wordmark-mark" aria-hidden="true">VC</span>
          <span>Victor Xucheng Chen</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#experience">Experience</a>
          <a href="#materials">Materials</a>
        </nav>
        <a
          className="header-contact"
          href="mailto:xuchengchen@link.cuhk.edu.cn"
        >
          Contact
        </a>
      </header>

      <main id="top">
        <section className="about-hero" id="about" aria-labelledby="hero-title">
          <div className="about-hero-inner">
            <aside className="about-profile" aria-label="Academic profile summary">
              <div className="profile-portrait">
                <Image
                  className="profile-photo"
                  src="/xucheng-chen.jpg"
                  alt="Portrait of Victor Xucheng Chen"
                  width="1200"
                  height="1600"
                  sizes="(max-width: 620px) 90vw, (max-width: 900px) 42vw, 34vw"
                  priority
                />
                <p className="profile-name">Victor Xucheng Chen</p>
              </div>
              <div className="profile-summary">
                <p className="profile-label">Economics Science</p>
                <p>
                  School of Management and Economics<br />
                  The Chinese University of Hong Kong, Shenzhen
                </p>
                <p className="profile-invitation">
                  If you have any questions about my work or suggestions for my
                  development, I would be delighted to hear from you. You can
                  reach me via email at:{" "}
                  <a className="profile-email" href="mailto:xuchengchen@link.cuhk.edu.cn">
                    <strong>xuchengchen@link.cuhk.edu.cn</strong>
                  </a>
                  .
                </p>
                <div className="profile-actions">
                  <a className="button button-primary" href="#research">
                    Explore research
                  </a>
                  <span className="cv-action">
                    <a
                      className="button button-secondary"
                      href="/cv/xucheng-chen-cv-july-2026.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View CV <span aria-hidden="true">↗</span>
                    </a>
                    <span className="cv-version">Updated July 2026</span>
                  </span>
                </div>
              </div>
            </aside>

            <div className="about-narrative">
              <p className="about-kicker">
                About
              </p>
              <h1 id="hero-title">Nice to meet you here!</h1>
              <p className="about-intro">
                Hi, everyone! My name is <strong>Victor Xucheng Chen</strong>,
                also known as <strong>Victor Chen</strong> ({" "}
                <span lang="zh-Hans">陈绪成</span> in Chinese). I am currently
                studying <strong>Economics Science</strong> at the School of
                Management and Economics, The Chinese University of Hong Kong,
                Shenzhen.
              </p>
              <div className="about-body">
                <p>
                  My long-term aspiration is to enter academia and contribute to
                  the field of economics. This website, launched on{" "}
                  <strong>November 26, 2025</strong>, serves as an ongoing record
                  of my research journey, academic experiences, and materials
                  that I find meaningful or inspiring. I hope that documenting
                  my own development will help me reflect, grow, and better
                  understand how my interests evolve over time.
                </p>
                <p>
                  The content on this website aims to remain as accurate as
                  possible after proper verification. All copyrights belong to
                  their original owners. If any material inadvertently infringes
                  on the rights of others, please contact me immediately, and I
                  will make corrections without delay.
                </p>
                <p>
                  My research interests currently lie in{" "}
                  <strong>applied microeconomics</strong> and{" "}
                  <strong>applied macroeconomics</strong>, with particular
                  curiosity toward <strong>labor economics</strong>,{" "}
                  <strong>development economics</strong>,{" "}
                  <strong>gender economics</strong>,{" "}
                  <strong>educational economics</strong>, and{" "}
                  <strong>financial economics</strong>. However, I keep an open
                  mind — I do not rule out the possibility of pursuing other
                  topics, and I am still actively exploring where my long-term
                  intellectual home will be.
                </p>
                <p>
                  On a more personal note, I identify as a feminist and an
                  existentialist, believing firmly in human rights, individual
                  dignity, and freedom from oppression. Outside of academics, I
                  enjoy English debate, and I love music — especially Charli XCX
                  and Lexie Liu, two artists who have shaped my perspective on
                  creativity, identity, and self-expression.
                </p>
                <p>
                  Finally, every scholar, mentor, and collaborator mentioned on
                  this website is someone I deeply respect and admire. I am
                  sincerely grateful for their guidance and encouragement along
                  my journey. I would also like to express my heartfelt
                  appreciation to my parents, family, and friends for their
                  constant support and care — none of this would be possible
                  without them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="research-interests" aria-labelledby="research-interests-title">
          <div className="research-interests-inner">
            <h2 id="research-interests-title">Research interests</h2>
            <ul>
              <li>Applied Microeconomics</li>
              <li>Applied Macroeconomics</li>
              <li>Labor Economics</li>
              <li>Development Economics</li>
              <li>Gender Economics</li>
              <li>Educational Economics</li>
              <li>Financial Economics</li>
            </ul>
          </div>
        </section>

        <section className="research-section" id="research">
          <div className="research-section-inner">
            <header className="research-heading">
              <h2>Research</h2>
              <p>
                This section records my research projects and papers. Click a
                category to view each project, including my work and
                contributions. When a paper is available, use its highlighted
                link to open the stated version. Suggestions and guidance are
                always welcome. I retain the rights to the original content on
                this website; please contact me if you identify any potential
                conflict of interest.
              </p>
            </header>

            <div className="research-groups">
              {researchGroups.map((group) => (
                <details
                  className={`research-group research-group-${group.tone}`}
                  key={group.title}
                >
                  <summary className="research-group-heading">
                    <span className="research-group-title">
                      <span>{group.title}</span>
                    </span>
                  </summary>
                  <div className="research-list">
                    {group.projects.map((project) => (
                      <article className="research-card" key={project.title}>
                        <div className="research-card-side">
                          <p className="research-year">{project.year}</p>
                          <p className="research-side-location">
                            {project.location}
                          </p>
                        </div>
                        <div className="research-card-copy">
                          <h4>{project.title}</h4>
                          <div className="research-meta">
                            <p className="research-role">{project.role}</p>
                            {project.collaborators && (
                              <p className="research-advisor">
                                {project.collaborators}
                              </p>
                            )}
                            {project.note && (
                              <p className="research-note">{project.note}</p>
                            )}
                          </div>
                          <p className="research-highlight">{project.highlight}</p>
                          <details className="project-details">
                            <summary className="project-details-toggle">
                              <span className="project-details-icon" aria-hidden="true" />
                              <span>View details</span>
                            </summary>
                            <div className="project-details-content">
                              <ul>
                                {project.details.map((detail) => (
                                  <li key={detail}>{detail}</li>
                                ))}
                              </ul>
                            </div>
                          </details>
                          {project.href && (
                            <a
                              className="text-link"
                              href={project.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="text-link-icon" aria-hidden="true">↗</span>
                              <span className="text-link-label">{project.linkLabel}</span>
                            </a>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </details>
              ))}
              <details className="research-group research-group-olive">
                <summary className="research-group-heading">
                  <span className="research-group-title">RA Experience</span>
                </summary>
                <div className="research-list research-assistant-list">
                  <div className="timeline">
                    {researchAssistantExperience.map((item) => (
                      <article className="research-card" key={item.title}>
                        <div className="research-card-side">
                          <p className="research-year">{item.dates}</p>
                          <p className="research-side-location">{item.location}</p>
                        </div>
                        <div className="research-card-copy">
                          <h3>{item.title}</h3>
                          <div className="research-meta">
                            <p className="research-supervisor">
                              {item.organization}
                            </p>
                          </div>
                          <p className="research-highlight">{item.highlight}</p>
                          <details className="project-details">
                            <summary className="project-details-toggle">
                              <span className="project-details-icon" aria-hidden="true" />
                              <span>View details</span>
                            </summary>
                            <div className="project-details-content">
                              <ul>
                                {item.details.map((detail) => (
                                  <li key={detail}>{detail}</li>
                                ))}
                              </ul>
                            </div>
                          </details>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="experience-inner">
            <header className="experience-heading">
              <div>
                <p className="eyebrow">Teaching · Leadership · Service</p>
                <h2>Experience</h2>
              </div>
              <p>
                My work outside individual research centers on teaching,
                academic community-building, public communication, and student
                leadership. The figures below summarize the scale of that work;
                the records that follow preserve the substance of my CV.
              </p>
            </header>

            <div className="experience-stats" aria-label="Experience highlights">
              <div><strong>110+</strong><span>office hours</span></div>
              <div><strong>40+</strong><span>tutorials led</span></div>
              <div><strong>700+</strong><span>pages of teaching slides</span></div>
              <div><strong>3,000+</strong><span>video-lecture viewers</span></div>
            </div>

            <section className="honors-section" aria-labelledby="honors-title">
              <header className="honors-heading">
                <p className="eyebrow">Selected recognition</p>
                <h3 id="honors-title">Honors & Awards</h3>
                <p>
                  Recognition across academic performance, research, debate,
                  modeling, student media, and service.
                </p>
              </header>
              <div className="honors-grid">
                {honors.map((honor) => (
                  <article className="honor-card" key={`${honor.year}-${honor.title}`}>
                    <p>{honor.year}</p>
                    <h4>{honor.title}</h4>
                    <span>{honor.detail}</span>
                  </article>
                ))}
              </div>
            </section>

            <div className="experience-groups">
              {experienceGroups.map((group) => (
                <details className="experience-group" key={group.title}>
                  <summary className="experience-group-heading">
                    <div>
                      <h3>{group.title}</h3>
                      <p>{group.intro}</p>
                    </div>
                  </summary>
                  <div className="experience-list">
                    {group.items.map((item) => (
                      <article className="experience-card" key={item.title}>
                        <div className="experience-card-side">
                          <p>{item.dates}</p>
                          <span>Shenzhen, China</span>
                        </div>
                        <div className="experience-card-copy">
                          <p className="experience-role">{item.role}</p>
                          <h4>{item.title}</h4>
                          <p className="experience-organization">
                            {item.organization}
                          </p>
                          {item.courses && (
                            <div className="teaching-materials">
                              <p>{item.materialNote}</p>
                              <div className="course-buttons">
                                {item.courses.map((course) => (
                                  <a href={course.href} key={course.name}>
                                    <strong>{course.name}</strong>
                                    <span>{course.action} ↗</span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                          <ul>
                            {item.details.map((detail) => (
                              <li key={detail}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    ))}
                  </div>
                </details>
              ))}
            </div>

            <aside className="skills-band" aria-label="Skills and languages">
              <div>
                <p>Research toolkit</p>
                <span>
                  Microsoft Office · Stata · Python (NumPy, Pandas, Matplotlib) ·
                  R · LaTeX · EViews · MATLAB · Jupyter · Web Scraping ·
                  Machine Learning · NLP · Speech Recognition
                </span>
              </div>
              <div>
                <p>Languages & interests</p>
                <span>
                  Mandarin Chinese · English (full professional proficiency) ·
                  Writing (city-level first prize) · English & Mandarin Debate ·
                  Badminton · Feminist & Existentialist Philosophy
                </span>
              </div>
            </aside>
          </div>
        </section>

        <section className="materials-section" id="materials">
          <div className="materials-inner">
            <header className="materials-heading">
              <div>
                <p className="eyebrow">Presentations · Slides · Teaching</p>
                <h2>Materials</h2>
              </div>
              <p>
                This section collects materials I found especially interesting,
                together with presentations and teaching resources I prepared.
                The collection may be incomplete and will be updated over time.
                Please do not redistribute or cite my original slides or notes
                without permission; copyright in cited papers and other
                third-party works remains with their original owners. Comments,
                suggestions, and notices of possible conflicts of interest are
                always welcome.
              </p>
            </header>

            <div className="material-sections">
              {materialSections.map((section) => (
                <details className="material-section" key={section.title}>
                  <summary className="material-section-heading">
                    <h3>{section.title}</h3>
                  </summary>
                  <div className="material-features">
                    {section.items.map((material) => (
                      <article className="material-feature" key={material.title}>
                        <a
                          className="material-preview"
                          href={material.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${material.title}`}
                        >
                          <Image
                            src={material.image}
                            alt={material.imageAlt}
                            width="1024"
                            height="768"
                            sizes="(max-width: 900px) 90vw, 47vw"
                          />
                          <span>Open full material ↗</span>
                        </a>
                        <div className="material-copy">
                          <p className="material-label">{material.label}</p>
                          <h4>{material.title}</h4>
                          <p>{material.description}</p>
                          <a
                            className="material-link"
                            href={material.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View presentation <span aria-hidden="true">↗</span>
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">Suggestions and conversations are welcome</p>
          <h2>Let’s talk about the future.</h2>
          <p>
            If you have questions about my work, comments on a paper, or ideas
            worth exploring together, I would be delighted to hear from you.
          </p>
          <div className="contact-actions">
            <a
              className="button button-light"
              href="mailto:xuchengchen@link.cuhk.edu.cn"
            >
              Send me an email
            </a>
            <a
              className="button button-light"
              href="https://github.com/VictorChen2004"
              target="_blank"
              rel="me noreferrer"
            >
              GitHub profile ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>Xucheng Chen</strong>
          <span>Victor Chen · 陈绪成</span>
        </div>
        <p>Economics · CUHK-Shenzhen</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
