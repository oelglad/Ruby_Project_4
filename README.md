# Ruby_Project_4


## Project Title:

- Tayran 

---
## MVP

## Project Planning

- In This project, we will implement a backEnd-server using Ruby on rails and data will be stored in the database (four tables)
- Also, the frontend will be managed using a react framework for servicing the client

---


My application is a client based system that adding the visibility of booking to the client's interested area, my goal is to create a web-site to manange the customer accounts to be able to search and book their hotels within their interested area.
To extend the spectrum of usability, my application will provide visibility to all users (registered or not) 
for unique places to stay and things to do. 


User ===> has many booking(reservation) ===>has many hotels ===> hotels has many rooms


Furhtermore,  have the ability to do the following:

- Sign-Up
- index
- show
- Create a reservation
- Update existing reservation
- Delete reservation
  Also, alll users/visitors will have ability to browse places to stay around the world/ NYC
- Hotel ratings
- Hotel reviews


## Server (Back End)

Have a Ruby-RESTful JSON API
Build a Ruby on Rails server, exposing RESTful JSON endpoints.
Build a database with 4 tables:
1 user table
2 Reservation table
3 Hotels table
4 Rooms table

User ===> has many booking(reservation) ===>has many hotels ===> hotels has many rooms

I'll Implement Authentication using JWT.
I'll Implement working generic controller actions for full-CRUD 
(index, show, create, update, delete) 

---

## Features (MVP Goals)

Tayran user will be made up of the following features:

- Create
- Update
- Delete
- Verify
- delete

---

## Wireframes

![WIRE1](https://i.imgur.com/YSeDpcE.jpg)
![WIRE2](https://i.imgur.com/DBrbXkS.jpg)
![WIRE3](https://i.imgur.com/Bti8bx3.jpg)
---

## Goals

Principally, I aim to build a fullstack application that is reliable in terms of security amd simulteneously flexible for any user to navigate and retirieve required information to make a hotel reservation



#### auth.js

- This is used for the user authorization (generating the web token)

#### models.js

- Create the the variable that is a connection to the database
- Creates the table colunm as relations.

#### Routes

- for handling different functions such as the post, get, etc. from the sql database

#### Axios

- For sending requests from the front end to the backend

#### React-Router-Dom

- For creating routes ansd links to enhance navigation and user experience


## Component Hierarchy

Use this section to define your React components and the data architecture of your app.
src
|** assets/
|** data-tests
|** fonts
|** graphics
|** images
|** mockups
|** components/
|** Header.jsx
|** Home.jsx
|** LoginForm.jsx
|** Sign-UpFormjsx
|** CreateFormjsx
|** UpdateForm.jsx
|** Footer
|** services/
|** api_helper.jsx
React_app
|** client(react app)/
|**App.jsx
|\_\_ App.css
Component Type state props Description
Header functional n n The header will contain the navigation and logo.
Navigation functional n n The navigation will provide a link to each of the pages.
Gallery class y n The gallery will render the job search page using in flexbox.
Footer functional n n The footer will show info about me and a link to my portfolio.
Component Estimates
Add Contact Form L 3 hrs 2 hrs 3 hrs
Create CRUD Actions H 3 hrs 1 hrs TBD
TOTAL 6 hrs 3 hrs TBD

---

## Back End (MVP Libraries)

1.models.js----create four tables(user, booking, hotels, rooms )
1.app(
    1.1 auth
      1.1.1 authenticate_user.rb
      1.1.2 authorize_api_request.rb

    1.2 controllers
      1.2.1 concerns(exception_handler_rb, response_rb)
      1.2.2 application_controller.rb
      1.2.3 authentication_controller.rb
      1.2.4 reservations_controller.rb 
      1.2.5 hotels_controller.rb 
      1.2.6 rooms_controller.rb 
      1.2.7 users_controller.rb 


    1.3 lib
      1.3.1 json_web_token.rb 
      1.3.2 message.rb 

    1.4 models
      1.4.1 reservations.rb 
      1.4.2 hotels.rb 
      1.4.3 rooms.rb 
      1.4.4 users.rb 

2.db(migrate, schema.rb, seeds.rb)
3.config(routers.rb)
4.Gemfile

---

## Database

1.User----(username, password)
2.Booking---(Reservation, Reservation_Id, Hotel_Id, CheckIn, CheckOut, Guests_number)
3.Hotels---(Hotel_id, Room_Type, Location, Room_Id)
4.Rooms ----(Room_Id, Room_Type, Price)

---

## Styling

- Flexbox for style alignments
- media queries for responsiveness

---

## team expectations document:

- TimeLine ======> 8 days
- Teammates ======> Omnia
- Practices ======> build the contents of the project and       design to build out the web application.

---
