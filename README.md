# React/Gatsby - PHP form 

### Beginners guide (Skip to Installation if not a beginner)

We are going to build the following:

1. The client app with Gatsby. (note that the method we use here will apply for any static site generator builders).
2. The back-end using PHP to handle the requests from the client and send the emails.

Process: The user will make a request to send some data using a form in our app, the request will hit a URL endpoint in our server where PHP will handle the request and then send the data via email to an email address.

In order to send emails with PHP you will need a local web server on your computer with a solution like XAMPP. If you have a LAMP stack server then you can deploy directly on your server. Current examples use axios to send the request from the client but other methods can be used instead.

## Installation

After you clone the repo use the console to cd to the project's root directory and run:
1. **npm install** - to install npm packages.
2. **npm start** - to start the development server. 

## Quick start for Gatsby

Use form-A or form-B example components and follow the steps below:

1. Replace the email address in [config.php](https://github.com/frankagathos/gatsby-with-php-form/blob/master/api/contact/config.php) with your email.
2. Replace the URL endpoint in the [form-A component](https://github.com/frankagathos/gatsby-with-php-form/blob/master/src/components/form-A.js) to the directory you plan to deploy the API folder to.
3. Create a static Gatsby build using  **npm run build** or **gatsby build**.
4. Deploy your Gatsby static app build and also add the API folder in a directory that matches the URL endpoint in step 2.

## Quick start for any React application

Use form-A or form-B example components and follow the steps below:

1. Follow steps 1. and 2. from above.
2. Add the [form-A component](https://github.com/frankagathos/gatsby-with-php-form/blob/master/src/components/form-A.js) in your app.
3. Add the api folder in the same directory you deploy your app.

More examples with hooks and front-end and back-end validation soon to come!

Star if you found this helpful and enjoy!