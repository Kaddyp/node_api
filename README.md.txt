# https://github.com/Kaddyp/node_api

1. pm2 ==> https://pm2.keymetrics.io/

2.  Run the npm shrinkwrap command ==> It will lock all dependencies versions within the file npm-shrinkwrap.json giving you control over
the dependencies versions of your project. This command is very useful in a production environment, where the versions need to be stricter.

3. "scripts": {
  	"start": "node app.js",
  	"clean": "rm -rf node_modules",
 	"test": "node test.js"
   }
The npm run clean command is an example of a global command from the bash, which internally runs the command rm -rfnode_modules to delete all files from the node_modules folder.

4. ORM library that aligns with your project requirements (e.g., Sequelize, TypeORM, Prisma)

5.  Why to install babel ==> The current Node.js version does not support ES6 perfectly, but we can use a module that emulates some of the resources from ES6/ES7 to make our codes better. To do this, we are going to install babel, a JavaScript compiler responsible for converting ES6/ES7 codes to an ES5 code only when the JavaScript runtime doesn’t recognize some ES6/ES7 features.

To use all features from ES6/ES7, we are going to install the babel-cli and babelpreset-es2015 modules in the project, running this command:
## npm install babel-cli@6.5.1 babel-preset-es2015@6.5.0 --save

Now you need to link the preset babel-preset-es2015 to be recognized by the babel-cli. To do this, just create the file .babelrc with this simple code:
 {
 	"presets": ["es2015"]
 }

Update pakage.json and run command ==> npm start
"scripts": {
  	"start": "babel-node index.js"
},

6. ORM Tool Prisma ==>

npm install prisma --save-dev
npx prisma
npx prisma init
define schema in schema.prisma in prisma directory
npx prisma generator
npx prisma migrate dev ==> Give migration name

Run prisma studio commnd ==> npx prisma studio
Prisma Studio is up on http://localhost:5555

npx prisma studio --experimental

7. image upload ==>
Image Storage: Instead of storing image data in the database, 
store images in a file storage service (like Amazon S3, Google Cloud Storage) or a content delivery network (CDN) and 
store the URL or path to the image in the database.

https://chatgpt.com/share/c31b11d7-fea6-4df8-ac3d-f2c7105a92d3

https://medium.com/@hassaanistic/best-way-to-store-image-in-any-web-application-development-best-practices-and-considerations-4fbacdf066d2