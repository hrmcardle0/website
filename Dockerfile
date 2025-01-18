# Use a lightweight Node.js base image
FROM node:18-slim

# Set working directory
WORKDIR /usr/src/app

# Copy the dist folder
COPY dist/ /usr/src/app

# Install serve globally
RUN npm install -g serve

# Expose the port serve will use. App is fronted by a load balancer enforcing TLS.
EXPOSE 80

# Command to serve the React app
CMD ["serve", "-s", ".", "-l", "80"]
