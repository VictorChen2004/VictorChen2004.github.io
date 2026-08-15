import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://victorchen2004.github.io";

export const metadata: Metadata = {
  title: { absolute: "Xucheng Chen | Economics Researcher at CUHK-Shenzhen" },
  description:
    "The academic website of Xucheng Chen (Victor Chen), an economics student and researcher at CUHK-Shenzhen working across applied microeconomics, macroeconomics, labor, education, gender, development, and finance.",
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

const experience = [
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

const materials = [
  {
    type: "Course presentation",
    title: "Getting Ahead in the Communist Party",
    description:
      "A Chinese Economy course presentation on the advancement of Central Committee members in China, based on research by Victor Shih and co-authors.",
    href: "https://drive.google.com/file/d/1u9da43kVG5i8SrbUvir92hv4Q1Ntb24e/view",
  },
  {
    type: "Paper study panel",
    title: "AI Can Help People Feel Heard",
    description:
      "A presentation on the relationship between AI-mediated responses, perceived understanding, and the effect of disclosing an AI label.",
    href: "https://drive.google.com/file/d/17V3ixmgMdEnShVKJaiIHxeD6KrX13tMZ/view",
  },
  {
    type: "Econometrics presentation",
    title: "The Colonial Origins of Comparative Development",
    description:
      "A presentation explaining the intuition, identification strategy, and instrumental-variable design of Acemoglu, Johnson, and Robinson.",
    href: "https://drive.google.com/file/d/19fJ8uhVBgF9Uwo_Z2ORYQtc0ZciDEdZF/view",
  },
  {
    type: "Teaching material",
    title: "ECON3121 Midterm Review Lectures",
    description:
      "Review-session materials prepared while serving as a teaching assistant for Introductory Econometrics in Spring 2025.",
    href: "https://drive.google.com/file/d/1_1_FkNhwZai4Nu22oMPqKo0Mff7r8pyC/view",
  },
  {
    type: "Teaching material",
    title: "ECON3121 Final Review Session",
    description:
      "Final-exam review materials prepared for the same Introductory Econometrics course.",
    href: "https://drive.google.com/file/d/1NCFK4npkOHnfPF6ukA1ZnRKrnfTUiv2n/view",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Xucheng Chen",
  alternateName: ["Victor Xucheng Chen", "Victor Chen", "Chen Xucheng", "陈绪成"],
  url: SITE_URL,
  image: `${SITE_URL}/xucheng-chen.jpg`,
  email: "mailto:xuchengchen@link.cuhk.edu.cn",
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
  sameAs: [
    "https://github.com/VictorChen2004",
    "https://sites.google.com/view/xuchengchen/",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
              <Image
                className="profile-photo"
                src="/xucheng-chen.jpg"
                alt="Portrait of Xucheng Chen"
                width="1200"
                height="1600"
                sizes="(max-width: 620px) 90vw, (max-width: 900px) 42vw, 34vw"
                priority
              />
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
                Hi, everyone! My name is <strong>Victor Xucheng Chen</strong>{" "}
                (<span lang="zh-Hans">陈绪成</span> in Chinese). I am currently
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
                              <p
                                className={
                                  project.collaborators.startsWith("Advisor:")
                                    ? "research-advisor"
                                    : "research-collaborators"
                                }
                              >
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
                    {experience.map((item) => (
                      <article className="research-card" key={item.title}>
                        <div className="research-card-side">
                          <p className="research-year">{item.dates}</p>
                          <p className="research-side-location">{item.location}</p>
                        </div>
                        <div className="research-card-copy">
                          <h3>{item.title}</h3>
                          <div className="research-meta">
                            <p className="research-advisor">
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

        <section className="section experience-section" id="experience">
          <div className="section-heading">
            <h2>Experience</h2>
          </div>
        </section>

        <section className="section materials-section" id="materials">
          <div className="section-heading">
            <h2>Materials</h2>
            <p className="section-deck">
              Selected presentations and teaching materials that I have
              prepared along the way.
            </p>
          </div>
          <div className="materials-grid">
            {materials.map((material) => (
              <a
                className="material-card"
                href={material.href}
                target="_blank"
                rel="noreferrer"
                key={material.title}
              >
                <p>{material.type}</p>
                <h3>{material.title}</h3>
                <span>{material.description}</span>
                <strong>Open material ↗</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">Suggestions and conversations are welcome</p>
          <h2>Let’s talk economics.</h2>
          <p>
            If you have questions about my work, comments on a paper, or ideas
            worth exploring together, I would be delighted to hear from you.
          </p>
          <a
            className="button button-light"
            href="mailto:xuchengchen@link.cuhk.edu.cn"
          >
            Send me an email
          </a>
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
