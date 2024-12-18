Simple Calculator
=================

This project is a simple calculator application built in **pure JavaScript** without using any libraries or frameworks. The code is bundled and optimized using **Webpack** so that the final build output contains only two files: **HTML** and **JS**. It adheres to clean code practices and implements ESLint for linting and optional Prettier formatting.

Table of Contents
-----------------

1.  [Task Description](#task-description)

2.  [Folder Structure](#folder-structure)
    
3.  [How to Run the App](#how-to-run-the-app)
    
4.  [Deployment](#deployment)

    
Task Description
----------------

The task is to:

*   Initialize a basic JavaScript application.
    
*   Create a Webpack configuration for optimized code execution.
    
*   Ensure that the build output consists of only two files: HTML and JS, regardless of the number of source files.
    

[**Link to the original task description**](https://docs.google.com/document/d/1xpq0wfBuAq6ufFsM1s3W2ApKszwxi8PszDRbPKB_omw/edit?tab=t.0#heading=h.5dt3hghpa22f).

Folder Structure
----------------
    
### Folder Descriptions:

*   **dist**: Contains the bundled and optimized files ready for production.
    
*   **src**: Contains all source code, including HTML, JS, and CSS files.
    
*   **js**: JavaScript files are split into:
    
    *   calculator.js: Handles calculator logic (mathematical functions).
        
    *   ui.js: Handles user interface interactions.

*   **index.html**: The main html file.

*   **styles.css**: Styles for the calculator UI.
    
*   **webpack.config.js**: Configuration for bundling files using Webpack.

*   **package.json**, **package-lock.json**: Project dependencies and scripts.
    
*   **.eslintrc.json**: ESLint configuration file for linting JavaScript code.

How to Run the App
------------------

To build and run this project locally, follow these steps:

1.  git clone <[https://github.com/rarsen/Innowise.git](https://github.com/rarsen/Innowise.git)>

2.  cd calculator
    
3.  npm install
    
4.  npm start - Open your browser and visit http://localhost:8080.
    

Deployment
----------

The calculator is deployed online using **GitHub Pages**.

🔗 [View the Live Demo](https://rarsen.github.io/Innowise/).
