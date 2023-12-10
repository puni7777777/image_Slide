you need to setup tailswindcss, you can follow steps below or can visit 'https://tailwindcss.com/docs/installation'

```
npm install -D tailwindcss
```

```
npx tailwindcss init
```

Edit this in 'tailwind.config.js'

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Edit this in './src/index.css'

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Start the Tailwind CLI build process using:

```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

Add this link in 'index.html'

```
<link href="/dist/output.css" rel="stylesheet">
```

To install all dependencies, you can run:

```
npm install
```

In the project directory, you can run:

```
npm start
```
