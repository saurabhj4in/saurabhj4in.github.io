import { ArrowDown, BookOpen } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Saurabh Jain
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              <AnimatedText 
                texts={[
                  'Security Engineer',
                  'Penetration Tester',
                  'Red Teamer',
                  'Cloud Security'
                ]}
              />
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          A security engineer who thrives on finding flaws before attackers do, turning risk into resilience. I love designing defenses from the ground up and transforming vulnerabilities into hardened systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <button
              onClick={() => scrollToSection('#experience')}
              className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View Experience
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>

            <a
              href="https://saurabhj4in.github.io/AWS-SAA-C03-Prep/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30"
              style={{ background: 'linear-gradient(135deg, #232F3E 0%, #1a2332 50%, #232F3E 100%)', color: '#FF9900', border: '1.5px solid #FF9900' }}
            >
              <span>AWS SAA-C03 Prep</span>
              <BookOpen className="h-4 w-4 opacity-75 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;