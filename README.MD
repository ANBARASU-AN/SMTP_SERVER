#Backend (Node.js with Express):
#Create a new directory for your backend project:

mkdir smtp_server
cd smtp_server

#Initialize a new Node.js project and create a package.json file:

npm init -y


#Install the necessary packages (Express, Nodemailer, Multer, Cors):

npm install express nodemailer multer cors dotenv

#Create the docker file and named as "Dockerfile"

#Built Docker
docker build -t smtp .

#Run Docker
docker run -p 2015:2015 -e PORT=2015 -e FRONTEND_ORIGIN=* -e SMTP_HOST=smtp.gmail.com -e SMTP_PORT=587 -e SMTP_SECURE=false -e SMTP_USER=allsmart.org@gmail.com -e SMTP_PASS="wzks xdld dccc yvzj" -e SMTP_CIPHERS=SSLv3 -e SMTP_FROM=allsmart.org@gmail.com smtp           