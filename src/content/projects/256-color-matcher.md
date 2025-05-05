---
title: 256 Color Matcher
description: A simple web app to find the closest standard 256 color to a given input color
publishDate: '14 Nov 2020'
isFeatured: true
links:
  github: 'https://github.com/bradleyburgess/256-color-matcher'
  demo: 'https://256-color-matcher.netlify.app'
seo:
  image:
    src: 'https://images.unsplash.com/photo-1500042600524-37ecb686c775?q=80&w=1200&h=675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    alt: 256 Color Matcher
---

## Project overview

A tiny CLI tool for picking the closest 256-color/8-bit match to a given RGB or
hex color — perfect for theme designers, terminal tinkerers, and anyone working
with ANSI colors.

## Features

- Pure HTML, CSS and JS — no frameworks
- Hex and RGB modes (updates color texts and inputs)
- 18kb bundle size
- 3 npm dependencies
- Bundled with webpack
- Tests for all non-vendor library modules (`jest`)
- Last color saved to `localStorage` and retrieved on next visit

## Project story

I went through a *huge* terminal phase. I still love the terminal and do pretty
much everything I can do on the command line. I find it often much faster than
reaching for a GUI. I had a very elaborate ViM setup at one point, and took
styling pretty seriously. I wanted to be able to get standard 256 colors close
to certain palettes, but wanted a quick way to find these. Thus
`256-color-matcher` was born