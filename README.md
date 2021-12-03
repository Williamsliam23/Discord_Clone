<h1 align="center">Dischannel</h1>

[Live Site](https://dischannel.herokuapp.com/#/)

Dischannel is a fullstack clone of the application Discord. Dischannel is a live chat messaging application where users can live message in servers with others on the site.

## Technologies

* Ruby
* Rails
* React
* Redux
* Postgresql
* Javascript
* * jquery
* * ajax

Dischannel uses Ruby on Rails and Postgresql for it's backend implementation of the framework and database management. For the frontend, React was utalized for the UI with Redux managing the state throughout the application for live renders and ajax/jquery Javascript to interact with the backend.

## Features

* Chat messaging rendering within servers for users to communicate with each other.
* * For this feature users in specified channels and servers will be able to communicate with each other through the chat. Current challenge being faced is a live rerender across users logged into the site. Currently a full refresh is needed to see a new message being posted.
* User-authentication
* * Anyone is able to create a new user for this site to login and continue to use the same user in all sessions. The application also uses the users athentication in the session to determine available pages to be accessed. If a visitor to the site is not logged in and tries to access a chat they will be redirected to the login page until they have signed in. Understanding the switch component with Auth and Protected Routes caused certain challenges for entry and redirection. Using a combination if Route, Auth, and Protected all contained within the switch solved this issue.


## In Development

This application is currently still being updated and developed. These features will be implemented in the future

* Demo login button for site interaction
* Live messaging without refresh of page
* Server selecting and channel switching inside of servers
* Direct messaging between users

## Installation

You will need Ruby and Rails as a prerequisite, this project uses ruby 2.7.4 and rails 5

Locally clone the repo with the blow code, or at the top right click the code button and copy the link and git clone
```
git clone https://github.com/Williamsliam23/Discord_Clone.git
```
Install Ruby dependancies and Gems:
```
bundle install
```
Using node, install packages required:
```
npm install
```
In a terminal start a rails server:
```
rails s
```
In a new terminal, start the node webpack server:
```
npm run webpack
```
