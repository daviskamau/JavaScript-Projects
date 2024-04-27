### NODE WEB TEMPLATE

This is a template to bundle single web page app and server side code

#### Features
- React for interactive UI
- Webpack to bundle js files (server & client)
- Simple configured server with Express
- eslint with standard code style

#### How does it work
-  Webpack bundles the client (frontend) side code in one file named client.bundle.js
-  Webpack bundles the server (backend) side code in one file named server.bundle.js

#### Development
##### Install dependencies in client & server folder
`npm install`

##### Build
-  All build files are in `dist` folder
-  To build all files once `npm run build`
-  Code style check with eslint `npm run lint`

##### For development
You should run 3 seperate terminals
-  First to watch client files `npm run dev-client`
-  Seconds to watch server files `npm run dev-server` 
-  Third to run server (listen on assigned port) `npm run server`

##### Production
`npm run build-prod`