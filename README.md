# PIMJO E-Commerce Platform

A modern e-commerce platform built with Next.js 15, featuring a responsive design, authentication system, and comprehensive dashboard for business management.

## Features

- **Modern UI/UX**: Built with Tailwind CSS for responsive design
- **Authentication System**: Custom JWT-based authentication with secure cookie storage
- **Dashboard**: Comprehensive admin dashboard with analytics and management tools
- **E-commerce Frontend**: Product catalog, categories, and user-friendly shopping experience
- **Protected Routes**: Middleware-based route protection for dashboard access
- **Social Authentication**: Google and Facebook login integration (UI ready)

## Tech Stack

- **Framework**: Next.js 15.5.4
- **Runtime**: React 19.1.0
- **Styling**: Tailwind CSS 4.0
- **Authentication**: Custom JWT implementation
- **Deployment**: Vercel-ready configuration

## Prerequisites

Before running this project, ensure you have:

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager
- Git for version control

## Installation

1. **Clone the repository**

   ```bash
   git clone <your-github-repo-url>
   cd pimjo_fde25
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Configuration**

   Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Access the application**
   - Public site: [http://localhost:3000](http://localhost:3000)
   - Dashboard: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
   - Login: [http://localhost:3000/login](http://localhost:3000/login)
   - Register: [http://localhost:3000/register](http://localhost:3000/register)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Authentication Secret Key (Required)
# Generate a strong random string for production
AUTH_SECRET=your-super-secret-jwt-key-here
```

### Environment Setup Notes

- **AUTH_SECRET**: Used for JWT token signing and verification. Use a strong, random string in production.
- Generate a secure secret using: `openssl rand -base64 32`

## Default Credentials

**LOGIN READY**: You can now log in with these credentials:

- **Email**: `admin@example.com`
- **Password**: `admin123`

These credentials are fully functional and will:

- Generate a secure JWT token
- Set authentication cookies
- Grant access to the dashboard
- Persist login for 7 days

**Important**: Change these credentials before deploying to production.

## Project Structure

```
src/
├── app/
│   ├── (site)/                 # Public site pages
│   │   ├── (auth)/            # Authentication pages
│   │   │   ├── login/         # Login page
│   │   │   └── register/      # Registration page
│   │   └── page.jsx           # Homepage
│   ├── api/                   # API routes
│   │   └── auth/              # Authentication endpoints
│   ├── components/            # Reusable components
│   │   ├── Auth/              # Authentication components
│   │   ├── Dashboard/         # Dashboard components
│   │   └── [Other components]
│   ├── dashboard/             # Protected dashboard pages
│   └── globals.css            # Global styles
├── lib/
│   └── auth.js               # Authentication utilities
├── middleware.js             # Route protection middleware
└── data/                     # Static data files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Authentication Flow

1. **Login**: Users authenticate via `/login` with email/password
2. **JWT Token**: Server generates JWT token stored in secure HTTP-only cookie
3. **Middleware**: Protects dashboard routes, redirects unauthorized users
4. **Session**: 7-day token expiration with automatic renewal

## Deployment

### Live Demo

**Deployed Application**: [https://pimjo-fde25.vercel.app/](https://pimjo-fde25.vercel.app/)

### Vercel Deployment

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**

   - Connect your GitHub repository to Vercel
   - Configure environment variables in Vercel dashboard
   - Deploy automatically on push to main branch

3. **Environment Variables in Vercel**
   - Add `AUTH_SECRET` in Vercel environment variables
   - Add any additional environment variables

### Manual Deployment

```bash
npm run build
npm start
```

## Development Guidelines

### Adding New Features

1. **Protected Routes**: Add new dashboard routes under `/src/app/dashboard/`
2. **Public Routes**: Add new public routes under `/src/app/(site)/`
3. **Components**: Create reusable components in `/src/app/components/`
4. **API Routes**: Add new API endpoints under `/src/app/api/`

### Authentication Integration

To integrate with external authentication providers:

1. **Update Social Buttons**: Modify components in `/src/app/components/Auth/SocialButtons.jsx`
2. **Add API Routes**: Create new routes in `/src/app/api/auth/`
3. **Update Environment**: Add provider credentials to `.env.local`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## Security Notes

- **Environment Variables**: Never commit `.env` or sensitive credentials
- **AUTH_SECRET**: Use a strong, unique secret for each environment
- **Default Credentials**: Change default login credentials before production
- **HTTPS**: Always use HTTPS in production environments
