# Docker Deployment Guide

## Overview
This project is configured for deployment using Docker with GitHub Actions for automated CI/CD pipeline.

## Key Docker Configuration Files

### 1. Dockerfile
- Multi-stage build for optimized production image
- Uses Node.js 20 Alpine for security and size
- Non-root user for enhanced security
- Health checks configured
- Proper port configuration (5000)

### 2. docker-compose.yml
- Complete stack with PostgreSQL database
- Proper networking configuration
- Volume persistence for database data
- Environment variables for configuration

### 3. GitHub Actions (.github/workflows/docker-deploy.yml)
- Automated builds on push to main/master
- Multi-platform support (AMD64, ARM64)
- Container registry integration (GitHub Container Registry)
- Security scanning with Trivy
- Proper caching for faster builds

## Security Features Implemented

1. **Non-root user**: Application runs as unprivileged user
2. **Multi-stage build**: Reduces attack surface
3. **Health checks**: Ensures container health
4. **Security scanning**: Automated vulnerability detection
5. **Proper secrets management**: No hardcoded credentials

## Deployment Instructions

### Local Development with Docker
```bash
# Build and run the application
docker-compose up --build

# Access the application
curl http://localhost:5000/api/health
```

### Production Deployment
1. Push code to GitHub repository
2. GitHub Actions will automatically:
   - Build the Docker image
   - Run security scans
   - Push to GitHub Container Registry
   - Tag with branch name and commit SHA

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Set to "production"
- `PORT`: Application port (defaults to 5000)

## Docker Best Practices Implemented

1. **Layer caching**: Dependencies installed before copying source code
2. **Multi-stage build**: Separate build and runtime environments
3. **Health checks**: Container monitoring
4. **Proper signal handling**: Graceful shutdowns with dumb-init
5. **Security scanning**: Automated vulnerability detection
6. **Non-root execution**: Enhanced security
7. **Resource optimization**: Minimal Alpine base image

## GitHub Integration

The project includes GitHub Actions workflow that:
- Builds on every push/PR
- Supports multiple architectures
- Implements security scanning
- Uses GitHub Container Registry
- Includes proper caching for performance

## Notes

- The application is configured to run on port 5000 (required for Replit compatibility)
- Health check endpoint available at `/api/health`
- Database migrations run automatically on container startup
- All security best practices are implemented