# description
This is a simple application developed using nodejs,expressjs as a platform and mongoDb as a database
which will give an understanding of the total amount to be paid by the employee of the company along with 5% interest on a flat loan of at most 100000.
# Guidlines
Here i am using my Cloud mongoDb database which is Mlab so you can directly work with this by changing mongoDb connection to your local mongoDb database or you can create your own database account in mlab and give your username and password in mongoDb connection in app.js file
Give your estimated loan amount in the form provided and it will show you how much total amount to be paid after one year including the interest of 5%. 
 # clone repo
 1.clone the repository using $git clone 'repo name'
 
 # installation
 2. $npm install
 # run application
 3. $npm start or $nodemon or $node app.js
 
# instructions to run this application using docker file

# creating a docker image 
1.Create a docker image using $docker build -t ormae-app . (please don't forget the period (.) after the command)
# Creating a docker container 
1. create a docker container from the docker image using $docker run -d -p 3000:3000 ormae-app

# running the docker container
1. run the docker container using $docker run -it ormae-app


