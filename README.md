# HistoryLearn

A clean, premium world history learning app — interactive lessons, flashcards, a primary-source library, AI tutoring, and a coverage map that shows exactly what you've studied across 7 eras and 10 world regions.

## Features

- **52 topics across 7 eras** — from human origins to the digital age, with subtopic breakdowns for each
- **Skill tree & outline view** — toggle between a gamified journey and a full scannable curriculum
- **Coverage map** — era × region grid showing your progress across the whole world
- **Rich lessons** — narrative text with analogy boxes, examples, key points, mini-quizzes, and clickable vocab pills
- **Topic details per lesson** — causal chains (what led to this / what came after), key figures, cross-links to connected topics, and primary-source snippets
- **Flashcards** — era-grouped decks with flip, search, shuffle, keyboard nav
- **Glossary** — searchable, category-filtered terms
- **Primary sources** — real excerpts with guided analysis questions
- **Resources** — curated videos, podcasts, books, and websites
- **Search** — global search across topics, glossary, sources, flashcards (press `/`)
- **AI tutor** — context-aware helper available from anywhere (hints, explanations, connections, "what-if" scenarios, progress-aware suggestions)
- **Dark & light modes** — premium design with smooth transitions
- **PWA-ready** — works offline after first load

## Stack

Pure vanilla HTML / CSS / JavaScript. No build step, no framework. All state is stored in `localStorage`. AI features use the Anthropic API directly from the browser (your key stays local).

## Running locally

Just open `index.html` in a browser, or serve the folder with any static server:

```bash
npx serve .
# or
python -m http.server 8000
```

## Using the AI tutor

1. Click the floating ✨ button (bottom-right).
2. Paste an Anthropic API key (get one at [console.anthropic.com](https://console.anthropic.com)).
3. Use it inside any lesson or anywhere in the app. Your key is stored only in your browser's localStorage.

## Curriculum

- **Era 1 — The Ancient World** (9 topics, all lessons fully written)
- **Era 2 — The Classical Age** (4 topics)
- **Era 3 — The Medieval World** (10 topics)
- **Era 4 — Early Modern Era** (8 topics)
- **Era 5 — The Long Nineteenth Century** (5 topics)
- **Era 6 — The World at War** (6 topics)
- **Era 7 — The Contemporary World** (10 topics)

Most topics currently have rich outline & subtopic data plus causes / effects / figures / connections / sources for a subset. Full lesson text is being written out era by era.

## License

MIT.
