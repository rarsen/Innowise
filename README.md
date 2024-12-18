Simple Calculator
=================

This project is a simple calculator application built in **pure JavaScript** without using any libraries or frameworks. The code is bundled and optimized using **Webpack** so that the final build output contains only two files: **HTML** and **JS**. It adheres to clean code practices and implements ESLint for linting and optional Prettier formatting.

Table of Contents
-----------------

1.  [Task Description](#task-description)
    
2.  [Features](#features)
    
3.  [Folder Structure](#folder-structure)
    
4.  [How to Run the App](#how-to-run-the-app)
    
5.  [Deployment](#deployment)
    
6.  [Extra Credit](#extra-credit)
    

Task Description
----------------

The task is to:

*   Initialize a basic JavaScript application.
    
*   Create a Webpack configuration for optimized code execution.
    
*   Ensure that the build output consists of only two files: HTML and JS, regardless of the number of source files.
    

[**Link to the original task description**](#) _(Add your link here)_.

Features
--------

The calculator includes the following **functionalities**:

1.  Division
    
2.  Multiplication
    
3.  Subtraction
    
4.  Addition
    
5.  Percentage
    
6.  Sign Change
    

### Technical Requirements:

*   Written purely in **JavaScript** without any external libraries or frameworks.
    
*   **No jQuery** or usage of eval.
    
*   ESLint is configured to ensure code quality.
    
*   Optional: Prettier integration and a pre-commit hook to prevent linting errors before commits.
    

Folder Structure
----------------

Here is the organized folder structure for the project:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   calculator/  ├── dist/                   # Bundled build output   ├── src/                    # Source files  │   ├── js/                 # JavaScript files  │   │   ├── calculator.js   # Core calculator logic  │   │   └── ui.js           # UI interaction logic  │   ├── index.html          # Main HTML file  │   └── styles.css          # CSS for the application  ├── .eslintrc.json          # ESLint configuration file  ├── .gitignore              # Ignored files/folders  ├── package-lock.json  ├── package.json            # Project dependencies and scripts  ├── webpack.config.js       # Webpack configuration file  └── README.md               # Project documentation   `

### Folder Descriptions:

*   **dist**: Contains the bundled and optimized files ready for production.
    
*   **src**: Contains all source code, including HTML, JS, and CSS files.
    
*   **js**: JavaScript files are split into:
    
    *   calculator.js: Handles calculator logic (mathematical functions).
        
    *   ui.js: Handles user interface interactions.
        
*   **styles.css**: Styles for the calculator UI.
    
*   **webpack.config.js**: Configuration for bundling files using Webpack.
    
*   **.eslintrc.json**: ESLint configuration file for linting JavaScript code.
    

How to Run the App
------------------

To build and run this project locally, follow these steps:

1.  git clone <[https://github.com/rarsen/Innowise.git](https://github.com/rarsen/Innowise.git)\>cd calculator
    
2.  npm install
    
3.  npm start - Open your browser and visit http://localhost:8080.
    

Deployment
----------

The calculator is deployed online using **GitHub Pages**.

🔗 [View the Live Demo](#) _(https://rarsen.github.io/Innowise/)_.

Extra Credit
------------

### 1\. User-Friendly Interface

The calculator features an intuitive and responsive interface, ensuring a smooth user experience.

### 2\. Theme Management

Users can easily switch between themes to customize the app’s appearance. Available themes include:

*   Default
    
*   Dark
    
*   Light
    
*   Blue
    
*   Green
    

### 3\. Optimized Build

The Webpack configuration ensures that the final build contains:

*   **index.html**: HTML file.
    
*   **bundle.js**: Minified and optimized JavaScript file.
    
