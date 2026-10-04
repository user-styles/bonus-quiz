Bonus Entries Quiz
A 3-question scavenger-hunt quiz that awards a secret code for 500 bonus sweepstakes entries. Everything is in a single file, with no build step and no dependencies.
How It Works
Q1: Multiple choice. Client is picked by weighted random draw each session.
Q2: Multiple choice. Client is picked by equal random draw, and is never the same client as Q1.
Q3: Phone number entry (free text). Always matches the Q2 client.
Answer positions are shuffled each session.
Dates in questions show "(about X months ago)" under 12 months, and "(about X years ago)" after that, based on today's date.
Phone answers accept any format (parentheses, dashes, spaces, dots, a leading 1). Only the digits are compared. Pressing Enter submits.
A perfect score (3 of 3) shows the secret code. Anything less shows the try-again screen with new questions.
Deploy on GitHub Pages
Create a new GitHub repo
Add these files to the repo root:
`index.html`
`quiz-banner.jpg`
`quiz-retake.jpg`
Go to repo Settings, then Pages
Source: Deploy from a branch
Branch: `main` / root
Save, then open the Pages URL
If you embed the quiz in WordPress with an iframe, add `allow="clipboard-write"` to the iframe tag so the Copy Code button works.
Editing Questions and Answers
Open `index.html` and edit the `QUIZ_DATA` object near the top of the `<script>` block.
Data Structure
```
QUIZ_DATA
├── secretCode        the code shown on a perfect score
├── aliases           maps alternate client name spellings to canonical keys
├── searchTerms       per-client Google search term variants (picked randomly)
├── q1                object keyed by canonical client name
│                     each value is an array of question variants
│                     (one is picked randomly per session)
├── q2                same structure as q1
└── q3                object keyed by canonical client name
                      each value has bodyHtml and correctPhone
```
Each `q1` and `q2` question variant:
```js
{
  bodyHtml: "...",      // HTML shown to the quiz taker
  lockSearch: true,     // optional, keeps the search term exactly as written
  choices: [
    { text: "Answer text", correct: true },
    { text: "Answer text", correct: false },
    ...
  ]
}
```
Each `q3` entry:
```js
{
  bodyHtml: "...",              // HTML shown to the quiz taker
  correctPhone: "(xxx) xxx-xxxx"
}
```
Search Terms
The quiz swaps any `Search Google for "..."` text with a random term from that client's `searchTerms` list. To keep a specific search (for example, one that includes a street or city to pull up the right Google listing), add `lockSearch: true` to that variant.
Client Weights (Q1)
`Q1_WEIGHTS` controls how often each client appears as the Q1 client. Values must sum to exactly 100. Keys must exactly match the canonical client keys in `QUIZ_DATA.q1`.
Q2 Client Pool
`Q2_CLIENTS` is a flat array of canonical client keys with equal odds. Keys must exactly match the canonical client keys in `QUIZ_DATA.q2`. Every client in this list also needs a `QUIZ_DATA.q3` entry. Keep at least 2 clients in the pool, since the Q1 client is skipped.
Adding a New Client
Add a canonical key entry to `QUIZ_DATA.q1` and `searchTerms`
Add the key to `Q1_WEIGHTS` (adjust other weights so the total stays at 100)
To use the client in Q2 and Q3 too, add entries to `QUIZ_DATA.q2` and `QUIZ_DATA.q3`, then add the key to `Q2_CLIENTS`. Skip this step for a Q1-only client (like Robert Portillo).
If the client name has common alternate spellings, add them to `aliases`
Removing a Client
Remove the entry from `QUIZ_DATA.q1`, `QUIZ_DATA.q2`, `QUIZ_DATA.q3`, and `searchTerms`
Remove from `Q1_WEIGHTS` and give the freed weight to other clients so the total stays at 100
Remove from `Q2_CLIENTS`
Remove any `aliases` entries pointing to that client
Updating the Secret Code
Change the `secretCode` value at the top of `QUIZ_DATA`, then update the matching code in the Gleam campaign. If the two don't match, perfect scores won't redeem.
