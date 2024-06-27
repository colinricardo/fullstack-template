# fullstack-template

- typescript
- nextjs 15
- trpc + react-query
- bun
- clerk auth
- tailwind
- shadcn
- prisma + postgres

# how to run

sign up for a clerk auth account [here](https://clerk.dev)

fill out the `.env` file with the clerk values

open two terminal tabs

in the first tab:
1 - clone this repo
2 - `./db.build.sh`
2 - `./db.run.sh`

in the second tab:
1 - `bun run dbgen`
2 - `bun run dbpush`
3 - `bun run dev`
