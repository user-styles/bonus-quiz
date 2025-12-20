# Bonus Entries Quiz (static site)

## What this is
A 3-question scavenger-hunt quiz.
- Q1 rotates through a 15-step client sequence.
- Q2 and Q3 rotate through a 30-step client sequence (same client for both).
- Search terms rotate per client.

Important: because this is a static site, the rotation is per device/browser using localStorage.

## Deploy on GitHub Pages
1) Create a new GitHub repo
2) Add these files to the repo root:
   - index.html
   - styles.css
   - app.js
3) GitHub repo Settings -> Pages
   - Source: Deploy from a branch
   - Branch: main (root)
4) Save, then open the Pages URL.

## Editing questions, answers, sequences, search terms
Open `app.js` and edit the `QUIZ_DATA` object near the top.
