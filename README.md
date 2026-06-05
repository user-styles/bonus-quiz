# Bonus Entries Quiz

A 3-question scavenger-hunt quiz that awards a secret code for 500 bonus sweepstakes entries. Everything is in a single file — no build step, no dependencies.

## How it works

- **Q1** — Multiple choice. Client is selected by weighted random draw each session.
- **Q2** — Multiple choice. Client is selected by equal random draw (independent of Q1).
- **Q3** — Phone number entry (free text). Always matches the Q2 client.
- All answer positions are randomized on each session.
- Date references in questions automatically show "(about X months ago)" based on the current date.
- Phone number answers accept any format — parentheses, dashes, spaces, dots — only the digits are compared.
- A perfect score (3/3) reveals the secret code. Anything less shows the try-again screen.

## Deploy on GitHub Pages

1. Create a new GitHub repo
2. Add these files to the repo root:
   - `quiz.html`
   - `quiz-banner.jpg`
   - `quiz-retake.jpg`
3. Go to repo **Settings → Pages**
   - Source: Deploy from a branch
   - Branch: `main` / root
4. Save, then open the Pages URL

## Editing questions and answers

Open `quiz.html` and edit the `QUIZ_DATA` object near the top of the `<script>` block.

### Data structure

```
QUIZ_DATA
├── secretCode        — the code shown on a perfect score
├── aliases           — maps alternate client name spellings to canonical keys
├── searchTerms       — per-client Google search term variants (picked randomly)
├── q1                — object keyed by canonical client name
│                       each value is an array of question variants
│                       (one is picked randomly per session)
├── q2                — same structure as q1
└── q3                — object keyed by canonical client name
                        each value has bodyHtml and correctPhone
```

Each `q1` and `q2` question variant:
```js
{
  bodyHtml: "...",   // HTML string shown to the quiz taker
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
  bodyHtml: "...",          // HTML string shown to the quiz taker
  correctPhone: "(xxx) xxx-xxxx"
}
```

### Client weights (Q1)

`Q1_WEIGHTS` controls how often each client appears as the Q1 client. Values must sum to exactly 100. Keys must exactly match the canonical client keys in `QUIZ_DATA.q1`.

### Q2 client pool

`Q2_CLIENTS` is a flat array of canonical client keys. Each entry has equal odds of selection. Keys must exactly match the canonical client keys in `QUIZ_DATA.q2`.

### Adding a new client

1. Add a canonical key entry to `QUIZ_DATA.q1`, `QUIZ_DATA.q2`, and `QUIZ_DATA.q3`
2. Add a `searchTerms` entry using the same canonical key
3. Add the canonical key to `Q1_WEIGHTS` (adjust other weights so the total stays at 100)
4. Add the canonical key to `Q2_CLIENTS`
5. If the client name has common alternate spellings, add them to `aliases`

### Removing a client

1. Remove the entry from `QUIZ_DATA.q1`, `QUIZ_DATA.q2`, `QUIZ_DATA.q3`, and `searchTerms`
2. Remove from `Q1_WEIGHTS` and redistribute the freed weight to other clients so the total stays at 100
3. Remove from `Q2_CLIENTS`
4. Remove any `aliases` entries pointing to that client

### Updating the secret code

Change the `secretCode` value at the top of `QUIZ_DATA`.
