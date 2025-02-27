# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Running Selenium Tests

To run the Selenium tests, follow these steps:

1. Ensure you have Firefox or Edge installed on your machine.
2. Install the necessary dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm start
    ```
4. In a new terminal, run the Selenium tests:
    ```sh
    npm run test:selenium
    ```

This will launch the Firefox or Edge browser, navigate to the application, and run the tests.