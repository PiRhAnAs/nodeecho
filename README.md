Node echo
========

This is a simple echo server I made using node and express. The UI is designed with less and the app is built using grunt. 

The purpose of this was to get familiar with these tools and technologies, and to make a basic web-app skeletton to serve as a building block for my future apps. So, if you do like web developpement and want to discover these cool technologies and learn a perfect workflow for developping quick web apps, then this is for you.

How to use
==========

If you don't have node installed in your system, then head over http://nodejs.org/ and download it.
After you've installed node, you need to install Grunt using this command

    npm install -g grunt
    
This will install the grunt task runner and adds its binary to your PATH.

Now you can clone this repo in a separate folder, then run the following commands in the cloned directory:

    npm install
    
This will install the required dependancies (express, hogan, and grunt related tasks).
Then to test the app, simply run the following command

    grunt start
    
This will start the node server at this address: http://localhost:3000/ .It will also start the Grunt 'watch' task, which will monitor any changes in the css or html files and reflect them automatically in your webbrowser without the need to reload the page. Cool right?
