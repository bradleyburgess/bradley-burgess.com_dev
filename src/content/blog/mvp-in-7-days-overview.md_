---
title: 'Building an MVP in 7 Days: Overview'
excerpt: >
  Join me as I build an MVP for a project I've been wanting to do for ages — 
  QuireHub, a choir management app. This article lays out the project 
  requirements, basic technical decisions, and features.
publishDate: '10 Apr 2025'
isFeatured: true
tags:
  - mvp-in-7-days
seo:
  image:
    src: '/mvp-in-7-days.png'
    alt: MVP in 7 days
---

Today we begin a fun new journey! I'm going to be building an MVP for a project
I've been wanting to do for quite some time, and I'm going to do it in seven
days flat.

Why seven days? Well, a number of reasons. But the biggest part is motivation
and [Parkinson's Law](https://asana.com/resources/parkinsons-law) — the
principle that work expands to fill the allotted time. By giving myself seven
days, that's how long it'll take. (At least in theory!)

## Project overview

The project is QuireHub, which will be a web app for managing choirs. As someone
who has managed a few choirs, the administration aspect can be quite
overwhelming at times; there are lots of moving parts, including managing
membership, tracking attendance, planning repertoire, sending reminders,
scheduling rehearsals and performances, and more.

I'll be building it with [Django](https://www.djangoproject.com/). I chose
Django because I'm already familiar with Python, and because its “batteries
included” nature means it's pretty quick to get something off the ground. I
could have opted for [Next.js](https://nextjs.org/), but it's been some time
since I've used React extensively and I didn't really want to get bogged down
learning new React and Next features. I want to get to building. As a solo dev,
there is also a lot more complexity with full-stack Javascript vs. frameworks
like Django, Rails, or Laravel. Rails and Laravel would also have been good
choices in my estimation, but I'm not very familiar with either at this point.

For styling I've opted for [DaisyUI](https://daisyui.com/), which is an
open-source component library for [Tailwind](https://tailwindcss.com/). Modern
CSS is fantastic, but vanilla CSS would add a lot of overhead and take much
longer. Bootstrap would also be ok, but… it's Bootstrap and it's 2025. (Just
kidding. Sorta. It is possible to make Bootstrap look good, but I don't want to
spend time customizing it and I don't want to pay for a theme at this stage.)
There are of course other options, but Tailwind is almost a default starting
point these days, and DaisyUI allows me to move even quicker.

If I really wanted to get fancy, I could opt for
[DRF](https://www.django-rest-framework.org/) or [Django
Ninja](https://django-ninja.dev/) and make the backend and frontend completely
separate. But — again — that adds a lot of time to the building process. Using 
Django templates as the starting point allows me to move much faster.

I will be adding [HTMX](https://htmx.org/) and possibly
[Alpine.js](https://alpinejs.dev/) for client-side interactivity and reactivity,
but those will be UI enhancement elements, rather than replacing the templates
with e.g. React.

## Project features

This will be an MVP, but I think it's important to [“begin with the end in
mind”](https://asana.com/resources/begin-with-the-end-in-mind) to some degree.
Having a sense of what the final product might be will help me make some
technical decisions at the beginning. Many features can be implemented after the
initial MVP is built, but some might be difficult to implement if I don't make
accommodations for them at the beginning.

A great example of this is **multi-tenancy**. I would like to be able to release
this as an open-source and self-hostable project, but it would also be great to
have a hosted, paid version. This kind of approach is taken by many popular
open-core products on the market today. The hosted version would be
multi-tenant, but the self-hosted version should only allow a single tenant
(choir). While it is easier to just build the single-tenant version from the
start, if I don't make accommodations for multi-tenancy at the beginning, it
might be quite difficult to change later on after the initial infrastructure is
in place. 

So, with that said, here is a list of features that I could foresee being
implemented in the final product:

- **Multi-tenancy:** Support for multiple choirs in hosted (paid) version.
  Potentially, a user of the app could be a regular member of one choir and an
  admin in another
- **Membership:** Adding and managing members of choirs, including contact info,
  voice part, admin privileges
- **Admins:** Admin privileges for the owner of the choir, as well as designated
  choir administrators (who may or may not be singing members of the choir)
- **Events:** Creating rehearsals, performances, and other custom events (set
  core events, but ability for admins to create custom events)
- **Attendance tracking:** Tracking of attendance for events
- **Repertoire:** Uploading of music, either `.pdf` scores or `.mp3` recordings
  / practice tracks
- **Announcements:** Admins can send email (perhaps later text as well)
  reminders and other announcements / communications
- **Seating charts:** Creation of seating charts for performances