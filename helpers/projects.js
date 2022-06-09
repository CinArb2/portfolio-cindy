const projects = [
  {
    id: 4,
    img: 'roomHomepage.jpeg',
    folderInfo: 'Front End Clone',
    tags: ['Html', 'Css Grid', 'Css Flexbox', 'Responsive Design', 'Javascript'],
    title: 'Room Homepage',
    description: 'Front end mentor challenge where the goal is to build out an e-commerce homepage and get it looking as close to the design as possible. Users can view the optimal layout for the site depending on their device\'s screen size. See hover states for all interactive elements on the page. Navigate the slider using either their mouse/trackpad or keyboard.',
    gitUrl: 'https://github.com/CinArb2/room-homepage-master.git',
    urlLive: 'https://cinarb2.github.io/room-homepage-master/',
  },
   {
    id: 3,
    img: 'universityFront.png',
    folderInfo: 'Front End Clone',
    tags: ['Html', 'Css Grid', 'Css Flexbox', 'Responsive Design'],
    title: 'University Landing Page',
    description: 'Front end clone where the goal was to build out a landing page and get it looking as close to the design as possible.',
    gitUrl: 'https://github.com/CinArb2/digital-university.git',
    urlLive: 'https://cinarb2.github.io/digital-university/'
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
    description: 'React, Redux, Node.js, Express.js Built a fictional Marketplace App from Scratch.   For the backend side, I created the REST APIs with Express and use these endpoints in the React frontend to interact with our backend part. For the front end I used Redux for state management,  Firebase to handle product and shop images, and followed the best practices to implement Authentication using JSON Web Tokens (JWT).',
    gitUrl: 'https://github.com/CinArb2/full-stack-marketplace-app.git',
    urlLive: 'https://ibuy.netlify.app/'
  }
]

export default projects;