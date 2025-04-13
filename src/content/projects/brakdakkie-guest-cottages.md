---
title: 'Brakdakkie Guest Cottages'
description: Static site for Brakdakkie Guest Cottages, an authentic Karoo experience
publishDate: '1 May 2022'
isFeatured: true
links:
  github: https://github.com/bradleyburgess/brakdakkie_11ty
  other:
    href: https://brakdakkie.co.za
    text: Live site
seo:
  image:
    src: '/project-brakdakkie.png'
    alt: Brakdakkie Guest Cottages screenshot
---

## Project overview

This is the website for _Brakdakkie Guest Cottages_, a bed and breakfast in
Prince Albert, located in the Karoo, South Africa. The site is built with
[11ty](https://11ty.dev), and it pulls data from [Hygraph](https://hygraph.com/)
(formerly GraphCMS). When she makes changes in the CMS, it automatically
rebuilds and redeploys via Netlify build hooks.

## Project story

I built this for my sister, who runs the guesthouse. They had a very old
drag-and-drop-builder site, and it was in dire need of a refresh. I came up with
some designs in Figma, and after she approved them and gave me her requirements,
I got to work building.

The guesthouse is rustic and authentic, which sets it apart from other
accommodations in the town. I therefore didn't want to build something that
looked like a generic bed and breakfast site. I wanted something with a little
personality, just like the cottages themselves had. This led me to a design that
was clean, yes, but also a mix of elegant and slightly quirky. This I achieved
mainly with the colors (off-white, grey, splashes of red) and fonts (Kaushan
Script for the headings).

## Technical decisions

My sister didn't have any technical requirements beyond the need for her
to be able to update content herself. So I knew I needed a CMS of some sort.

I wanted to minimize costs for her, so from the outset I discarded solutions
like Wordpress. (There are also security considerations with e.g. Wordpress,
like the need to stay on top of updates for the core software and any plugins
used.)

### SSG + Headless CMS

I decided instead to go with a SSG (Static Site Generator) and headless CMS
solution. Static sites have two main advantages here: Hosting is extremely cheap
(or free, with e.g. [Netlify](https://www.netlify.com/), which I chose), and
static sites generally have much fewer security vulnerabiities, providing your
hosting is secure.

This modular approach, headless CMS + SSG, also allowed the possibility of
swapping out the ”frontend”, which I did need to do. I originally built the site
with [Gatsby](https://www.gatsbyjs.com/), and — because Gatsby uses GraphQL —
[Hygraph](https://hygraph.com/) (formerly GraphCMS). Despite many hours of
troubleshooting, though, I just couldn't get the performance I was looking for
with Gatsby. Load times were slower than they should be, and the Lighthouse
scores weren't encouraging.

It seemed many developers had the same experience, so I eventually migrated from
Gatsby to 11ty. I instantly fell in love with it, as it was very flexible,
minimal, and produced completely static sites with no Javascript by default.

### Javascript

There isn't a whole lot of Javascript on the site. I used [Zach
Leatherman](https://bsky.app/profile/zachleat.com)'s `seven-miniute-tabs`, which
is a minimal, accessible tabs Web Component. I also used an animated `<details>`
/ accordion library that I found on CSS Tricks. The review carousel on the
landing page I made from scratch.

### CSS

The styling is all ordinary Sass, with my then best attempt at BEM methodology.
I went with Sass over vanilla CSS because I wanted to be able to split the
components into their own files to make maintenance easier.

## Lessons learned

This was one of my first fully-fledged sites, so I probably would do things
slightly differently now. I definitely would not use GraphQL, but that direction
was forced because I was using Gatsby, and I fell into the trap of using “the
hot thing”, which Gatsby was at the time. I do think a headless CMS + SSG is
still the right fit for this site, as the content is not updated very often. But
I might use something like [Decap CMS](https://decapcms.org/) (formerly Netlify
CMS) instead for the CMS; it uses a Git workflow, where you login to the CMS,
and changes are pushed directly to the Git repository. Yay for flat files!
