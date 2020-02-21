# mobayashi-karu
Technical assessment

## Requirements

### Summary

Fork this git repo and create a web application using a "stack" of your choice. Think [Jamstack](https://jamstack.org/), bonus points for using [React](https://reactjs.org/).

## Spec

The web application should be a simple "todo" style app and has the following requirements:

Users must be able to:

* add items to the to-do list [x]
* edit items in the to-do list [x]
* mark items as complete [x]
* search for specific items using a search bar [x] 
* all changes should be persistent [x]

### extra credit

Add a richer feacher set with something you would want out of a todo app.

For example

* Wire up an actual API to call which does the persistence [x]
* Add meta data to the to-do, such as categories and filter on the meta data  
* Add user access controls ( user / groups / roles )
* supports system dark mode [x]

## Done

When done with the assignment, please open a [pull request](https://github.com/greencheckverified/mobayashi-karu/compare) with your solution.




Notes
=========

My stack of choice for this exercise is Parcel, Node, Typescript, Apollo Graphql, React, 
Styled Components and SQLite or PostgreSQL.

#### What & Why

I've been partial to Parcel lately as I really like convention over configuration and Parcel is a zero 
configuration (or near zero) bundler. Having spent countless hours wrangling baroque webpack configs, 
Parcel is pretty refreshing. 

I chose GraphQL for the API layer as I think the object graph paradigm is a natural fit for building APIs. The schema
is simple and expressive and the query language is nicely declarative. I used Apollo's implementation for the Graphql
Client and Server as they are widely used, well supported and well documented.  

I've worked with a variety of component libraries for React, including MaterialUI most recently. But I chose to go
with styled components here because they are dead simple to use and involve a minimal amount of mis-direction. 

I have no strong preference for NoSQL versus traditional SQL databases. I think they each have their place in a stack 
based on the application use cases involved. I probably could have gone with a NoSQL database as the data is not 
likely to be highly structured or require lots of normalization or referential integrity. When I'm unsure about 
what shape the application data might eventually end up taking, I tend to lean towards PostgreSQL as it gives me those 
traditional RDBMS features while also supporting a native json data type. 

For React, I try to write functional components with hooks for component state management as I think that's 
simple and clean. I also used hooks for the GraphQL fetches and mutations as that avoids the complexity of wrapping 
things up in Higher Order Components or using a render props.
 
### pre-requisites
* `node` 
* `yarn` or `npm install`

### run tests 
* `yarn test` or `npm test`

### running in dev mode
* `yarn` or `npm install`
* `yarn start` or `npm start`

By default the app runs against an in memory sqlite db. It runs on port 3000 and supports 
hot module replacement in dev mode. If you want to use PostgreSQL instead, you need to 
supply additional env vars (see below).


### build and run in production mode
* `yarn build` or `npm build`
* `node dist/index.js`


### optional params
It's possible to run against an external postgresql or sqlite db by providing the 
following vars in an .env file or in env vars:

```
DB_NAME=somedbname
DB_USER=somedbuser
DB_PASSWORD=somedbpassword
DB_HOST=localhost
DB_DIALECT=postgres
#
#  defaults to in ':memory:' for sqlite but can be something like:
# 'path/to/database.sqlite'
DB_STORAGE=
```

### Docker (these require docker, obviously)
If you want to run against PostgreSQL, I've provided a dockerized version of it. Make sure you've set 
the DB_* env vars outlined above to postgres value, then:
* `docker-compose up db` will bring up a postgres db in a container.

To build and bring up just the node app in docker, run:  
* `docker-componse up app` will bring the app up in a container.

To bring up both:
* `docker-compose up` will bring the postgres db and the app up in docker.    


### More env vars
You can also specify the port and host the app runs on via .env or env vars. Specifying a HOST will tell the
client where to call the API which is necessary when not running the app locally.

```
PORT=3000
HOST=0.0.0.0
```

### Dark mode!
The app supports an optional dark mode via [CSS prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) 

### Shortcomings
* I have Jest and Enzyme setup and working for tests and I've stubbed in a couple basic tests, 
but I'd need to flesh those tests out a lot for a real app.
* I started to add realtime updates using GraphQL subscriptions as I think that's a super 
handy feature for shared TODOs, but I ran out of time before getting it working well 
* Likewise, I ran out of time before adding user auth and metadata
 
 
