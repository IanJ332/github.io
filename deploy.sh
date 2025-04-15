#!/bin/bash

echo "Starting the build process..."
npm run build

if [ $? -eq 0 ]; then
  echo "Build successful! Proceeding to deployment..."
  npm run deploy

  if [ $? -eq 0 ]; then
    echo "Deployment successful!"
  else
    echo "Deployment failed. Check for errors."
    exit 1
  fi
else
  echo "Build failed. Fix the issues and try again."
  exit 1
fi
