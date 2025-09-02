import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

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
        'Partnered multiple tech-families for VAPT, SCR, SAST, Threat Modelling for Mobile and Web Applications, APIs, providing code level remedies to mitigate the identified vulnerabilities.',
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
        'Cross Functional Team engagment to address security requirements.',
        'Developed workflows, articulated confluence pages, enhanced checklists to streamline VAPT processes.',
        'Collaborated with the compliance team to uphold ISO 27001 standards and conducted third-party risk assessments.'
      ]
    },
    {
      title: 'Security Analyst',
      company: 'Safe Security',
      duration: 'Jan 2019 - June 2021',
      location: 'Delhi, India',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjTxI4Qd4z56DEjv8PPFwGbibsdtlv5FjixRmVzu9IwDQ3MS0O_m7X46IOj98EJTxOprY&usqp=CAU',
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
      title: 'B.Sc (Hons) Electronics',
      company: 'Sri Venkateswara College, University of Delhi',
      duration: '2014 - 2017',
      location: 'Delhi, India',
      responsibilities: [
        'Graduated with Distinction 87.97%',
      ]
    },
    {
      title: 'M.Sc Informatics',
      company: 'Institute of Informatics & Communication, University of Delhi',
      duration: '2017 - 2019',
      location: 'Delhi, India',
      responsibilities: [
        'Graduated with Distinction 7.8 CGPA',
      ]
    }
  ];

  const data = activeTab === "experience" ? experiences : education;

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
          </div>
        </div>

        {/* Timeline Line */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {data.map((exp, index) => (
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
      </div>
    </section>
  );
};

export default Experience;
