import { Shield, Code, Globe, Cloud } from 'lucide-react';

type Level = 'expert' | 'proficient' | 'familiar';

interface Skill {
  name: string;
  level: Level;
}

const levelConfig: Record<Level, { label: string; color: string; dot: string }> = {
  expert:     { label: 'Expert',     color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',   dot: 'bg-green-500' },
  proficient: { label: 'Proficient', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',       dot: 'bg-blue-500' },
  familiar:   { label: 'Familiar',   color: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300',          dot: 'bg-gray-400' },
};

const Skills = () => {
  const skillCategories: { icon: React.ElementType; title: string; skills: Skill[] }[] = [
    {
      icon: Shield,
      title: 'InfoSec',
      skills: [
        { name: 'VAPT',              level: 'expert' },
        { name: 'Red Teaming',       level: 'expert' },
        { name: 'Source Code Review',level: 'expert' },
        { name: 'Bug Bounty',        level: 'expert' },
        { name: 'SAST',              level: 'proficient' },
        { name: 'DAST',              level: 'proficient' },
        { name: 'OSINT',             level: 'proficient' },
        { name: 'Threat Modelling',  level: 'proficient' },
      ],
    },
    {
      icon: Code,
      title: 'Languages',
      skills: [
        { name: 'Python',       level: 'expert' },
        { name: 'Bash',         level: 'expert' },
        { name: 'Java',         level: 'proficient' },
        { name: 'C / C++',      level: 'proficient' },
        { name: 'JavaScript',   level: 'familiar' },
      ],
    },
    {
      icon: Globe,
      title: 'Technologies',
      skills: [
        { name: 'REST / SOAP',      level: 'expert' },
        { name: 'OAuth / SSO',      level: 'expert' },
        { name: 'GraphQL',          level: 'proficient' },
        { name: 'Microservices',    level: 'proficient' },
        { name: 'Design Reviews',   level: 'proficient' },
        { name: 'ISO 27001',        level: 'proficient' },
        { name: 'Agentic AI Sec',   level: 'familiar' },
      ],
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS',        level: 'proficient' },
        { name: 'Linux',      level: 'expert' },
        { name: 'Docker',     level: 'proficient' },
        { name: 'Git',        level: 'expert' },
        { name: 'CI/CD',      level: 'proficient' },
        { name: 'Kubernetes', level: 'familiar' },
        { name: 'Azure',      level: 'familiar' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>

          {/* Legend */}
          <div className="inline-flex items-center gap-5 text-sm text-gray-500 dark:text-gray-400">
            {(Object.entries(levelConfig) as [Level, typeof levelConfig[Level]][]).map(([key, cfg]) => (
              <span key={key} className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-full ${cfg.dot}`}></span>
                {cfg.label}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 group"
            >
              <div className="flex items-center mb-5">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                  <category.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => {
                  const cfg = levelConfig[skill.level];
                  return (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-sm rounded-full font-medium ${cfg.color}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cfg.dot}`}></span>
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
