# Use a Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the application code to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 2015

# Command to run your application
CMD ["node", "server.js"]
