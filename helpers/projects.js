const projects = [
   {
    id: 4,
    img: 'universityFront.png',
    folderInfo: 'Front End Clone',
    tags: ['Html', 'Css Grid', 'Css Flexbox', 'Responsive Design'],
    title: 'University Landing Page',
    description: 'Front end clone where the goal was to build out a landing page and get it looking as close to the design as possible.',
    gitUrl: 'https://github.com/CinArb2/digital-university.git',
    urlLive: 'https://cinarb2.github.io/digital-university/'
  },
  {
    id: 3,
    img: 'landing1.png',
    folderInfo: 'Landing Page',
    tags: ['Next.js', 'Css Modules','Responsive Design', 'Javascript'],
    title: 'Agrointegral VG',
    description: 'Built a modern and professional landing page based on the business needs. Build on Next js, SEO optimized, fully responsive layout',
    gitUrl: 'https://github.com/CinArb2/landing-Next-js.git',
    urlLive: 'https://www.agrointegralvg.com/',
  },
  {
    id: 2,
    img: 'oneWayc.gif',
    tags: ['React', 'Next JS', 'Css Modules', 'GraphQL'],
    folderInfo: 'Headless Website',
    title: 'The One Way Journey Blog',
    description: 'I took their existing wordpress blog and turned it into a headless CMS with Next.js on the frontend and GraphCMS as a backend only management system. Using GRaphCMS the content is accessible via GRAPHQL API. User can continue uploading content to the blog through the GRAPHCMS manager very easily.',
    gitUrl: 'https://github.com/CinArb2/TheOneWayJourney-blog.git',
    urlLive: 'https://www.theonewayjourney.com/'
  },
  {
    id: 1,
    img: 'ibuyGifc.gif',
    tags: ['React', 'Redux', 'Node.js', 'Express', 'Firebase'],
    folderInfo: 'Full Stack App',
    title: 'IBuy Marketplace',
    description: 'Built a fictional Marketplace App from Scratch.   For the backend side, I created the REST APIs with Express and use these endpoints in the React frontend to interact with our backend part. For the front end I used Redux for state management,  Firebase to handle product and shop images, and followed the best practices to implement Authentication using JSON Web Tokens (JWT).',
    gitUrl: 'https://github.com/CinArb2/full-stack-marketplace-app.git',
    urlLive: 'https://ibuy.netlify.app/'
  }
]

export default projects;