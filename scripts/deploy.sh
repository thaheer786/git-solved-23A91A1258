#!/bin/bash

# Unified Deployment Script

# Version: 2.0.0

# Supports both Production and Development environments

set -e

echo "====================================="
echo "DevOps Simulator - Deployment Script"
echo "====================================="

# Check for environment argument

if [ "$1" == "production" ]; then
echo "Environment: production"
DEPLOY_ENV="production"
DEPLOY_REGION="us-east-1"
APP_PORT=8080

```
echo "Region: $DEPLOY_REGION"
echo "Port: $APP_PORT"
echo "Starting Production Deployment..."
echo "-------------------------------------"

# Pre-deployment checks
echo "Running pre-deployment checks..."
if [ ! -f "config/app-config.yaml" ]; then
    echo "Error: Configuration file not found!"
    exit 1
fi

# Deployment process
echo "Pulling latest Docker images..."
# docker pull devops-simulator:latest

echo "Rolling update strategy initiated..."
# kubectl rolling-update devops-simulator

echo "Deployment completed successfully!"
echo "Application available at: https://app.example.com"
```

else
echo "Environment: development"
DEPLOY_ENV="development"
DEPLOY_MODE="docker-compose"
APP_PORT=3000
ENABLE_DEBUG=true

```
echo "Mode: $DEPLOY_MODE"
echo "Port: $APP_PORT"
echo "Debug: $ENABLE_DEBUG"
echo "Starting Development Deployment..."
echo "-------------------------------------"

# Pre-deployment checks
echo "Running pre-deployment checks..."
if [ ! -f "config/app-config.yaml" ]; then
    echo "Error: Configuration file not found!"
    exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Run tests
echo "Running tests..."
npm test

# Deploy application
echo "Starting deployment..."
echo "Using Docker Compose..."
docker-compose up -d

# Wait for application to start
echo "Waiting for application to be ready..."
sleep 5

# Health check
echo "Performing health check..."
curl -f http://localhost:$APP_PORT/health || exit 1

echo "Deployment completed successfully!"
echo "Application available at: http://localhost:$APP_PORT"
echo "Hot reload enabled - code changes will auto-refresh"
```

fi
