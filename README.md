This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Design choices
The theme was carried over from echochess.com, no shadows were included to emulate the original vibe better!

Some things I would add in the future
- Icons for the tabs
- For a larger scale project I would create more themes within CSS/Tailwind, and for example a button component
- Make the chart swipeable to both sides, just seemed a little bit out of scope for this
- Add a 'loading' page when something is being called


Considerations
- Given the design of echochessOA, it is set at a particular width, this could be changed later depending on the game
- Decided to make empty a " - ", also thought about leaving it empty 
- Would like to add preloading later on, IE: load the prev and next page at the curPage so there isn't the lag to load a new page
- I would put the 'toggle theme' button in the 'settings', so the button is just hanging out for now for the sake of utility
- On the actual website, there was minimal transitions/animations, so kept it the same here
