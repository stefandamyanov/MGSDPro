import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Menu',
      links: [
        {
          text: 'Who We Are',
          href: getPermalink('/landing/who-we-are'),
        },
        {
          text: 'What We Do',
          href: getPermalink('/landing/what-we-do'),
        },
        {
          text: 'Our Process',
          href: getPermalink('/landing/our-process'),
        },
      {
          text: 'Services',
          href: getPermalink('/landing/services'),
        },
       {
          text: 'Contact',
          href: getPermalink('/landing/contact'),
        }, 
      ],
    },
    {
      text: 'Services',
      links: [
       {
         text: 'Employer of Record',
         href: '/landing/services',
       },
       {
         text: 'Outsourcing',
         href: '/landing/services#outsourcing-title',
       },
        {
          text: 'Marketing',
          href: '/landing/services#marketing-title',
        },
   //     {
   //       text: 'Contact',
   //       href: '#',
   //     },
   //     {
   //       text: 'Terms',
   //       href: getPermalink('/terms'),
   //     },
   //     {
   //       text: 'Privacy policy',
   //       href: getPermalink('/privacy'),
   //     },
      ],
    },
    {
      text: 'About',
      href: '/landing/who-we-are',
    },
  //  {
  //    text: 'Services',
  //    href: '/landing/services',
  //  },
  //  {
  //    text: 'What We Do',
  //    href: '/landing/what-we-do',
  //  },
    {
      text: 'Contact',
      href: '/landing/contact',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    { type: 'button', text: 'Download our free guide', href: '/landing/free-guide' }
  ],
};
  
export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/landing/who-we-are' },
     //   { text: 'Blog', href: '/blog' },
        { text: 'Contact', href: '/landing/contact' },
        { text: 'Process', href: '/landing/our-process' },
        { text: 'Services', href: '/landing/services' },
   //     { text: 'What We Do', href: '/landing/what-we-do' },
   //     { text: 'Shop', href: '#' },
      ],
    },
    {
      title: 'Social',
      links: [
   //     { text: 'Contact Us', href: '/landing/contact'},
   //   { text: 'UK Phone:', href: '#' },
   //     { text: 'info@mgsdpro.com', href: 'mailto:info@mgsdpro.com' },
        { text: 'Facebook', href: 'https://www.facebook.com/mgsdpro' },
        { text: 'LinkedIn', href: 'https://www.linkedin.com/company/mgsd-pro/' },
        { text: 'Twitter', href: 'https://twitter.com/MGSDPro' },
      //  { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Terms of use',
      links: [
     //   { text: 'Terms', href: '/terms' },
        { text: 'Privacy', href: '/privacy' },
        { text: 'What We Do', href: '/landing/what-we-do' },
    //    { text: 'Electron', href: '#' },
    //    { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    
    {
      title: 'Articles',
      links: [
        { text: 'Blog', href: '/blog' },
    //    { text: 'Community Forum', href: '#' },
    //    { text: 'Professional Services', href: '#' },
    //    { text: 'Skills', href: '#' },
    //    { text: 'Status', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
 //   { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/MGSDPro' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/mgsd-pro/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/mgsdpro' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss') },
   // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(/src/assets/images/Sideways-Middle1.png)]"></span>
    <a class="text-blue-600 hover:underline dark:text-gray-200" href="/">MGSD Pro 2023 </a> | <a href="tel:+359 (0) 888 443 993">+359 (0) 888 443 993</a> | <a href="tel:+44 (0) 779 5072078">+44 (0) 779 5072078</a> | <a href="mailto: info@mgsdpro.com">info@mgsdpro.com</a> | All rights reserved.
  `,
};
