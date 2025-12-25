import Link from 'next/link'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { FiCode, FiCpu, FiZap, FiTrendingUp } from 'react-icons/fi'

export default function Home() {
  return (
    <div className="font-schibstedGrotesk relative min-h-screen transition-colors duration-300 z-10">
      <Hero />
      <About />
      <Timeline />
      <CodingProfiles />
      <Project />
      <TechStack />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="px-6 py-16 text-black dark:text-white transition-colors duration-300" id="home">
      <div className="mx-auto max-w-3xl">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 mx-4">
          <div className="item space-y-20">
            <div>
              <h1 className="text-4xl font-bold mb-4">Hey! I'm Souradeep</h1>
              <p className="text-zinc-600 dark:text-zinc-300 text-lg mb-6">Software <span className="font-bricolage-grostesque text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Developer</span> based in <br/> California, US</p>
              <Social />
            </div>
          </div>
          <div className="item flex justify-center">
            <div className="card bg-zinc-100/50 dark:bg-zinc-900/50 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 shadow-2xl p-4 rounded-2xl transition-colors duration-300">
              <Image
                src="/img/profile.png"
                alt="souradeep photo"
                sizes="100vw"
                width={600}
                height={500}
                priority={false}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// function Resume() {
//   return (
//     <section className="px-6 py-16 text-[#171618]" id="resume">
//       <div className="mx-auto max-w-3xl">
//         <div className="grid gap-4 mx-4">
//           <div className="flex items-start flex-[1_0_0px] flex-col flex-nowrap gap-1 h-auto justify-start p-0">
//             <h2 className="text-xl font-medium">
//               Re<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f60] to-[#f00ab3]">sume</span>
//             </h2>
//           </div>

//           <div className="text-sm">
//             <p className="text-zinc-600">
//               <strong>Here is my resume </strong>
//             </p>
//             <p className="pt-3 text-zinc-600">
//             Explore my portfolio to see how I bring ideas to life—download my resume to dive deeper into my skills and experience.
//             </p>

//             {/* Resume download button */}
//             <div className="pt-6">
//               <a
//                 href="https://drive.google.com" // Update with your actual path or external URL
//                 download
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center bg-[#171618] text-white px-4 py-2 rounded-lg text-sm hover:bg-zinc-800 transition"
//               >
//                 Download Resume
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


function About() {
  return (
    <section className="px-6 py-16 text-white" id="about">
      <div className="mx-auto max-w-3xl">
        <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-medium text-white">Abo<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ut Me</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm space-y-4">
              <p className="text-zinc-300">I am a <strong className="text-white">Cloud & AI Engineer</strong> and <strong className="text-white">Full Stack Software Developer</strong> with hands-on experience building <strong className="text-white">scalable, serverless, and AI-driven platforms</strong> for SaaS and in-house enterprise products. Currently, I work at <strong className="text-cyan-400">Cloudain LLC (USA)</strong>, where I design and develop backend services and intelligent systems using <strong className="text-white">AWS Lambda, API Gateway, DynamoDB, and AWS Bedrock</strong>.</p>
              <p className="text-zinc-300">My work focuses on building <strong className="text-white">event-driven, secure backend architectures</strong> that power <strong className="text-white">agentic AI chatbots, automation workflows, and contact center platforms</strong>—ensuring high availability, low latency, and seamless integrations. I actively contribute to production-grade systems used across multiple AI-powered products.</p>
              <p className="text-zinc-300">Previously, I worked as a <strong className="text-white">Frontend Engineer – AI & SaaS Platforms</strong>, where I collaborated closely with product and design teams to build high-performance, responsive interfaces using <strong className="text-white">Next.js, TypeScript, and modern UI frameworks</strong>. I contributed end-to-end from component architecture and UX implementation to production deployment—across several cloud and AI products.</p>
              <p className="text-zinc-300">With a strong foundation in <strong className="text-white">data structures, algorithms, and problem-solving</strong> (<strong className="text-white">1500+ problems solved on LeetCode & GeeksforGeeks</strong>), I bring an engineering-first mindset to every system I build. I enjoy working at the intersection of <strong className="text-white">Cloud, Backend, and AI</strong>, continuously learning and delivering impactful, scalable solutions in collaborative environments.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

const timelineData = [
  {
    type: 'education',
    title: 'B.Tech in Electronics and Communications Engineering',
    institution: 'Narula Institute of Technology, MAKAUT',
    location: 'West Bengal, India',
    period: 'Aug 2021 - Jun 2025',
    description: 'Graduated with comprehensive knowledge in electronics, communications, and software development.'
  },
  {
    type: 'experience',
    title: 'Cloud & AI Engineer',
    institution: 'Cloudain LLC',
    location: 'California, US',
    period: 'July 2025 - Present',
    description: [
      { text: '✦ Currently working on building scalable backend services using ', highlights: ['AWS Lambda', 'API Gateway', 'DynamoDB'], suffix: ' to support SaaS and in-house Contact Center platforms.' },
      { text: '✦ Implementing Agentic AI Chatbots leveraging ', highlights: ['AWS Bedrock'], suffix: ' to automate customer interactions, workflows, and intelligent task execution.' },
      { text: '✦ Designing secure, event-driven serverless architectures to ensure high availability, low latency, and seamless system integrations.', highlights: [], suffix: '' }
    ]
  }
];

function Timeline() {
  return (
    <section className="px-4 sm:px-6 py-16 text-white" id="timeline">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span></h2>
          <p className="text-zinc-400">My academic and professional journey</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
          
          {/* Timeline items */}
          <div className="space-y-8 sm:space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:-ml-3 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center z-10 mt-2 md:mt-0">
                  {item.type === 'education' ? (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                    </svg>
                  )}
                </div>
                
                {/* Content card */}
                <Card className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-8 ml-12 md:ml-0' : 'md:ml-8 ml-12 md:mr-0'} bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-cyan-400 transition-all duration-300 shadow-xl`}>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                      <span className={`px-3 py-1 text-xs rounded-full font-medium w-fit ${item.type === 'education' ? 'bg-blue-900/30 text-blue-400' : 'bg-cyan-900/30 text-cyan-400'}`}>
                        {item.type === 'education' ? 'Education' : 'Experience'}
                      </span>
                      <span className="text-sm font-medium text-zinc-400 bg-zinc-800/50 px-2 py-1 rounded-md w-fit">{item.period}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm font-medium text-cyan-400 mb-1">{item.institution}</p>
                    <p className="text-xs text-zinc-400 mb-3">📍 {item.location}</p>
                    {Array.isArray(item.description) ? (
                      <ul className="text-sm text-zinc-300 leading-relaxed space-y-2">
                        {item.description.map((point, i) => (
                          <li key={i}>
                            {typeof point === 'string' ? point : (
                              <>
                                {point.text}
                                {point.highlights.map((h, idx) => (
                                  <span key={idx}>
                                    <strong className="text-cyan-400">{h}</strong>
                                    {idx < point.highlights.length - 1 && ', '}
                                  </span>
                                ))}
                                {point.suffix}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-zinc-300 leading-relaxed">{item.description}</p>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const codingprofiles = [
  {
    name: 'LeetCode',
    description: 'Maintained a streak of solving problems daily for 365 days on LeetCode, solving over 800+ problems and demonstrating consistency and dedication to continuous learning',
    href: 'https://leetcode.com/u/souradeep_ghosh/',
    logo: '/img/leetcode.png',
    stats: '800+ Problems',
    color: 'from-orange-400 to-orange-600'
  },
  {
    name: 'GeeksforGeeks',
    description: 'Solved over 400 problems on GeeksforGeeks. Ranked 25th among 2500+ college-mates, consistently solving complex DSA problems.',
    href: 'https://www.geeksforgeeks.org/user/souradeep_4n4/?',
    logo: '/img/gfg.jpg',
    stats: 'Rank #25/2500+',
    color: 'from-green-400 to-green-600'
  },
  {
    name: 'Coding Ninjas',
    description: 'Solved over 200 problems on Coding Ninjas. Ranked among top performers, consistently solving complex DSA problems',
    href: 'https://www.naukri.com/code360/profile/Souradeep_89',
    icon: FiZap,
    stats: '200+ Problems',
    color: 'from-purple-400 to-purple-600'
  },
];

function CodingProfiles() {
  return (
    <section className="px-6 py-16 text-black dark:text-white transition-colors duration-300" id="codingprofiles">
      <div className="mx-auto max-w-4xl">
        <div className="mx-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Profiles</span></h2>
            <p className="text-zinc-600 dark:text-zinc-400">My competitive programming journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codingprofiles.map((profile) => (
              <Card key={profile.name} className="bg-zinc-100/50 dark:bg-zinc-900/50 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 hover:border-cyan-400 dark:hover:border-zinc-700 transition-all duration-300 hover:scale-105 group flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    {'logo' in profile && profile.logo ? (
                      <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Image src={profile.logo} alt={profile.name} width={48} height={48} className="w-full h-full object-cover" />
                      </div>
                    ) : 'icon' in profile && profile.icon ? (
                      <div className={`w-12 h-12 bg-gradient-to-r ${profile.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <profile.icon className="w-6 h-6 text-white" />
                      </div>
                    ) : null}
                    <span className="text-xs font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded-full">
                      {profile.stats}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-black dark:text-white">
                    {profile.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow space-y-4">
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed flex-grow">{profile.description}</p>
                  
                  <Link 
                    href={profile.href} 
                    className="btn btn-primary btn-sm w-full group/btn mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Profile
                    <FiTrendingUp className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}





const projects = [
  {
    name: 'NextJs Portfolio',
    description: "This website that you are currently on. Built with NextJs, Typescript and deployed on netlify.",
    tag: 'NextJs | TypeScript',
    href: 'https://souradeep-tech.netlify.app/',
  },
  {
    name: 'YOOM Online Meeting Platform',
    description: "Built with the latest Next.js and TypeScript, this project replicates Zoom, a widely used video conferencing tool. It enables users to securely log in, create meetings and access various meeting functionalities such as recording, scheduling meetings, screen sharing, and managing participants.",
    tag: 'NextJs | TypeScript | Clerk | getStream',
    href: 'https://yoom-online-meeting-platform.vercel.app/',
    
  },
  {
    name: 'MOVIX',
    description: "MOVIX is a platform built with React and Redux, enabling users to explore movies and TV shows through trailers, cast details, and robust search features, using the TMDB API for comprehensive data.",
    tag: 'ReactJs | Redux | Material-UI | API',
    href: 'https://movix2024.netlify.app/',
  },
  {
    name: 'Study Notion',
    description: "Study Notion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.",
    tag: 'ReactJs | NodeJs | ExpressJs | MongoDB | API',
    href: 'https://github.com/soura07/Study-Notion',
  },
  {
    name: 'MockMate AI - An AI Mock Interview Platform',
    description: " MockMate-AI is an AI interview coach that simulates interviews and delivers instant, personalized feedback.",
    tag: 'ReactJs | Clerk | Drizzle | Neon PostgreSQL | Gemini API',
    href: 'https://mock-mate-ai-silk.vercel.app/',
  },
  {
    name: 'Crypto Market Place Website',
    description: 'The Crypto Marketplace is a cryptocurrency platform built with ReactJS, React Router, and CoinGecko API, offering real-time data, price charts, market trends, and responsive design optimized for mobile and desktop views.',
    tag: 'ReactJs | Google-Charts | Coingecko-API',
    href: 'https://crypto-market-place-website.vercel.app/',
  },

  {
    name: 'Shopping Cart',
    description: 'Shopping-Cart is a React.js project using Redux and the Store API. Users can add items to their cart, view notifications for actions, and remove items from the cart, providing a smooth and responsive shopping experience.',
    tag: 'ReactJs | Redux | StoreAPI',
    href: 'https://shopping-cart-soura07.vercel.app/',
  },

  {
    name: 'Travel Agency Website',
    description: 'Travel-Agency-Website is a React.js project that incorporates multiple components, allowing users to choose travel dates and destinations. The website provides an interactive and user-friendly experience for planning trips.',
    tag: 'ReactJs | React Hooks | Date-picker library',
    href: 'https://travel-agency-website-mauve.vercel.app/',
  },

  {
    name: 'Typing Master',
    description: 'Typing Mater is a JavaScript-based project where users can assess their typing speed. It provides real-time feedback on words per minute (WPM) and accuracy, making it a simple and interactive tool to improve typing skills',
    tag: 'HTML | CSS | VanilaJs',
    href: 'https://typing-master-one.vercel.app/',
  },


]

function Project() {
  return (
    <section className="px-6 py-16 text-black dark:text-white transition-colors duration-300" id="projects">
      <div className="mx-auto max-w-6xl">
        <div className="mx-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span></h2>
            <p className="text-zinc-600 dark:text-zinc-400">Explore some of my featured projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project) => (
              <Card key={project.name} className="bg-zinc-100/50 dark:bg-zinc-900/50 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 hover:border-cyan-400 dark:hover:border-zinc-700 transition-all duration-300 hover:scale-105 flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-black dark:text-white">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow space-y-4">
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm line-clamp-3 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tag.split(' | ').map((tech, index) => (
                      <span key={index} className="badge badge-primary badge-outline text-xs px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 mt-auto">
                    <Link 
                      href={project.href} 
                      className="btn btn-primary btn-sm w-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A.5.5 0 0 0 1 3.5v.5a.5.5 0 0 0 .5.5h5.793L.646 10.146a.5.5 0 0 0 .708.708L7 5.207V11a.5.5 0 0 0 1 0V4.5a.5.5 0 0 0-.5-.5H8.636z"/>
                      </svg>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <Link 
              className="btn btn-outline btn-primary"
              href="https://github.com/soura07" 
              title='link to project in github repo'
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const stacks = {
  cloud: ['AWS S3', 'AWS Amplify', 'AWS Cognito','AWS SES', 'AWS Lamda' ,'AWS Lex'],
  frontend: ['Tailwind', 'HTML', 'CSS', 'NextJs', 'ReactJs'],
  backend: [ 'NodeJs', 'ExpressJs', 'Typescript', 'fast-api'],
  database: ['MySQL','Postgres', 'NoSQL', 'MongoDB'],
  Tools: ['Git', 'Github', 'Notion', 'Clerk'],
  cicd: ['C/C++', 'Python', 'Javascript', 'TypeScript']
}

const BadgeMarker = ({ heading, items }: { heading: string, items: string[] }) => (
  <div className="flex flex-col gap-4 pt-2">
    <h3 className="text-lg font-semibold text-white mb-2 mt-2">{heading}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => {
        return <div key={item} className="badge badge-primary badge-outline flex items-center gap-1.5 px-3 py-2">
          <CheckmarkIcon />
          <span className="text-xs">{item}</span>
        </div>
      })}
    </div>
  </div>
)

function TechStack() {
  return (
    <section className="px-6 py-16 text-white" id="techstack">
      <div className="mx-auto max-w-4xl">
        <div className="mx-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Stack</span>
            </h2>
            <p className="text-zinc-400">Technologies and tools I work with</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 transition-colors duration-300 shadow-xl">
              <CardContent className="p-8">
                <BadgeMarker heading="Programming Languages" items={stacks.cicd} />
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 transition-colors duration-300 shadow-xl">
              <CardContent className="p-8">
                <BadgeMarker heading="Frontend" items={stacks.frontend} />
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 transition-colors duration-300 shadow-xl">
              <CardContent className="p-8">
                <BadgeMarker heading="Backend" items={stacks.backend} />
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 transition-colors duration-300 shadow-xl">
              <CardContent className="p-8">
                <BadgeMarker heading="Database" items={stacks.database} />
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 transition-colors duration-300 shadow-xl">
              <CardContent className="p-8">
                <BadgeMarker heading="Tools" items={stacks.Tools} />
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 transition-colors duration-300 shadow-xl">
              <CardContent className="p-8">
                <BadgeMarker heading="Cloud" items={stacks.cloud} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="px-6 py-16 border-t border-zinc-200 dark:border-zinc-800 text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-12 mx-4">
          <div className="text-center">
            <Card className="bg-zinc-100/30 dark:bg-zinc-900/30 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
              <CardContent className="p-8">
                <blockquote className="text-lg font-medium text-zinc-600 dark:text-zinc-300 mb-4 pt-5">
                  "Arise, awake, and stop not until the goal is reached"
                </blockquote>
                <cite className="text-zinc-500 dark:text-zinc-400">- Swami Vivekananda</cite>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="rounded-full w-12 h-12">
                  <Image
                    src="/img/profile-left.png"
                    alt="Souradeep profile"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white">Souradeep Ghosh</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">Full Stack Developer</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="tooltip" data-tip="GitHub">
                <Link href="https://github.com/soura07" className="btn btn-circle btn-ghost hover:btn-primary" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </Link>
              </div>
              
              <div className="tooltip" data-tip="LinkedIn">
                <Link href="https://www.linkedin.com/in/souradeep07/" className="btn btn-circle btn-ghost hover:btn-primary" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </Link>
              </div>

              <div className="tooltip" data-tip="Email">
                <Link href="mailto:souradeepg48@gmail.com" className="btn btn-circle btn-ghost hover:btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 13.5L2 7v10c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V7l-10 6.5zM12 11L22 4H2l10 7z"/>
                  </svg>
                </Link>
              </div>

              <div className="tooltip" data-tip="X">
                <Link href="https://x.com/Souradeep_2003_" className="btn btn-circle btn-ghost hover:btn-primary" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.0960V13.0956Z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              Copyright © {(new Date()).getFullYear()} Souradeep Ghosh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Social() {
  return (
    <div className="flex flex-wrap gap-4 pt-6">
      <Link 
        className="relative group overflow-hidden rounded-xl p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25" 
        href="https://github.com/soura07" 
        title="github link" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(30,30,30,0.9) 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 10px 25px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" className="relative z-10 text-white group-hover:text-cyan-300 transition-colors duration-300">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </Link>
      
      <Link 
        className="relative group overflow-hidden rounded-xl p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25" 
        href="https://www.linkedin.com/in/souradeep07/" 
        title="linkedin page" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(30,30,30,0.9) 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 10px 25px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" className="relative z-10 text-white group-hover:text-cyan-300 transition-colors duration-300">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </svg>
      </Link>
      
      <Link 
        className="relative group overflow-hidden rounded-xl p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25" 
        href="mailto:souradeepg48@gmail.com" 
        title="email address"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(30,30,30,0.9) 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 10px 25px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 text-white group-hover:text-cyan-300 transition-colors duration-300">
          <path d="M12 13.5L2 7v10c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V7l-10 6.5zM12 11L22 4H2l10 7z" />
        </svg>
      </Link>

      <Link 
        className="relative group overflow-hidden rounded-xl p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25" 
        href="https://x.com/Souradeep_2003_" 
        title="X account" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(30,30,30,0.9) 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 10px 25px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="relative z-10 text-white group-hover:text-cyan-300 transition-colors duration-300">
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.0960V13.0956Z"/>
        </svg>
      </Link>
    </div>
  )
}

const CheckmarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
  </svg>
)
