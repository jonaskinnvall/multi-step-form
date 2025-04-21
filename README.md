# multi-select-form

This is a [Next.js](https://nextjs.org) project bootstrapped with
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Choices & Thoughts

- Multi step form with each step in its own route. React context used to manage
  data throughout routes.
- React hook form with zod used to handle form and validation.
- Would have wnated to setup (MSW)[https://mswjs.io/docs] (mock service worker)
  to mock API calls and save the data to local storage in the reqeust resolvers.
  But didn't get to it because of the apparent
  (issues)[https://github.com/mswjs/examples/pull/101] between MSW and Next App
  router that I didn't have the time to look into.
- Would have used react router to handle to data requests, caching and loading /
  error states.
  - Fetch form data in layout.tsx and post onSubmit in '/details' route
