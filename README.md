# Page Speed x 5

_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._

## What does this application do?

This application makes use of the
[Google PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/get-started).

A user can fill in five domain names simultaneously, 
after which the application sends five GET requests to the Google PageSpeed Insights API. The results of this GET request in turn
populate a [Google Chart](https://developers.google.com/chart/interactive/docs).



This chart is implemented in this app through an NPM package: [React Google Charts
](https://www.react-google-charts.com/).



##Running this application for yourself

To see this application live, you can clone this project
locally and go through the following steps:

###1: Clone project
Clone this project locally. Remove the Git Remote URL by running this command:
####`git remote remove origin`

###2: install npm

Run the following command in your terminal:
#### `npm install`



###3: Install axios

Install Axios by running the following command in your terminal:
####`npm install axios`


###4: Get an API key
**working API key provided in ZIP file**
 

Before you can run this application, you will need an API key. You can generate one [here](https://developers.google.com/speed/docs/insights/v5/get-started#APIKey).
Create a file called `.env` in the root folder. In this file you must paste the following line: 
####`REACT_APP_API_KEY=`

Your newly generated API key should be pasted behind this, without quotations, brackets or anything around it.

To add this file to the application you must run the following command in your terminal: 
####`npm run build`




###5: Start the application
Run the following command in your terminal to start this application:

####`npm run start`


###6: During the application
the application should now open in your browser on: `http://localhost:3000`
To exit the application, hit: `ctrl` + `c` in your terminal for both Mac and Windows. 
