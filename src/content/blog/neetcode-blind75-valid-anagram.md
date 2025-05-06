---
title: "NeetCode Blind75: #2 — Valid Anagram"
description: "Three different approaches to checking if two strings are anagrams: two hash-based and one sorted."
publishDate: "2 May 2025"
isFeatured: false
seo:
  image:
    src: 'https://images.unsplash.com/photo-1621243545234-a6b0bae02a68?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    alt: ''
tags:
  - neetcode
  - dsa
  - python
---

Today I'm tackling the next NeetCode Blind75 problem: Valid Anagram.

## Problem

*Given two strings `s` and `t`, the task is to return `true` if they are
anagrams of each other, and `false` otherwise.*

Pretty simple in theory: both strings should contain the same letters in the
same frequency, just potentially in a different order.

---

## My Solutions

I wrote three implementations and tested them all against the same inputs to
make sure the logic was sound. Here's what I tried:

### 1. `is_anagram_hash`

This builds two separate hash tables and compares them. It’s conceptually
simple, but requires space for two dictionaries.

```python
def is_anagram_hash(s1: str, s2: str) -> bool:
    hash1 = dict()
    hash2 = dict()
    for letter in s1:
        increment_letter(hash1, letter)
    for letter in s2:
        increment_letter(hash2, letter)
    return hash1 == hash2
```

### 2. `is_anagram_hash_optimized`

Instead of creating two dictionaries, this one uses a single hash and updates
counts in-place. The first loop over the first string increments counts; the
second decrements. If any value isn’t zero by the end, the strings aren’t
anagrams.

```python
def is_anagram_hash_optimized(s1: str, s2: str) -> bool:
    hash = dict()
    for letter in s1:
        update_letter(hash, letter, UpdateMode.INCREMENT)
    for letter in s2:
        update_letter(hash, letter, UpdateMode.DECREMENT)
    for letter in hash:
        if hash[letter] != 0:
            return False
    return True
```

### 3. `is_anagram_sorted`

This one just sorts both strings and compares them. It’s dead simple and
surprisingly effective — and usually fast enough.

```python
def is_anagram_sorted(s1: str, s2: str) -> bool:
    return sorted(s1) == sorted(s2)
```

---

The optimized hash version is probably the best in terms of time and space,
trade-off, assuming the character set is constrained (as it is here to lowercase
letters). But the sorted approach is hard to beat for readability.

All three passed the same suite of tests.