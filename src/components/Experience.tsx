import { useState } from 'react';
import {
  Calendar,
  MapPin,
  ExternalLink,
  Radar,
  Terminal,
  Network,
  Activity,
  Github,
  GitBranch,
  ScanSearch,
  MailCheck,
  BookOpen,
} from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experiences = [
    {
      title: 'Security Engineer',
      company: 'ShyftLabs',
      duration: 'March 2025 - Present',
      location: 'Noida, India',
      responsibilities: [
        'Conducting VAPT for Web Applications, APIs and performing Secure Code Review activities.',
        'Collaborating cross-functionally to resolve security issues and strengthen posture.',
        'Performing CIS Benchmarking on AWS security metrics and design reviews.'
      ]
    },
    {
      title: 'Security Engineer',
      company: 'WebEngage',
      duration: 'April 2024 - March 2025',
      location: 'Gurugram, India',
      responsibilities: [
        'Conducted VAPT, Red Teaming, and Code Review for various platforms.',
        'Handled internal bug bounty and external vendor management.',
        'Led ISO 27001 compliance and CAPA point resolutions.'
      ]
    },
    {
      title: 'Security Engineer',
      company: 'Grab',
      duration: 'Feb 2022 - April 2024',
      location: 'Bangalore, India',
      responsibilities: [
        'Partnered with multiple tech-families for VAPT, SCR, SAST, Threat Modelling for Mobile and Web Applications, APIs, providing code level remedies to mitigate the identified vulnerabilities.',
        'Managed Bug Bounty Program and performed ticket handling, saving 1000+ man hours with delivering Annual Report to higher management for identified vulnerabilities & their closures.',
        'Handling Certificate Management via Mastercard Portal for timely renewal of certificates.',
      ]
    },
    {
      title: 'Information Security Engineer',
      company: 'Zeta',
      duration: 'June 2021 - Feb 2022',
      location: 'Bangalore, India',
      responsibilities: [
        'Cross Functional Team engagement to address security requirements.',
        'Developed workflows, articulated confluence pages, enhanced checklists to streamline VAPT processes.',
        'Collaborated with the compliance team to uphold ISO 27001 standards and conducted third-party risk assessments.'
      ]
    },
    {
      title: 'Security Analyst',
      company: 'Safe Security',
      duration: 'Jan 2019 - June 2021',
      location: 'Delhi, India',
responsibilities: [
        'Conducted VAPT, DAST, SAST and Red Teaming activities testing on Mobile & Web Apps, APIs, Networks, and Servers',
        'Enhanced the Unified Control List (Pentest Checklist) by integrating & updating pentest controls, leveraging the MITRE ATT&CK framework.',
        'Automated redundant tasks and simulating attack scenarios using Python & Shell scripting.',
        'Designed Trello Dashboards for technical training for new joinees.'
      ]
    }
  ];

  const education = [
    {
      title: 'M.Sc Informatics',
      company: 'Institute of Informatics & Communication, University of Delhi',
      duration: '2017 – 2019',
      location: 'Delhi, India',
      grade: '7.8 CGPA · Distinction',
      description: 'Focused on algorithms, computer networks, database systems, and software engineering. Built the programming foundation in C, C++, and Java that directly underpins my scripting and tool-building work in security today.',
      highlights: [
        'Graduated with Distinction',
        'Core coursework: Networks, OS, DBMS, Software Engineering',
        'Developed early automation scripts and tooling projects',
      ],
    },
    {
      title: 'B.Sc (Hons) Electronics',
      company: 'Sri Venkateswara College, University of Delhi',
      duration: '2014 – 2017',
      location: 'Delhi, India',
      grade: '87.97% · Distinction',
      description: 'Electronics grounded me in how systems fail at the hardware and signal level — a mental model that sharpens how I think about low-level vulnerabilities, firmware attack surfaces, and embedded system risks.',
      highlights: [
        'Silver Medalist — 2nd rank across the department',
        'Graduated with Distinction · 87.97%',
        'Foundation in circuits, signals, and embedded systems',
      ],
    },
  ];

  const projects = [
    {
      title: 'ReconX',
      link: 'https://github.com/saurabhj4in/ReconX',
      icon: Radar,
      category: 'Recon',
      tech: ['Python', 'Bash'],
      description: 'End-to-end recon framework that chains subdomain enumeration, live-host probing, port scanning, and JS analysis into a single command — turning hours of manual recon into one structured run.',
      terminal: {
        cmd: 'reconx -d example.com',
        lines: [
          '[+] enumerating subdomains…',
          '[+] 631 found · probing live hosts…',
          '[✓] 214 live · 18 open ports · 42 js files',
        ],
      },
    },
    {
      title: 'reconx-cli',
      link: 'https://github.com/saurabhj4in/reconx-cli',
      icon: Terminal,
      category: 'Recon',
      tech: ['Python', 'CLI'],
      description: 'Terminal-first interface for ReconX with configurable flags and output formats, built for fast recon runs across bug-bounty and pentest workflows.',
      terminal: {
        cmd: 'reconx-cli -t target.com -o json',
        lines: [
          '[*] loading modules · 6 enabled',
          '[+] scanning… output → results.json',
          '[✓] done in 48s · 0 errors',
        ],
      },
    },
    {
      title: 'SubEnumerator',
      link: 'https://github.com/saurabhj4in/SubEnumerator',
      icon: Network,
      category: 'Attack Surface',
      tech: ['Python'],
      description: 'Aggregates subdomains from multiple passive and active sources, deduplicates the results, and exports a clean list ready for downstream recon tooling.',
      terminal: {
        cmd: 'subenum -d target.com',
        lines: [
          '[+] querying 7 sources…',
          '[+] merging · deduplicating…',
          '[✓] 512 unique subdomains → subs.txt',
        ],
      },
    },
    {
      title: 'Sub-Prober',
      link: 'https://github.com/saurabhj4in/Sub-Prober',
      icon: Activity,
      category: 'Attack Surface',
      tech: ['Python', 'Excel'],
      description: 'Probes subdomains for liveness, captures HTTP status codes and detected technologies, and exports straight to Excel for VAPT and bug-bounty pipelines.',
      terminal: {
        cmd: 'subprober -l subs.txt',
        lines: [
          '[+] probing 512 hosts…',
          '[+] 200:187  301:44  403:29',
          '[✓] exported → results.xlsx',
        ],
      },
    },
    {
      title: 'Git-Recon',
      link: 'https://github.com/saurabhj4in/Git-Recon',
      icon: Github,
      category: 'Recon',
      tech: ['Python', 'GitHub API'],
      description: 'Maps the external attack surface of GitHub orgs and users — surfacing exposed repos, sensitive file patterns, and metadata useful during recon.',
      terminal: {
        cmd: 'gitrecon --org acme',
        lines: [
          '[+] fetching public repos… 128',
          '[!] 3 configs · 1 .env exposed',
          '[✓] report → gitrecon-acme.md',
        ],
      },
    },
    {
      title: 'commit-analyser',
      link: 'https://github.com/saurabhj4in/commit-analyser',
      icon: GitBranch,
      category: 'Secrets Scanning',
      tech: ['Python', 'Git'],
      description: 'Scans a repo\'s full commit history for accidentally committed secrets, credentials, and sensitive strings across every revision.',
      terminal: {
        cmd: 'commit-analyser ./repo',
        lines: [
          '[+] walking 1,204 commits…',
          '[!] aws_key @ a3f9c2 · token @ 7b1e0d',
          '[✓] 2 secrets flagged',
        ],
      },
    },
    {
      title: 'TruffleHog-Simplifier',
      link: 'https://github.com/saurabhj4in/TruffleHog-Simplifier',
      icon: ScanSearch,
      category: 'Secrets Scanning',
      tech: ['Python', 'GitHub Actions'],
      description: 'A TruffleHog wrapper that makes secret scanning CI-ready — cleaner output, simpler config, and drop-in GitHub Actions integration.',
      terminal: {
        cmd: 'th-simplify scan --ci',
        lines: [
          '[+] running trufflehog…',
          '[+] 3 verified · 5 unverified',
          '[✓] SARIF → results.sarif',
        ],
      },
    },
    {
      title: 'email-auth-auditor',
      link: 'https://github.com/saurabhj4in/email-auth-auditor',
      icon: MailCheck,
      category: 'Email Security',
      tech: ['Python', 'DNS'],
      description: 'One-shot SPF/DKIM/DMARC auditor that flags spoofing- and phishing-exploitable misconfigurations across a domain in seconds.',
      terminal: {
        cmd: 'email-auditor -d example.com',
        lines: [
          '[✓] SPF   ok   -all',
          '[!] DMARC p=none · spoofable',
          '[!] DKIM  no selector found',
        ],
      },
    },
    {
      title: 'AWS SAA-C03 Prep',
      link: 'https://github.com/saurabhj4in/AWS-SAA-C03-Prep',
      siteLink: 'https://saurabhj4in.github.io/AWS-SAA-C03-Prep/',
      icon: BookOpen,
      category: 'Certification Prep',
      tech: ['AWS', 'Cloud Security', 'SAA-C03'],
      description: 'Structured study notes, service cheat-sheets, and practice scenarios for the AWS Solutions Architect Associate (SAA-C03) exam — organised by domain and hosted as a searchable site.',
      terminal: {
        cmd: 'open aws-saa-c03-prep/README.md',
        lines: [
          '[+] domains: IAM · EC2 · S3 · VPC · RDS',
          '[+] 200+ notes · practice questions',
          '[✓] site → saurabhj4in.github.io/AWS-SAA-C03-Prep',
        ],
      },
    },
  ];

  const categoryStyles: Record<string, string> = {
    'Recon': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    'Attack Surface': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    'Secrets Scanning': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
    'Email Security': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
    'Certification Prep': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  };




  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>

          {/* Toggle Buttons */}
          <div className="inline-flex space-x-4 bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-5 py-2 text-sm font-medium rounded-full ${
                activeTab === "experience"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-5 py-2 text-sm font-medium rounded-full ${
                activeTab === "education"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-5 py-2 text-sm font-medium rounded-full ${
                activeTab === "projects"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              Projects
            </button>
          </div>

        </div>

        {activeTab === "education" ? (
          /* Education — side-by-side cards */
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col"
              >
                {/* Coloured header band */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-5">
                  <h3 className="text-lg font-semibold text-white mb-1">{edu.title}</h3>
                  <p className="text-blue-100 text-sm">{edu.company}</p>
                </div>

                <div className="px-6 py-5 flex flex-col flex-1">
                  {/* Meta row */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                  </div>

                  {/* Grade badge */}
                  <span className="inline-flex self-start px-3 py-1 mb-4 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                    {edu.grade}
                  </span>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-auto space-y-2">
                    {edu.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : activeTab === "projects" ? (
          /* Projects Grid */
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const lineColor = (line: string) =>
                line.startsWith('[✓]')
                  ? 'text-green-400'
                  : line.startsWith('[!]')
                  ? 'text-amber-400'
                  : 'text-sky-400';
              return (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  {/* Terminal preview */}
                  <div className="-mx-6 -mt-6 mb-5 bg-[#0d1117]">
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-gray-800">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                      <span className="ml-2 font-mono text-[11px] text-gray-400">
                        {project.title.toLowerCase()} — bash
                      </span>
                    </div>
                    <div className="px-3.5 py-3 font-mono text-xs leading-relaxed text-gray-300">
                      <div>
                        <span className="text-green-400">$</span> {project.terminal.cmd}
                      </div>
                      {project.terminal.lines.map((line, i) => (
                        <div key={i} className={lineColor(line)}>
                          {line}
                        </div>
                      ))}
                      <div>
                        <span className="text-green-400">$</span>
                        <span className="inline-block w-1.5 h-3.5 ml-1 align-middle bg-gray-500 animate-pulse"></span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300 flex-shrink-0">
                        <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                        {project.title}
                      </h3>
                    </div>
                    <span
                      className={`px-2.5 py-1 text-xs font-medium rounded-full whitespace-nowrap flex-shrink-0 ${categoryStyles[project.category]}`}
                    >
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200">
                      <Github className="h-4 w-4 mr-2" />
                      View on GitHub
                      <ExternalLink className="h-3.5 w-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </div>
                    {project.siteLink && (
                      <a
                        href={project.siteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-200"
                      >
                        <BookOpen className="h-4 w-4 mr-1.5" />
                        View Site
                        <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                      </a>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
        /* Work Experience Timeline */
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Card Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700">
                  
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                      </h3>
                      
                      <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      {exp.responsibilities.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
