# Use the official Python image as the base image
FROM python:3.12-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy the requirements file
COPY requirements.txt ./

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]