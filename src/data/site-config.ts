export type Image = {
  src: string;
  alt?: string;
  caption?: string;
  width: number;
  height: number;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  website: string;
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
};

const heroText = `
I'm a developer & musician. Basically, I really like things with keyboards. 
This is my developer portfolio and blog. If you're here for music, you 
probably want my [other site](https://music.bradley-burgess.com).`;

const siteConfig: SiteConfig = {
  website: 'https://dev.bradley-burgess.com',
  title: 'Bradley Burgess',
  subtitle: 'Developer & Musician',
  description: 'Blog and portfolio for Bradley Burgess',
  image: {
    src: '/headshot-6x5.jpg',
    alt: 'Bradley Burgess | Developer & Musician',
    width: 1200,
    height: 1000,
  },
  headerNavLinks: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Projects',
      href: '/projects',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
    // {
    //     text: 'Tags',
    //     href: '/tags',
    // },
  ],
  footerNavLinks: [
    {
      text: 'Contact',
      href: '/contact',
    },
    {
      text: 'Terms',
      href: '/terms',
    },
  ],
  socialLinks: [
    {
      text: 'Bluesky',
      href: 'https://bsky.app/profile/bburgesskeys.bsky.social/',
    },
    {
      text: 'GitHub',
      href: 'https://github.com/bradleyburgess/',
    },
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bburgesskeys/',
    },
  ],
  hero: {
    title: "Hi, I'm Bradley",
    text: heroText,
    image: {
      src: '/headshot-6x5.jpg',
      alt: 'Bradley in a black shirt and black jacket, smiling at the camera',
      width: 1200,
      height: 1000,
    },
    actions: [
      {
        text: 'Get in touch',
        href: '/contact',
      },
      {
        text: 'Read my story',
        href: '/about',
      },
    ],
  },
  // subscribe: {
  //     title: 'Subscribe to Dante Newsletter',
  //     text: 'One update per week. All the latest posts directly in your inbox.',
  //     formUrl: '#',
  // },
  postsPerPage: 8,
  projectsPerPage: 8,
};

export default siteConfig;
