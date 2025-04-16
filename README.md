
# Ask Genie - Powered by Google AI

"Ask Genie" is an interactive web application that allows users to ask questions and receive responses powered by Google AI. The application integrates an API to process user queries and provide intelligent, accurate answers. This project demonstrates the use of React, Axios, custom hooks, and state management in a modern web application.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for creating custom designs.
- **Axios**: Promise-based HTTP client for making API requests.
- **React hooks**: `useState`, `useEffect` for state management and side effects.
- **Next.js**: Framework for building React applications with server-side rendering.

## Setup

Follow these steps to set up the project locally:

### 1. Clone the repository:

```bash
git clone https://github.com/Amrr-Maherr/ask-genie.git
```

### 2. Install dependencies:

Navigate to the project directory and install the necessary dependencies.

```bash
cd ask-genie
npm install
```

### 3. Set up environment variables:

Create a `.env.local` file in the root directory and add your Google API key and host URL:

```bash
NEXT_PUBLIC_API_HOST=your_api_host_url
NEXT_PUBLIC_API_KEY=your_google_api_key
```

### 4. Run the development server:

```bash
npm run dev
```

This will start the development server at `http://localhost:3000`.

## Features

- **User Interaction**: The app allows users to ask questions and receive intelligent responses.
- **Dynamic UI**: Beautiful UI built with Tailwind CSS that adapts to different screen sizes.
- **Error Handling**: Displays error messages when the API request fails.
- **Loading State**: A loading indicator is shown while waiting for the API response.
- **Responsive Design**: The application is fully responsive, making it suitable for both mobile and desktop devices.

## Folder Structure

```plaintext
.
├── components/
│   ├── ButtonLoading.js
│   ├── SearchComponent.js
│   ├── Skeleton.js
│   ├── Title.js
│   └── HomeSection.js
├── hooks/
│   └── useFetchQuery.js
├── pages/
│   └── index.js
└── styles/
    └── globals.css
```

- **components/**: Contains all the UI components like buttons, input fields, skeleton loaders, and the main home section.
- **hooks/**: Contains custom React hooks, such as `useFetchQuery` for handling API requests.
- **pages/**: Contains the main pages of the app, including `index.js` for the homepage.
- **styles/**: Contains global styles (if any).

### Libraries Used in AskGenie

#### Dependencies:
- **@radix-ui/react-avatar**: ^1.1.4
- **@radix-ui/react-dialog**: ^1.1.7
- **@radix-ui/react-label**: ^2.1.3
- **@radix-ui/react-slot**: ^1.2.0
- **@tanstack/react-query**: ^5.74.3
- **axios**: ^1.8.4
- **class-variance-authority**: ^0.7.1
- **clsx**: ^2.1.1
- **flowbite**: ^3.1.2
- **lucide-react**: ^0.488.0
- **next**: 15.3.0
- **react**: ^19.0.0
- **react-dom**: ^19.0.0
- **tailwind-merge**: ^3.2.0
- **tw-animate-css**: ^1.2.5

#### Dev Dependencies:
- **@eslint/eslintrc**: ^3
- **@tailwindcss/postcss**: ^4
- **eslint**: ^9
- **eslint-config-next**: 15.3.0
- **tailwindcss**: ^4

## How to Use

1. Type a question in the input field at the center of the page.
2. Click the "Submit Question" button to send the query.
3. Wait for the response, which will appear below the input field.
4. If the API is still processing, a loading spinner will be shown. In case of an error, an error message will appear.

## Contributing

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes.
4. Commit your changes and push to your fork.
5. Open a pull request to the `main` branch of the original repository.

## License

This project is open-source and available under the [MIT License](LICENSE).
