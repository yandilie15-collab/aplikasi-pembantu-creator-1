# CreatorBoost.Web - Starter Scaffold

This is a minimal Next.js + TailwindCSS starter scaffold for **CreatorBoost.Web** (Creator productivity platform).
It contains simple pages: Dashboard, Idea Hub, Script Generator stub, and Kanban board stub.

## What I created
- Next.js project files (pages + styles)
- TailwindCSS config
- README with deployment instructions
- Zipped archive for download

## How to run locally
1. Install Node.js (v18+ recommended)
2. From the project folder:
```bash
npm install
npm run dev
```
3. Open http://localhost:3000

## How to push to GitHub
```bash
git init
git add .
git commit -m "Initial CreatorBoost.Web scaffold"
# create repo on GitHub (or use CLI: gh repo create)
git remote add origin git@github.com:<your-username>/creatorboost-web.git
git push -u origin main
```

## How to deploy (Vercel)
1. Install Vercel CLI or use vercel.com dashboard.
2. Connect GitHub repo and deploy — Vercel detects Next.js automatically.

## Notes about AI features
This scaffold includes UI stubs only. To enable AI features:
- Create an OpenAI API key
- Add it to your deployment environment variables as `OPENAI_API_KEY`
- Implement server-side API route to call OpenAI

