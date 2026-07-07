import { useState } from 'react';
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Unauthenticated Access to AWS via Cognito Identity Pool ID',
      excerpt: 'Exploiting temporary credentials issued by a misconfigured Cognito Identity Pool to gain unauthenticated access to AWS resources.',
      date: '2026-05-05',
      readTime: '6 min read',
      category: 'Cloud Security',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*OqaoatIVKME7GHoLVCC6dw.png',
      url: 'https://saurabh-jain.medium.com/unauthenticated-access-to-aws-via-cognito-identity-pool-credentials-dc7fd5e01ec7',
      featured: true
    },
    {
      title: '20+ Vulnerabilities in a Static Website',
      excerpt: 'Bug Bounty Cheat Codes - a breakdown of two dozen issues uncovered in a seemingly simple static website.',
      date: '2025-11-18',
      readTime: '7 min read',
      category: 'Bug Bounty',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*jJ5-6zmfCDldKx5g1gj-Jg.png',
      url: 'https://saurabh-jain.medium.com/20-vulnerabilities-in-a-static-website-2f32a4902377'
    },
    {
      title: 'Built a Python Tool to Automate Email Security Audits',
      excerpt: 'A Python tool that automates checking SPF, DKIM, and DMARC records to quickly catch email security misconfigurations.',
      date: '2025-09-22',
      readTime: '5 min read',
      category: 'Secure Development',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*a7JuQQDQyEc7klaR-11byA.png',
      url: 'https://saurabh-jain.medium.com/built-a-python-tool-to-automate-email-security-audits-c639d2affe88'
    },
    {
      title: 'Security Fundamentals for Beginners',
      excerpt: 'A practical, principle-first guide covering the 9 core security principles every engineer and startup should live by.',
      date: '2025-09-11',
      readTime: '6 min read',
      category: 'Secure Development',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_lSj8t4cB6Nko0_3eyic6A.png',
      url: 'https://saurabh-jain.medium.com/security-fundamentals-for-beginners-8a673e6bfe8b'
    },
    {
      title: 'Recon to Responsible Disclosure: My First Accepted Bug!',
      excerpt: 'From 631 subdomains to my first accepted bug - the journey from initial recon to a successful responsible disclosure.',
      date: '2025-09-01',
      readTime: '4 min read',
      category: 'Bug Bounty',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*BEcWVBu_Zb-HGnDm01YM-w.png',
      url: 'https://saurabh-jain.medium.com/recon-to-responsible-disclosure-ee3d308a3b69'
    },
    {
      title: 'Prompting Cheat Sheet for Security Engineers',
      excerpt: '7 AI prompts that save time and improve clarity for security engineers using LLMs in their daily workflow.',
      date: '2025-08-18',
      readTime: '5 min read',
      category: 'Secure Development',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*BbypzEZUlcOgPdyhBlfbaQ.jpeg',
      url: 'https://saurabh-jain.medium.com/prompting-cheat-sheet-for-security-engineers-794985160b8c'
    },
    {
      title: "The Last Time You'll Ever Use a Password",
      excerpt: 'Welcome to the Passkey Era - how passwordless authentication is reshaping account security for good.',
      date: '2025-07-25',
      readTime: '4 min read',
      category: 'Compliance',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*K3kjSErsnIK2ubtn6DAwmQ.png',
      url: 'https://saurabh-jain.medium.com/the-last-time-youll-ever-use-a-password-fd36ef314883'
    },
    {
      title: 'Cracked AWS Cloud Practitioner in 2 Weeks',
      excerpt: 'How I earned the AWS Certified Cloud Practitioner (CLF-C02) in just two weeks of focused preparation.',
      date: '2025-07-10',
      readTime: '5 min read',
      category: 'Cloud Security',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Oi277idbrjkDAOGg8JPqLQ.png',
      url: 'https://saurabh-jain.medium.com/cracked-aws-cloud-practitioner-in-2-weeks-7ec79dbf4934'
    },
    {
      title: 'Security Engineer Interview Questions Part-6',
      excerpt: 'Part 6 - AWS IMDSv2 security enhancements and more advanced scenario-based security engineering questions.',
      date: '2024-10-23',
      readTime: '4 min read',
      category: 'Secure Development',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Rp9syw1u93lI7TzX3Vvo_g.png',
      url: 'https://saurabh-jain.medium.com/security-engineer-interview-questions-part-6-582ff4c747ef'
    },
    {
      title: 'Security Engineer Interview Questions Part-5',
      excerpt: 'Source code vulnerability analysis - identifying hardcoded credentials, SQL injection, and insecure patterns in a real code snippet.',
      date: '2024-10-23',
      readTime: '4 min read',
      category: 'Secure Development',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Rp9syw1u93lI7TzX3Vvo_g.png',
      url: 'https://saurabh-jain.medium.com/security-engineer-interview-questions-part-5-20a4cbd97258'
    },
    {
      title: 'Security Engineer Interview Questions Part-4',
      excerpt: 'Part 4 of the curated interview series with questions and answers from real security engineering interviews at top companies.',
      date: '2024-10-16',
      readTime: '5 min read',
      category: 'Secure Development',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Rp9syw1u93lI7TzX3Vvo_g.png',
      url: 'https://saurabh-jain.medium.com/security-engineer-interview-questions-part-4-b7b03fcc52bd'
    },
    {
      title: 'Security Engineer Interview Questions Part-3',
      excerpt: 'Load Balancer and S3 placement, private vs public subnets, and AWS architecture security decisions.',
      date: '2024-10-09',
      readTime: '5 min read',
      category: 'Secure Development',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Rp9syw1u93lI7TzX3Vvo_g.png',
      url: 'https://saurabh-jain.medium.com/security-engineer-interview-questions-part-3-457ed78ee43a'
    },
    {
      title: 'Security Engineer Interview Questions Part-2',
      excerpt: 'Microservice vs monolithic architecture security, common interview scenarios, and practical answers.',
      date: '2024-09-27',
      readTime: '4 min read',
      category: 'Secure Development',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Rp9syw1u93lI7TzX3Vvo_g.png',
      url: 'https://saurabh-jain.medium.com/security-engineer-interview-questions-part-2-0bdd5fbf3a52'
    },
    {
      title: 'Security Engineer Interview Questions Part-1',
      excerpt: 'Real interview questions from Big 4s, Amazon, Google, and Cisco - with detailed answers covering IDS, IPS, WAF, and DOM XSS.',
      date: '2024-09-17',
      readTime: '5 min read',
      category: 'Secure Development',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Rp9syw1u93lI7TzX3Vvo_g.png',
      url: 'https://saurabh-jain.medium.com/security-engineer-interview-questions-part-1-c5c9a5267468'
    },
    {
      title: 'Boost Subdomain Discovery with Subfinder and API Integrations',
      excerpt: 'Integrating Shodan and Censys API keys into Subfinder to boost subdomain discovery coverage during recon.',
      date: '2024-08-23',
      readTime: '4 min read',
      category: 'Bug Bounty',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KwYpkZWjMuBjN_bXnbEFMA.png',
      url: 'https://saurabh-jain.medium.com/integrating-shodan-and-censys-api-keys-into-subfinder-c28452af2efb'
    },
    {
      title: "Security Beyond Browsers: Why CORS Doesn't Apply to Mobile Applications",
      excerpt: 'Why CORS, a browser-enforced security model, simply does not apply to mobile apps - and what that means for API security.',
      date: '2023-11-03',
      readTime: '8 min read',
      category: 'Penetration Testing',
      image: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/0*j5MBBCZQFut9cmFL',
      url: 'https://saurabh-jain.medium.com/security-beyond-browsers-why-cors-doesnt-apply-to-mobile-applications-99e6ab3e8fe7'
    },
    {
      title: 'Morty Sherlocked: Android Application Based CTF Challenge Walkthrough',
      excerpt: 'A beginner-level Android CTF walkthrough covering APK analysis, static and dynamic techniques, and core mobile security concepts.',
      date: '2020-09-27',
      readTime: '10 min read',
      category: 'Red Teaming',
      image: 'https://miro.medium.com/v2/resize:fit:1342/format:webp/1*a1G9X4PzwYfZuOTaaL2T1w.png',
      url: 'https://medium.com/swlh/morty-sherlocked-android-application-ctf-challenge-walkthrough-ab1ec2161cb4'
    },
  ];

  const categories = ['All', 'Penetration Testing', 'Cloud Security', 'Red Teaming', 'Secure Development', 'Bug Bounty', 'Compliance'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Security Blog
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on cybersecurity, penetration testing, 
            and secure development practices.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {selectedCategory === 'All' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Post</h2>
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="ml-4 text-sm text-gray-500 dark:text-gray-400">Featured</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                        <Clock className="h-4 w-4 ml-4 mr-2" />
                        {post.readTime}
                      </div>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured || selectedCategory !== 'All').map((post, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-200 dark:border-gray-700 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  Read Article
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to stay updated?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Follow me on Medium for the latest insights on cybersecurity, penetration testing, 
              and secure development practices.
            </p>
            <a
              href="https://saurabh-jain.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Follow on Medium
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;