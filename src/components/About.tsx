import React from 'react';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';
import CountUp from './CountUp';

const About = () => {
  const stats = [
    { icon: TrendingUp, number: 6, suffix: '+', label: 'Years of Experience' },
    { icon: Shield, number: 450, suffix: '+', label: 'Penetration Testing Projects' },
    { icon: Award, number: 5, suffix: '', label: 'Certifications' },
    { icon: Users, number: 50, suffix: '+', label: 'Companies Secured' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-semibold text-gray-900 dark:text-white">
              At A Glance
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                A cybersecurity professional with a strong background in application security, 
                infrastructure hardening, and cloud security. Specialized in identifying and 
                mitigating vulnerabilities, ensuring systems are secure, scalable, and compliant.
              </p>
              <p>
                My experience spans secure SDLC implementation, red team assessments, and 
                hands-on work with modern DevSecOps tools and practices. I'm passionate about 
                staying ahead of emerging threats and continuously improving security postures.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                    <stat.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;