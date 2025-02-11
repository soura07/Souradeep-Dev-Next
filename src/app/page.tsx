import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="font-schibstedGrotesk">
      <Hero />
      <About />
      <CodingProfiles />
      <Project />
      <TechStack />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(106,207,214,0.16)_0%,rgba(106,207,214,0)_100%)] px-6 py-16 text-[#171618]" id="home">
      <div className="mx-auto max-w-3xl">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 mx-4">
          <div className="item space-y-20">
            <div>
              <h1 className="text-4xl">Hey! I'm Souradeep Ghosh</h1>
              <p className="text-zinc-1000">Software <span className="font-bricolage-grostesque text-transparent bg-clip-text bg-gradient-to-r from-[#f60] to-[#f00ab3]">Developer</span> based in India</p>
              <Social />
            </div>
          </div>
          <div className="item">
            <Image
              src="/img/profile-left.png"
              alt="souradeep photo"
              sizes="100vw"
              width={600}
              height={500}
              priority={false}
              // loading="lazy"
              // className="object-fit rounded-3xl bg-[rgba(255,255,255,0.85)] shadow-[rgb(228,229,233)_0px_0px_0px_0.5px,rgba(228,229,233,0.6)_0px_0px_0px_1px,rgb(249,249,251)_0px_0px_0px_3.5px,rgb(243,244,247)_0px_0px_0px_4px] origin-bottom -rotate-1"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="px-6 py-16 text-[#171618]" id="about">
      <div className="mx-auto max-w-3xl">
        <div className="grid gap-4 mx-4">
          <div className="flex items-start flex-[1_0_0px] flex-col flex-nowrap gap-1 h-auto justify-start p-0">
            <h2 className="text-xl font-medium">Abo<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f60] to-[#f00ab3]">ut Me</span></h2>
          </div>
          <div className="text-sm">
          <p className="text-zinc-600">I am a Software Developer specializing in <strong> Full Stack Development </strong> with expertise in <strong> MERN and Next.js.</strong> With a strong foundation in problem-solving, I’ve solved <strong> 1500+ algorithmic </strong> challenges on platforms like <strong> LeetCode and GeeksforGeeks</strong>, enhancing my analytical and technical skills. I combine a technical background with a passion for backend development and building scalable, impactful solutions. Dedicated
             to continuous learning, I thrive in collaborative environments and aim to deliver value-driven results in any corporate setting.</p>
          <p className="pt-3 text-zinc-600">
            In <strong> 2025</strong>, I will complete my <strong> B.Tech in Electronics and Communications Engineering from Narula Institute of Technology, West Bengal, India. </strong>
          </p>
          {/* <p className="pt-3 text-zinc-600">
            I have participated in multiple hackathons, such as Hack4Bengal, where I led my team to secure 4th place out of 50 teams. Additionally, I have contributed to <strong>open-source projects </strong>
          </p> */}

          </div>
        </div>
      </div>
    </section>
  )
}

const codingprofiles = [
  {
    name: 'LeetCode',
    description: '"Maintained a streak of solving problems daily for 365 days on LeetCode, solving over 650+ problems and demonstrating consistency and dedication to continuous learning',
    href: 'https://leetcode.com/u/souradeep_ghosh/',
  },
  {
    name: 'GeeksforGeeks',
    description: 'Solved over 400 problems on GeeksforGeeks. Ranked 25th among 2500+ college-mates, consistently solving complex DSA problems.',
    href: 'https://www.geeksforgeeks.org/user/souradeep_4n4/?',
  },
  {
    name: 'Coding Ninjas',
    description: 'Solved over 200 problems on Coding Ninjas',
    href: 'https://www.naukri.com/code360/profile/Souradeep_89',
  },
];

function CodingProfiles() {
  return (
    <section className="px-6 py-16 text-[#171618]" id="codingprofiles">
      <div className="mx-auto max-w-3xl">
        <div className="mx-4">
          <div className="flex items-start flex-[1_0_0px] flex-col flex-nowrap gap-1 h-auto justify-start p-0">
            <h2 className="text-xl font-medium">Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f60] to-[#f00ab3]">Profiles</span></h2>
          </div>

          <ul role="list" className="divide-y divide-gray-100">
            {codingprofiles.map((profile) => (
              <li key={profile.name} className="flex justify-between gap-x-6 py-5">
                <Link href={profile.href} className="flex justify-between w-full">
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="font-medium text-sm leading-6 text-[#171618]">{profile.name}</p>
                      <p className="mt-1 text-sm leading-5 text-gray-500">{profile.description}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
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
    href: 'https://github.com/soura07/YOOM_Online_Meeting_Platform',
    
  },
  {
    name: 'MOVIX',
    description: "MOVIX is a platform built with React and Redux, enabling users to explore movies and TV shows through trailers, cast details, and robust search features, using the TMDB API for comprehensive data.",
    tag: 'ReactJs | Redux | Material-UI | API',
    href: 'https://github.com/soura07/MOVIX-ENHANCED-MOVIE-RATINGS-AND-CAST-INSIGHTS',
  },
  // {
  //   name: 'Study Notion',
  //   description: "Study Notion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.",
  //   tag: 'ReactJs | NodeJs | ExpressJs | MongoDB | API',
  //   href: 'https://github.com/soura07/Study-Notion',
  // },
  {
    name: 'Crypto Market Place Website',
    description: 'The Crypto Marketplace is a cryptocurrency platform built with ReactJS, React Router, and CoinGecko API, offering real-time data, price charts, market trends, and responsive design optimized for mobile and desktop views.',
    tag: 'ReactJs | Google-Charts | Coingecko-API',
    href: 'https://github.com/soura07/Crypto-Market-Place-Website',
  },

  {
    name: 'Shopping Cart',
    description: 'Shopping-Cart is a React.js project using Redux and the Store API. Users can add items to their cart, view notifications for actions, and remove items from the cart, providing a smooth and responsive shopping experience.',
    tag: 'ReactJs | Redux | StoreAPI',
    href: 'https://github.com/soura07/Shopping-Cart',
  },

  {
    name: 'Travel Agency Website',
    description: 'Travel-Agency-Website is a React.js project that incorporates multiple components, allowing users to choose travel dates and destinations. The website provides an interactive and user-friendly experience for planning trips.',
    tag: 'ReactJs | React Hooks | Date-picker library',
    href: 'https://github.com/soura07/Travel-Agency-Website',
  },

  {
    name: 'Typing Master',
    description: 'Typing Mater is a JavaScript-based project where users can assess their typing speed. It provides real-time feedback on words per minute (WPM) and accuracy, making it a simple and interactive tool to improve typing skills',
    tag: 'HTML | CSS | VanilaJs',
    href: 'https://github.com/soura07/Typing-Master',
  },


]

function Project() {
  return (
    <section className="px-6 py-16 text-[#171618]" id="projects">
      <div className="mx-auto max-w-3xl">
        <div className="mx-4">
          <div className="flex items-start flex-[1_0_0px] flex-col flex-nowrap gap-1 h-auto justify-start p-0">
            <h2 className="text-xl font-medium">Proj<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f60] to-[#f00ab3]">ects</span></h2>
          </div>

          <ul role="list" className="divide-y divide-gray-100">
            {projects.map((project) => (
              <li key={project.name} className="flex justify-between gap-x-6 py-5">
                <Link href={project.href} className="flex justify-between w-full">
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="font-medium text-sm leading-6 text-[#171618]">{project.name}</p>
                      <p className="mt-1 text-sm leading-5 text-gray-500">{project.description}</p>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="rounded-lg bg-gray-50 border border-solid border-[rgb(232,236,241)] px-3 py-1 text-xs text-gray-600 hover:bg-gray-100">{project.tag}</p>
                  </div>
                </Link>

              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center mt-8">
            <Link className="flex justify-center items-center align-middle bg-[#171618] text-white text-sm rounded-lg gap-1.5 px-4 py-2" href="https://github.com/soura07" title='link to project in github repo'>
              <span>See all</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const stacks = {
  cloud: ['AWS', 'GCP'],
  frontend: ['Tailwind', 'HTML', 'CSS', 'NextJs', 'ReactJs'],
  backend: [ 'NodeJs', 'ExpressJs', 'Typescript', 'fast-api'],
  database: ['MySQL','Postgres', 'NoSQL', 'MongoDB'],
  Tools: ['Git', 'Github', 'Notion', 'Clerk'],
  cicd: ['C/C++', 'Java', 'Python', 'Javascript']
}

const BadgeMarker = ({ heading, items }: { heading: string, items: string[] }) => (
  <div className="flex flex-col gap-1">
    <h2 className="text-sm">{heading}</h2>
    <div className="content-start items-start flex flex-none flex-row flex-wrap gap-2 h-min justify-start overflow-hidden relative w-full">
      {items.map((item) => {
        return <div key={item} className="flex flex-row flex-nowrap items-center gap-1.5 justify-center border px-2 py-1 border-solid border-[rgb(232,236,241)] text-xs rounded-lg">
          <CheckmarkIcon />
          <span>{item}</span>
        </div>
      })}
    </div>
  </div>
)

function TechStack() {
  return (
    <section className="px-6 py-16 text-[#171618]" id="techstack">
      <div className="mx-auto max-w-3xl">
        <div className="mx-4">
          <div className="flex items-start flex-[1_0_0px] flex-col flex-nowrap gap-1 h-auto justify-start p-0">
            <h2 className="text-xl font-medium">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f60] to-[#f00ab3]">Stacks</span>
            </h2>
          </div>

          {/* Stack */}
          <div className="flex flex-col gap-4 py-4">
            <BadgeMarker heading="Programming Language" items={stacks.cicd} />
            <BadgeMarker heading="Frontend" items={stacks.frontend} />
            <BadgeMarker heading="Backend" items={stacks.backend} />
            <BadgeMarker heading="Database" items={stacks.database} />
            <BadgeMarker heading="Tools" items={stacks.Tools} />
            <BadgeMarker heading="Cloud" items={stacks.cloud} />

          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="px-6 py-16">
      <div className="mx-auto max-w-lg">
        <div className="grid gap-12 mx-4 text-center">
          <div className="flex flex-col gap-2">
            <span className="font-medium text-lg text-gray-500">
            "Arise, awake, and stop not until the goal is reached"
            </span>
            <span className="font-medium text-gray-500">
              - Swami Vivekananda
            </span>
          </div>

          <div className="flex flex-row gap-2 justify-center text-sm">
            <span>Copyright © {(new Date()).getFullYear()}</span>
            <span>・</span>
            <span>Souradeep Ghosh</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Social() {
  return (
    <div className="flex gap-4 pt-6">
      <Link className="inline-flex justify-center items-center rounded-xl p-2 bg-[#171618] text-white hover:bg-zinc-700 focus-visible:outline" href="https://github.com/soura07" title="github link">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </Link>
      <Link className="inline-flex justify-center items-center rounded-xl p-2 bg-[#171618] text-white hover:bg-zinc-700 focus-visible:outline" href="https://www.linkedin.com/in/souradeep07/" title="linkedin page">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
          </path>
        </svg>
      </Link>
      <Link className="inline-flex justify-center items-center rounded-xl p-2 bg-[#171618] text-white hover:bg-zinc-700 focus-visible:outline" href="mailto:iamsouradeep99@gmail.com" title="email address">
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 13.5L2 7v10c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V7l-10 6.5zM12 11L22 4H2l10 7z" />
  </svg>
</Link>

      <Link className="inline-flex justify-center items-center rounded-xl p-2 bg-[#171618] text-white hover:bg-zinc-700 focus-visible:outline" href="https://x.com/Souradeep_2003_" title="X account">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
          </path>
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