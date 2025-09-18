# E-commerce UI Template

This is an e-commerce UI template built using **React**, **Vite**, **Tailwind CSS**, **Swiper**, and **TypeScript**. The project is designed to provide a scalable and responsive starting point for e-commerce applications, with modern UI components and a clean architecture.

## Features

- **Responsive Design:** Works seamlessly across different screen sizes.
- **Swiper Integration:** Beautiful sliders for showcasing products or banners.
- **Fast Builds:** Powered by Vite for lightning-fast development.
- **TypeScript Support:** Ensures type safety and cleaner code.
- **Tailwind CSS:** Utility-first CSS framework for styling without leaving your HTML.
- **Modular Components:** Easy-to-use, reusable React components.

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Swiper](https://swiperjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Resvan/3legant.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd 3legant
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   The project should now be running at `http://localhost:3000`.

## Project Structure

```
├── public          # Static assets
├── src
│   ├── assets      # Images, icons, fonts, etc.
│   ├── components  # Reusable UI components
│   ├── pages       # Page-level components
│   ├── styles      # Global and component-specific styles
│   └── utils       # Utility functions and helpers
├── App.tsx         # Main application component
├── main.tsx        # Entry point for the app
├── index.html      # HTML template
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json   # TypeScript configuration
└── vite.config.ts  # Vite configuration
```

## Usage

1. **Development Mode:** To start the development server, run:

   ```bash
   npm run dev
   ```

2. **Build for Production:**

   To create a production build, run:

   ```bash
   npm run build
   ```

   The output will be generated in the `dist` folder.

3. **Preview Production Build:**

   After building, you can preview the production build locally:

   ```bash
   npm run preview
   ```

## Customization

- **Tailwind CSS:** Modify styles in the `tailwind.config.js` or add custom styles to `src/styles`.
- **Components:** Add or customize React components in the `src/components` directory to fit your requirements.
- **Swiper Sliders:** Customize the Swiper sliders in `src/components` to adjust the behavior or styling as needed.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.


