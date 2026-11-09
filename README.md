# Unwritten — Student Knowledge Network

A responsive Next.js 15 prototype for a student-powered campus knowledge network. Students can browse practical campus guides, search and filter by topic, save stories, open full story views, and submit new tips to the local demo feed.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

Import this repository into Vercel. Framework preset: Next.js. Root directory: `./`. No environment variables are required.

## Prototype notes

- The app uses the Next.js App Router (`app/` directory at repository root).
- Story data is sample content for demonstration.
- Search, category filters, saved-story state, story details and contribution form work client-side.
- Contributions and saved stories are not persisted to a database and reset on refresh. Add authentication and a database (e.g. Supabase) for production.
