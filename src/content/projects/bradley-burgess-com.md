---
title: 'Bradley Burgess | organist & pianist'
description: Static site for the “other half” of me — all my music activities
publishDate: '1 May 2022'
isFeatured: true
links:
  github: https://github.com/bradleyburgess/bradley-burgess.com_music
  other:
    href: https://music.bradley-burgess.com
    text: Live site
seo:
  image:
    src: '/project-bradley-burgess_music.png'
    alt: Bradley Burgess music site screenshot
---

## Project overview

This is the static site for my music activities. The site has taken many forms
over the years. It started out as a Wordpress site, but back then I didn't know
very much about web development, and the site was subject to some SQL attacks.
After that I decided to move to Squarespace, and that site lasted a little
while. After I got more serious about development, I launched a Gatsby.js site.
It served its purpose, but I wasn't thrilled about the performance. 

I eventually discovered 11ty, and loved it from the first moment. It was like
Jekyll and Hugo, but I loved the simplicity it provided while at the same time
being Javascript-centric. (This was back before I had experience in any other
languages.) 11ty is great for purely static sites, but I wanted a *tiny* bit of
backend functionality, and didn't want an entirely separate backend. Then Astro
came out, and I jumped on it. I still love 11ty, but Astro is now my go-to SSG
framework, being simultaneously very powerful and simple.

## Technical details

The site is built with Astro, and uses a very little bit of Javascript. The main
areas that are client-side are the music playlist area and the contact form. The
music playlist I built from scratch and is a Web Component. The contact form is
a React component that communicates with an Astro api on the backend and sends
me a Telegram message. Styling is done almost completely with Tailwind.