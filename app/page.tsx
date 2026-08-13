import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://victorchen2004.github.io";

export const metadata: Metadata = {
  title: { absolute: "Xucheng Chen | Economics Researcher at CUHK-Shenzhen" },
  description:
    "The academic website of Xucheng Chen (Victor Chen), an economics student and researcher at CUHK-Shenzhen working across applied microeconomics, macroeconomics, labor, education, gender, development, and finance.",
};

const researchProjects = [
  {
    category: "Working paper",
    year: "2025–present",
    title:
      "Factory Parents, Classroom Outcomes: Occupational Networks and Peer Effects in Education",
    role: "Author · Independent Research",
    collaborators: "Advisor: Prof. Emily Zheng, CUHK-Shenzhen",
    note: "Accepted by the 2nd Chinese Educational Year Seminar, sponsored by the 29th & 30th URA",
    summary:
      "Using the random assignment of students to classrooms in the China Education Panel Survey, this study examines how exposure to classmates from production-worker families affects academic outcomes. The findings connect classroom occupational composition to parental social-capital networks, school engagement, and educational inequality.",
  },
  {
    category: "Working paper",
    year: "2025–present",
    title:
      "The Macroeconomic Impact of SME Lending: Interaction of Credit and Entrepreneurial Risk-Preference",
    role: "Author",
    collaborators:
      "With Shaoshuang Yang (corresponding author and supervisor), CUHK-Shenzhen",
    summary:
      "An empirical study of a 4.27-million-observation merchant–month panel investigating how credit lines, entrepreneurial risk preferences, and firm size jointly shape sales growth. The project combines fixed-effects models, interaction analysis, and event-style measures of downturn and quasi-exit.",
    href: "https://drive.google.com/file/d/10iCuUzlnKLX-rwIK2E_3p3-wIJR4wDCJ/view",
    linkLabel: "Paper · 26 Nov 2025",
  },
  {
    category: "Working paper",
    year: "2025–present",
    title: "Retail Money Flows and Stock Returns in China",
    role: "Author",
    collaborators:
      "With Nuo Chen, Chuan Shi, and Jianrong Wei",
    summary:
      "This paper develops a tick-level retail money-flow measure for China’s stock market using order-book data from 2015–2024. It documents a robust negative relationship between retail inflows and subsequent returns, with stronger predictability when retail attention is elevated.",
    href: "https://drive.google.com/file/d/1b4wtSL_Q2i9IbBTDoFE8WYkNQaI-QWYy/view",
    linkLabel: "Paper · 26 Nov 2025",
  },
  {
    category: "Research project",
    year: "Sep–Dec 2025",
    title:
      "When Structure Beats Flexibility: A Comparative Study of TGARCH and LSTM Forecasting in Bitcoin Markets",
    role: "Undergraduate Researcher · Independent Research",
    collaborators: "Advisor: Prof. Haichun Ye, CUHK-Shenzhen",
    summary:
      "A unified comparison of econometric volatility models and LSTM networks using daily Bitcoin data from 2015–2025. A 500-day out-of-sample framework shows how explicit conditional-variance structure can outperform nonlinear mean modeling in volatility forecasting.",
  },
  {
    category: "Awarded paper",
    year: "Jul 2025",
    title:
      "Beyond Patents: R&D, Capital, and the Productivity Puzzle in Early-Stage High-Tech Firms",
    role: "Author · Independent Research",
    collaborators: "Supervisor: Prof. Myungun Kim, Cambridge, United Kingdom",
    note: "Best Paper · Cambridge Online Summer Research Programme 2025",
    summary:
      "Using proprietary data on early-stage high-tech startups in China, this study separates the roles of patents and R&D expenditure in firm performance. It finds limited direct productivity effects from patents but a more consistent positive association between R&D input and performance.",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5365829",
    linkLabel: "View on SSRN",
  },
  {
    category: "Conference paper",
    year: "Sep 2024–Mar 2025",
    title:
      "Sexual Minorities’ Perspectives on Feminism: A Dialogue Between Gender and Sexuality",
    role: "Author · Academic English course paper",
    collaborators: "Accepted by the Undergraduate Research Conference",
    summary:
      "A qualitative study using semi-structured interviews, inductive thematic coding, and intersectionality theory to examine identity-based alignment, coalition-building, and social preferences.",
    href: "https://drive.google.com/file/d/1k3uX-1eUMcWRaJUmmeTaLarc_7PFkzBc/view",
    linkLabel: "Read paper",
  },
];

const experience = [
  {
    dates: "Jun–Aug 2025",
    title:
      "Collaborative Growth and Global Win-Win: An Overview of China’s Key Industry Clusters Going Global",
    role: "Project Assistant & Author",
    organization:
      "Center for China’s Economic and Outbound Strategy, Shenzhen Finance Institute, CUHK-Shenzhen",
    description:
      "Co-authored a research report on the overseas expansion of China’s pan-cultural industry cluster, synthesizing more than 300 reports and case studies. Produced cross-industry analysis, economic visualizations, policy recommendations, and comparisons of Chinese and international firms across the value chain.",
  },
  {
    dates: "Aug 2024–Mar 2025",
    title:
      "The Obstacles Faced by Female Entrepreneurs When Attempting to Recruit Talent",
    role: "Research Assistant",
    organization: "Supervised by Prof. Zhongchen Hu, CUHK-Shenzhen",
    description:
      "Conducted a literature review and supported an online LinkedIn field experiment designed to measure how otherwise comparable firms receive different responses depending on the founder’s gender.",
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
        <a className="wordmark" href="#top" aria-label="Xucheng Chen — home">
          <span className="wordmark-mark" aria-hidden="true">XC</span>
          <span>Xucheng Chen</span>
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
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Economics · Research · CUHK-Shenzhen</p>
            <h1 id="hero-title">
              Victor <em>Xucheng</em> Chen
            </h1>
            <p className="hero-chinese">陈绪成</p>
            <p className="hero-intro">
              I am an economics student and emerging researcher interested in
              how institutions, social networks, finance, and human behavior
              shape economic outcomes.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">
                Explore my research
              </a>
              <a
                className="button button-secondary"
                href="https://drive.google.com/file/d/1aXf8BXRAzMFJNdztylK_vt0avxGkXUsZ/view"
                target="_blank"
                rel="noreferrer"
              >
                View CV <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Academic profile summary">
            <Image
              className="profile-photo"
              src="/xucheng-chen.jpg"
              alt="Portrait of Xucheng Chen"
              width="1200"
              height="1600"
              sizes="(max-width: 900px) 45vw, 28vw"
              priority
            />
            <p className="hero-card-label">Currently</p>
            <h2>Economics Science</h2>
            <p>
              School of Management and Economics<br />
              The Chinese University of Hong Kong, Shenzhen
            </p>
            <div className="hero-card-rule" />
            <a href="mailto:xuchengchen@link.cuhk.edu.cn">
              xuchengchen@link.cuhk.edu.cn
            </a>
          </aside>
        </section>

        <section className="ticker" aria-label="Research interests">
          <span>Applied Microeconomics</span>
          <span>Labor Economics</span>
          <span>Development</span>
          <span>Education</span>
          <span>Gender</span>
          <span>Finance</span>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="section-number">01</p>
            <h2>About</h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              Nice to meet you here. I am Xucheng Chen, also known as Victor,
              and I am currently studying Economics Science at CUHK-Shenzhen.
            </p>
            <div className="two-column-copy">
              <p>
                My long-term aspiration is to enter academia and contribute to
                economics. This website records my research journey, academic
                experiences, and materials that I find meaningful. Documenting
                that journey helps me reflect on how my interests evolve.
              </p>
              <p>
                My current interests span applied microeconomics and
                macroeconomics, especially labor, development, gender,
                education, and financial economics. I remain open to new
                questions while searching for my long-term intellectual home.
              </p>
            </div>
            <blockquote>
              I believe in human rights, individual dignity, and freedom from
              oppression. Beyond academics, I enjoy English debate and music—
              especially Charli XCX and Lexie Liu.
            </blockquote>
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="section-heading section-heading-light">
            <p className="section-number">02</p>
            <h2>Research</h2>
            <p className="section-deck">
              Work in progress across education, firms, financial markets, and
              political economy.
            </p>
          </div>

          <div className="research-list">
            {researchProjects.map((project, index) => (
              <article className="research-card" key={project.title}>
                <div className="research-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="research-main">
                  <div className="research-meta">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="research-role">{project.role}</p>
                  <p className="research-collaborators">{project.collaborators}</p>
                  {project.note && <p className="research-note">{project.note}</p>}
                  <details>
                    <summary>Project overview</summary>
                    <p>{project.summary}</p>
                  </details>
                  {project.href && (
                    <a
                      className="text-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.linkLabel} <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading">
            <p className="section-number">03</p>
            <h2>Research experience</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-date">{item.dates}</div>
                <div className="timeline-copy">
                  <p className="timeline-role">{item.role}</p>
                  <h3>{item.title}</h3>
                  <p className="timeline-organization">{item.organization}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section materials-section" id="materials">
          <div className="section-heading">
            <p className="section-number">04</p>
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
