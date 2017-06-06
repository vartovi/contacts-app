# contacts-app

- Client - Angular 4 Web app
- Server - C# .NET Core Web API (Visual Studio 2017)

## Pre-requisites
##### Client
```
Angular CLI: Installed (npm install -g @angular/cli)
Node.js: Installed (https://nodejs.org)

npm install
```

##### Server
```
Visual Studio 2017: Installed
Open Solution and Run server
--> http://localhost:60829/api
```
## Run

### Client on Development server
```
ng serve
--> http://localhost:4200/

Web API
ng serve

Local Storage 
ng serve --environment=local
```
The app will automatically reload if you change any of the source files.

## Tests

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Additional info

Saved contacts are not yet linked to any user accounts but every user has access to all contacts in the database.