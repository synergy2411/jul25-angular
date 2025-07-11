# Break Timing

11:30 - 10 minutes

# What is JavaScript?

- Browser / client side as well as server side (Node Runtime Environment)
- Frontend Validations
- DOM Manipulation
- Dynamic
- Event-Driven
- Light-weight
- Scripting Language
- Compiled (AST) as well as interpreted
- Single Threaded
- Non-blocking
- Asynchronous Programming (Callback, Promises, Observables)

  > Remote Server Call (XHR Call)
  > Timer (setTimeout())
  > Obtain Socket
  > Reading / Writing
  > I/O

- Async Program
  > MacroTasks : Timer, XHR, Socket etc
  > MicroTasks : Promise, queueMicrotask()

# MEAN - Mongo (JSON Format) Express (Web app Framework; JavaScript) Angular (JavaScript) Node (JavaScript)

# MERN - Mongo Express React Node

# JavaScript Internals - Object Hierarchy

- Object (valueOf(), constructor, toLocalString(), toString(), isPrototypeOf(), hasOwnProperty() )
  > Function
  > Date
  > String
  > Number
  > Array
  > Person
  > Animal

let str = "Hello World";
str.isPrototypeOf()

# JavaScript Data Types

- Primitive : String, Number, Boolean, Symbol
- References: Array, Object, Dates, Functions

# ES6/ES2015+ features

- Arrow functions
- Destructuring
- Rest/Spread
- Block Scope (let / const)
- Template Literals

---

# Promises

- Pending
- Settled : Fulfilled / Rejected
- then().catch()
- async...await
- Promise API (Static Methods)
  : all
  : allSettled
  : race
  : any
  : resolve
  : reject

# TypeScript : JavaScript with types

- Types
- Modules
- Decorators
- Generics

# Vite TypeScript Project

> npm create vite@latest
> typescript-basics -> Vanilla -> Typescript
> cd typescript-basics
> npm install
> npm run dev

---

# TypeScript : Decorators / Modules

# Decorators : Function for meta-programming

- Class : @Component(), @Directive(), @Pipe(), @Injectable(), @NgModule()
- Method : @HostListener()
- Property : @Input(), @Output(), @HostBinding()
- Parameter : @Skip(), @Optional()

# Other JS Libs and Frameworks

# Angular Bootstrap Process

# Angular Components

# Angular App

- Components
- Directives
- Services
- Pipes
- Modules

# Other JavaScript Libs / Frameworks

- AngularJS : v1.x; 2011; Library
- Angular : 2014, Google Team; Templates, Form Validation, Remote Server Calls, Data binding, SPA, State Management, Shadow DOM, Components, MV\* Pattern, Animation etc. Enterprise level Apps.

- Angular Material : Material Component
- Angular Universal : SSR

- React / React Native : Facebook Team, 35kb, quickly rendering the UI, VDOM, Props, State, Diffing Algo, Redux - State Management, React Router DOM creates SPA, ReactHookForm, Supertest, Joe, Formik etc

- Preact: 5kb

- Next : React Framework for Server Side Rendering
- Vue : "Evan You", Progressive framework, emerging community, template oriented, VDOM, Components, State Maangement, SPA, DOM manipulation, Templates, Form Validation etc
- jQuery : DOM manipulation, AJAX Calls, Animation
- Knockout : MVVM Pattern at client side, 2 way data binding
- Backbone : MVC Pattern at client side
- Polymer : Create rich components
- Stencil : VDOM, Web Component
- D3 : Charts
- Ionic : Mobile Apps (Angular, React, Vue), one codebase, any platform.
- Bootstrap: client side JS library for built-in components, Grids, layouts

- Node : Server side Platform
- Express/ Koa/ Hapi/ SailsJS/ KrakenJS : Web app Framework for NodeJS App
- lit

# Angular Version 17.x

- Standalone Components
- Signals

- Modules

# Angular CLI

- [sudo] npm install -g @angular/cli@17
- ng version
- ng new frontend --standalone false --no-routing
- cd frontend
- npm start / ng serve [-o]

# Multiple Angular CLI Installation

- npx @angular/cli@17 new frontend --standalone false --no-routing

# Angular CLI Command

- ng generate component path/to/component
- ng g c path/to/component
- ng g c users

# Bootstrap Library Added

> npm install bootstrap
> build -> style config in angular.json
> --- "./node_modules/bootstrap/dist/css/bootstrap.min.css",

ng serve --port=4040

# Data Binding

- Property Binding - []
- Event Binding - ()
- 2 way data binding - [(ngModel)]

- ng g c components/users/user-img
- ng g c components/users/user-info
- ng g c components/demo/life-cycle
- ng g c components/demo/directive-example
- ng g c components/demo/pipe-example
- ng g d directives/highlight

# Nested Component Communication

- PArent to Child -> @Input()
- Child to Parent -> @Output() + EventEmitter

# Content Projection - Slot API

- ng-content

# Directives - Marker on UI

- Component : with template
- Attribute : ngStyle, ngClass
- Structural: *ngIf, *ngFor, \*ngSwitch (ng-template #productNotAvailable)
- @HostBinding() : binds host element property
- @HostListener() : binds the host element event with method

# Pipe : Format the UI

---

# Pipe : Custom Pipes

# Forms

- Template
- Model / Reactive

# Service

9876543210 | countryCode : 'IND' => +91 9876543210

date : 'dd-MM-yyyy'
currency : 'INR'

- ng g p pipes/country-code

- Pure Pipe : pure changes
  let user = { // x09ix09
  name : "John"
  }

user = { name : "Mary" }; // x09ic876

let frineds = ["Ross", "Rachel", "Monica"];

frineds = ["Ross", "Rachel", "Monica", "Joey"]; // pure change

- Impure Pipe : pure as well as impure changes

user.name = "Jenny"; // Impure change
friends.push("Joey"); // Impure change

# Template Driven Form

- HTML5 Validation
- CSS Classes and State
- "ngForm" - Form
