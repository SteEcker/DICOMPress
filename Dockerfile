# Use a Node.js base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port Vitepress will run on
EXPOSE 3001

# Ensure proper permissions
RUN chmod -R 755 /app

# Start the Vitepress server
CMD ["npm", "run", "docs:dev"]
