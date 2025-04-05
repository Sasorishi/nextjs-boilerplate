# Dockerfile for Next.js app
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Expose Next.js port
EXPOSE 3000

# Default command
CMD ["npm", "run", "dev"]
