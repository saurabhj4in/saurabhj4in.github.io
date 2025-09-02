import React from 'react';
import { ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'AZ-900',
      id: 'AZ-900',
      image: 'https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png',
      url: 'https://www.credly.com/badges/4aa0384e-4f40-4e68-a8c0-e2cbf86589c5/public_url',
      description: 'Microsoft Azure Fundamentals'
    },
    {
      name: 'SC-900',
      id: 'SC-900',
      image: 'https://images.credly.com/images/fc1352af-87fa-4947-ba54-398a0e63322e/security-compliance-and-identity-fundamentals-600x600.png',
      url: 'https://www.credly.com/badges/9f726062-e942-4115-8183-778923cea9f7',
      description: 'Microsoft Security, Compliance, & Identity Fundamentals'
    },
    {
      name: 'AWS CCP',
      id: 'CLF-CO2',
      image: 'https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
      url: 'https://www.credly.com/earner/earned/badge/b0644b5f-70d9-48a4-9a7e-a2cb18a31060',
      description: 'AWS Certified Cloud Practitioner'
    },
    {
      name: 'OSCP',
      id: 'OS-101-37862',
      image: 'https://images.credly.com/images/ec81134d-e80b-4eb5-ae07-0eb8e1a60fcd/image.png',
      url: 'https://www.credly.com/badges/dda52e90-2942-4be9-b9a5-da345154065f',
      description: 'Offensive Security Certified Professional'
    },
    {
      name: 'Information Disclosure',
      id: 'YWH-PGM10866-510',
      image: 'https://images.credly.com/images/a29fb5c5-0875-497f-97f7-ec444ce289f3/image.png',
      url: 'https://www.credly.com/badges/528217a3-b2f4-4523-8132-aca87c704f19',
      description: 'GovTech Singapore'
    },
    {
      name: 'Certified AppSec Practitioner',
      id: 'ID-6886377',
      image: 'https://pentestingexams.com/wp-content/uploads/2023/01/cert-stamp-2.png',
      url: 'https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXT5UoRS21Z0ISzoKdCj5jqLM/zdqiSP9j7hLuMlFl1wxr1N3pNnqW2tTon9axskI0mjZTWtYJKTiL+YsRYHixDo=',
      description: 'SecOps Group'
    }
  ];

  return (
    <section id="certifications" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="aspect-square p-4 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-30 h-30 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">
                  {cert.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  ID: {cert.id}
                </p>
                
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-xs transition-colors duration-200"
                >
                  View Certificate
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;