import { Shield, Award, Users, TrendingUp } from 'lucide-react';
import CountUp from './CountUp';

const About = () => {
  const stats = [
    { icon: TrendingUp, number: 7, suffix: '+', label: 'Years of Experience' },
    { icon: Shield, number: 450, suffix: '+', label: 'Penetration Testing Projects' },
    { icon: Award, number: 6, suffix: '', label: 'Certifications' },
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-5">
              <img
                src="https://avatars.githubusercontent.com/u/32647371?v=4"
                alt="Saurabh Jain"
                className="w-20 h-20 rounded-2xl object-cover ring-2 ring-blue-500/30 shadow-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                  Who I Am
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  Security Engineer · Breaker &amp; Builder
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Security has always been about curiosity first, and over 7+ years that curiosity
                has taken me across VAPT on web, mobile, network, infrastructure, and cloud, red
                team exercises, and automating recon and attack simulation with Python and Shell
                scripting.
              </p>
              <p>
                My work spans AppSec, cloud security, compliance, and vendor management, turning
                offensive findings into controls that actually shift posture. I've also been deep
                in agentic AI security lately, which is one of the more interesting problems in
                the space right now.
              </p>
              <p>
                On the side, I've built a suite of open-source security tools — including ReconX,
                Sub-Prober, TruffleHog-Simplifier, commit-analyser, and more — that I use in the
                field and share with the community. I hunt bugs through responsible disclosure and
                write regularly about what I learn. OSCP certified, and always in the middle of
                something new.
              </p>
            </div>

            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                Worked with
              </p>
              <div className="flex flex-wrap gap-2">
                {['Grab', 'WebEngage', 'Zeta', 'Safe Security', 'ShyftLabs'].map((company) => (
                  <span
                    key={company}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-sm"
                  >
                    {company}
                  </span>
                ))}
              </div>
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