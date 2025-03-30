import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Assylbek Saduakhassov
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="#about" className="hover:text-blue-500 transition-colors">
                About
              </Link>
              <Link href="#education" className="hover:text-blue-500 transition-colors">
                Education
              </Link>
              <Link href="#experience" className="hover:text-blue-500 transition-colors">
                Experience
              </Link>
              <Link href="#projects" className="hover:text-blue-500 transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="hover:text-blue-500 transition-colors">
                Skills
              </Link>
              <Link href="#resume" className="hover:text-blue-500 transition-colors">
                Resume
              </Link>
              <Link href="#contact" className="hover:text-blue-500 transition-colors">
                Contact
              </Link>
            </div>
            <button className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm Assylbek
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
                Software Engineer
              </h2>
              <p className="text-lg mb-8 max-w-lg">
              Startup founder and tech enthusiast. Built Clout, a platform connecting influencers with brands. Previously: SWE @ Qlub, Research Assistant @ NYUAD CHI Lab. Passionate about startups, AI, and scalable tech.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
                >
                  Get in Touch
                </a>
                <a 
                  href="#projects" 
                  className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-md transition-colors"
                >
                  View Projects
                </a>
                <a 
                  href="/Assylbek Saduakhassov CV.pdf" 
                  target="_blank"
                  download
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center relative">
              {/* Decorative background elements */}
              <div className="absolute w-40 h-40 bg-blue-500/10 rounded-full -top-10 -left-10 z-0 animate-pulse-slow"></div>
              <div className="absolute w-32 h-32 bg-green-500/10 rounded-full bottom-0 right-0 z-0 animate-pulse-slow"></div>
              
              {/* Main image with creative styling */}
              <div className="relative z-10 animate-float">
                {/* Shadow and glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl transform rotate-6 scale-105 opacity-30 blur-sm"></div>
                
                {/* Main image container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl transform hover:scale-105 transition-transform duration-300"
                     style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)' }}>
        <Image
                    src="/images/profile-photo.jpg"
                    alt="Assylbek Saduakhassov"
                    fill
          priority
                    className="object-cover"
                  />
                  
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Floating decoration elements */}
                <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg animate-float-delay-1">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -top-5 -left-5 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg animate-float">
                  <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
            Hi, I'm Assylbek, a software engineer and startup founder passionate about creating innovative, scalable digital solutions. I co-founded Clout, a platform designed to simplify media-kit creation and brand collaboration for influencers, integrating seamlessly with major social platforms like Instagram, Facebook, TikTok, and YouTube.
            </p>
            <p className="text-lg mb-6">
            My background includes software engineering at Qlub, where I built global POS system integrations, and research at the NYUAD Laboratory for Computer-Human Intelligence, developing real-time analytics tools for user productivity. With a strong foundation in Python, Django, AWS, and RESTful APIs, I focus on delivering reliable and efficient backend solutions.
            </p>
            <p className="text-lg">
            I thrive in entrepreneurial environments, love exploring the intersection of technology and user experience, and am always open to exciting collaborations and new ventures. Let's connect!
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto">
            {/* Education Item */}
            <div className="flex flex-col md:flex-row mb-12">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="relative h-24 w-24 md:h-32 md:w-32 overflow-hidden rounded-lg border-4 border-gray-100 dark:border-gray-800 shadow-md">
                  <Image 
                    src="/images/nyuad-logo.png" 
                    alt="NYU Abu Dhabi" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-3/4 md:pl-6">
                <h3 className="text-xl font-bold mb-1">New York University Abu Dhabi</h3>
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">B.S. in Computer Science, Minor in Applied Mathematics</h4>
                <p className="text-gray-500 dark:text-gray-400 mb-4">2021 - 2025</p>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Completed a comprehensive computer science curriculum with a focus on software engineering, distributed systems, and artificial intelligence.
                  </p>
                  <h5 className="font-bold mb-2">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Data Structures</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Algorithms</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Operating Systems</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Computer Networks</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Databases</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Software Engineering</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Machine Learning</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Linear Algebra</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Probability and Statistics</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Differential Equations</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Data Science</span>
                  </div>
                  <h5 className="font-bold mb-2">Achievement Highlights:</h5>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Awarded a $320k Full-Ride Scholarship.</li>
                    <li>Named a Finalist in Amazon Transcend 2025.</li>
                    <li>Achieved Second Place at the NYUAD Entrepreneurship School Bootcamp.</li>
                    <li>Secured Second Place at the Football Ramadan League 2025.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          
          <div className="max-w-3xl mx-auto">
            {/* Experience Item 1 */}
            <div className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Software Engineer</h3>
                  <div className="text-gray-600 dark:text-gray-400 text-lg">Qlub</div>
                </div>
                <div className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  Apr. 2024 - Mar. 2025
                </div>
              </div>
              
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  • <b>Led technical integration for Pizza Express</b>, onboarding <b>20+
                    restaurants</b> across <b>4 international regions</b>, enabling over <b>50,000 transactions monthly</b>.
                </p>
                <p>
                  • <b>Delivered integrations for 5+ global POS providers</b>, shortening onboarding timelines by <b>40%</b>.
                </p>
                <p>
                  • <b>Implemented LLM-based categorization system</b>, achieving <b>94%+ accuracy</b> in automated item classification.
                </p>
                <p>
                  • <b>Improved system reliability and decreased troubleshooting time by 40%</b> using Jaeger and Grafana.
                </p>
                <p>
                  • <b>Built and deployed QR-based menu ordering system</b> for a key POS provider, increasing ordering efficiency by 25%.
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs">Python</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs">MSSQL</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs">Redis</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs">RESTful APIs</span>
              </div>
            </div>
            
            {/* Experience Item 2 */}
            <div className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Research Assistant</h3>
                  <div className="text-gray-600 dark:text-gray-400 text-lg">NYUAD Laboratory for Computer-Human Intelligence</div>
                </div>
                <div className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  Apr. 2023 - Sep. 2023
                </div>
              </div>
              
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  • <b>Developed a Chrome extension</b> capturing <b>2M+ user events</b> for productivity insights in real-time.
                </p>
                <p>
                  • <b>Built secure Flask backend</b> with <b>99.9% reliability</b> using JWT authentication for real-time event collection.
                </p>
                <p>
                  • <b>Optimized PostgreSQL</b>, decreasing query times by <b>40%</b> with indexing and partitioning.
                </p>
                <p>
                  • <b>Deployed a scalable Flask application on AWS</b> using EC2, ELB, Auto Scaling, RDS, and S3, ensuring <b>99.99% uptime</b>.
                </p>
                <p>
                  • <b>Applied ML algorithms</b> for productivity detection with <b>92% accuracy</b>, enabling actionable insights.
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs">JavaScript</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs">Flask</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs">PostgreSQL</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src="/images/projects/clout.png"
                  alt="Clout Dashboard Preview"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                
                {/* Project status indicator */}
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                    Active
                  </span>
                </div>
                
                {/* Multiple screenshot indicators */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
                  <button className="w-2 h-2 rounded-full bg-white opacity-100"></button>
                  <button className="w-2 h-2 rounded-full bg-white opacity-50"></button>
                  <button className="w-2 h-2 rounded-full bg-white opacity-50"></button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">Clout</h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <span className="text-xs font-medium">Featured Project</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                Clout empowers influencers by automatically generating dynamic, professional media kits with personalized URLs, updating daily with real-time analytics and insights from connected social media accounts. This simplifies influencer-brand interactions and dramatically reduces the time and effort required compared to traditional methods.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Django REST Framework</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">AWS EC2</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">AWS S3</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">JWT Authentication</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Social media APIs</span>
                </div>
                <div className="flex space-x-4">
                  {/* <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Code
                  </a> */}
                  <a href="https://drive.google.com/file/d/1xh5bIVlYUr4TZ1JlHiDhWEArZBThJVC9/view?usp=sharing" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src="/images/projects/image copy.png"
                  alt="Project 2 Preview"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">LLM-Based Classification API for CTOgram</h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs rounded-full">Featured</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                Developed a fast and responsive API using Large Language Models (LLMs) to classify customer-reported car issues into predefined categories within 0.4-1 second. This standalone feature was built for CTOgram, enhancing their ability to quickly match 178,000 customers with relevant car services from over 1,100 providers.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Groq</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">OpenAI</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">FastAPI</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Fly.dev</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Docker</span>
                </div>
                <div className="flex space-x-4">
                  {/* <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Code
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Demo
                  </a> */}
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src="/images/projects/image.png"
                  alt="Project 3 Preview"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Conversation Classification & Performance Assessment API for X Company</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                Developed an API-driven reporting system integrated with Google Sheets to gather data from various sources and classify conversations between AI agents and customers. Used LLM-based classification to evaluate response performance, accuracy, and time efficiency, providing insights into the effectiveness of AI agents across business applications.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Google Sheets API</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">FastAPI</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Pandas & NumPy</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Fly.dev</span>
                </div>
                <div className="flex space-x-4">
                  {/* <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Code
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Demo
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Programming Languages */}
              <div>
                <h3 className="text-xl font-bold mb-6">Programming Languages</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg">Python</span>
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg">C++</span>
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg">JavaScript</span>
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg">SQL</span>
                </div>
              </div>

              {/* Databases */}
              <div>
                <h3 className="text-xl font-bold mb-6">Databases</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-lg">PostgreSQL</span>
                  <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-lg">MySQL</span>
                  <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-lg">Redis</span>
                  <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-lg">MSSQL</span>
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div>
                <h3 className="text-xl font-bold mb-6">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">Django</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">Django REST Framework</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">Flask</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">FastAPI</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">Node.js</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">Express</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">TensorFlow</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">PyTorch</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">Pandas</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">NumPy</span>
                </div>
              </div>

              {/* Web & APIs: */}
              <div>
                <h3 className="text-xl font-bold mb-6">Web & APIs</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">RESTful APIs</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">Chrome Extensions API</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">OAuth</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">JWT Authentication</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">HTTPS</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">WebSockets</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">gRPC</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">Swagger/OpenAPI</span>
                </div>
              </div>

              {/* Tools & Technologies */}
              <div>
                <h3 className="text-xl font-bold mb-6">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg">Git</span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg">GitHub</span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg">Docker</span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg">AWS</span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg">GitHub</span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg">VS Code</span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg">Postman</span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg">Swagger UI</span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg">JIRA</span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg">Agile methodologies</span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg">Confluence</span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg">Slack</span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg">Notion</span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg">Docker Compose</span>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div>
                <h3 className="text-xl font-bold mb-6">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-lg">AWS</span>
                  <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-lg">Docker</span>
                  <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-lg">GitHub Actions</span>
                  <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-lg">CI/CD Pipelines</span>
                  <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-lg">Nginx</span>
                </div>
              </div>

              {/* Monitoring & Observability */}
              <div>
                <h3 className="text-xl font-bold mb-6">Monitoring & Observability</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-lg">Grafana</span>
                  <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-lg">Jaeger Tracing</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Resume</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex flex-wrap justify-between items-center">
                <h3 className="text-xl font-bold">My Professional Resume</h3>
                <div className="flex space-x-4 mt-4 sm:mt-0">
                  <a 
                    href="/Assylbek Saduakhassov CV.pdf" 
                    download
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
          </a>
          <a
                    href="https://drive.google.com/file/d/1FZ2wmJThFWH7f3HuigUvBBfjGXWwZn52/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View on Google Drive
                  </a>
                </div>
              </div>
              <div className="p-0 h-[70vh] w-full">
                {/* Embed your resume PDF here */}
                <iframe 
                  src="/Assylbek Saduakhassov CV.pdf" 
                  className="w-full h-full border-0" 
                  title="Resume"
                />
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                You can also request my resume via email at{" "}
                <a href="mailto:assylbek.s@nyu.edu" className="text-blue-600 hover:underline">
                  assylbek.s@nyu.edu
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                        <a href="mailto:assylbek.s@nyu.edu" className="text-lg font-medium hover:text-blue-600 transition-colors">assylbek.s@nyu.edu</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                        <p className="text-lg font-medium">Abu Dhabi, UAE</p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mt-10 mb-6">Connect With Me</h3>
                  <div className="flex space-x-4">
                    {/* LinkedIn */}
                    <a 
                      href="https://linkedin.com/in/assylbeks" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:bg-opacity-90 transition-opacity"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    
                    {/* GitHub */}
                    <a 
                      href="https://github.com/assylbek-codes" 
          target="_blank"
          rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-800 dark:bg-gray-700 text-white flex items-center justify-center hover:bg-opacity-90 transition-opacity"
                      aria-label="GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    
                    {/* Instagram */}
                    <a 
                      href="https://www.instagram.com/assylbek.me/" 
          target="_blank"
          rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white flex items-center justify-center hover:bg-opacity-90 transition-opacity"
                      aria-label="Instagram"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>

                    {/* Telegram */}
                    <a 
                      href="https://t.me/aaassylbek" 
          target="_blank"
          rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-800 dark:bg-gray-700 text-white flex items-center justify-center hover:bg-opacity-90 transition-opacity"
                      aria-label="Telegram"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Additional Contact Details */}
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-6">Availability</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    I'm currently available for freelance work, consulting opportunities, and startup collaborations. Feel free to reach out if you're interested in working together!
                  </p>
                  
                  <h4 className="text-lg font-semibold mb-2">Response Time</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    I typically respond to emails within 5 hours.
                  </p>
                  
                  <h4 className="text-lg font-semibold mb-2">Preferred Contact Method</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Telegram/Email are the best way to reach me for professional inquiries. Feel free to connect on LinkedIn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t">
        <div className="container mx-auto px-4 md:px-6">
          <p>&copy; {new Date().getFullYear()} Assylbek Saduakhassov. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
