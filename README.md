# Bank of Flatiron
Bank of Flatiron is a simple web application designed to manage and display financial transactions. It allows users to view, add, and search transactions through a user-friendly interface. This project uses React for the frontend and JSON Server to simulate a backend.



## Components

### `Form.js`

Handles the input and submission of new transactions. It provides a form where users can enter details like date, description, category, and amount.


### `Header.js`

 Displays the header of the application. It typically includes the application title or branding.

### `Row.js`
 Represents a single row in the transactions table. It displays individual transaction details such as date, description, category, and amount.

 ### `Search.js`
 Provides a search input field that allows users to filter transactions based on their descriptions.

 ### `Table.js`
 Renders the list of transactions in a tabular format. It uses Row.js to display each transaction.


## Technologies Used

### React
 For building the user interface.

### JSON Server
  For serving and managing transaction data.

### CSS
For styling the application.


## Setup Instructions

- Clone thr Repository 

git clone `(https://github.com/your-username/bank-of-flatiron.git
cd bank-of-flatiron).`

- Install Dependencies 

Install the necessary npm packages:

 [npm install]

 - Create and configure `db.json`

 Ensure you have a db.json file in the root directory

 - Run JSON Server
 Start the JSON Server to serve the db.json file:
 [npm run start:server]

  - Run the React Application
  Start the React application:
  [npm start]

 Open your browser and navigate to `http://localhost:3001` to use the application. 

## Folder Structure

- src/:
 Contains all the React components and application logic.

 - db.json:
 JSON file serving as the mock database.

 - public/:
 Static files and HTML template.


## Author
Joy Wambui.

