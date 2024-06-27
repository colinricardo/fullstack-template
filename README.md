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

- clone this repo

- `./db.build.sh`

- `./db.run.sh`

in the second tab:

- `bun run dbgen`

- `bun run dbpush`

- `bun run dev`
