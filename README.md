# Technical Assessment: User Management Dashboard

**Duration**: 1.5-2 hours  
**Stack**: Next.js, TypeScript, Tailwind CSS

## Background

Our product is a survey platform for manufacturing companies. Companies build panels of 40-60 users and send surveys to these panels. We have a large user database but lack internal tools for efficient user management.

## Task Overview

Create a simplified user management dashboard that allows internal staff to:

1. View user data in a table format
2. Filter and search users based on specific criteria
3. Select users and add them to manufacturer panels

## Technical Requirements

### Backend (Next.js API Routes)

- Implement a class-based, object-oriented architecture with dependency injection
- Create the following API endpoints:
  - GET /api/users (with query parameters for filtering)
  - POST /api/manufacturer/{manufacturerId}/users (to add users to a manufacturer)
- Implement proper error handling and response types
- Use TypeScript interfaces/types for all data structures

### Frontend

- Create a responsive dashboard using Tailwind CSS
- Implement a data table with the following features:
  - Sortable columns
  - Client-side filtering
  - Multi-select functionality
- Add a form/modal for adding selected users to a manufacturer

### Data Structures

```typescript
interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  department: string;
  role: string;
  jobTitle: string;
  experience: {
    yearsInIndustry: number;
    expertise: string[];
    certifications: string[];
  };
  preferences: {
    language: string;
    timezone: string;
    communicationChannel: "email" | "phone" | "both";
  };
  demographics: {
    ageRange: string;
    gender: string;
    education: string;
  };
  workHistory: {
    currentPosition: string;
    previousPositions: string[];
    industrySpecialization: string[];
  };
  status: "active" | "inactive" | "pending";
  participation: {
    surveysCompleted: number;
    lastResponseDate: Date | null;
    responseRate: number;
  };
  address: Address;
  joinedAt: Date;
  lastActive: Date;
  metadata: Record<string, unknown>;
}

interface Manufacturer {
  id: string;
  name: string;
  industry: string;
  userIds: string[];
  contactPerson: {
    name: string;
    email: string;
    phone: string;
  };
}
```

## Implementation Guidelines

1. Backend Architecture

   - Create a UserService class with dependency injection
   - Implement repository pattern for data access
   - Use proper separation of concerns

2. Frontend Implementation

   - Use React hooks effectively
   - Implement proper state management
   - Create reusable components where appropriate

3. Code Quality
   - Write clean, maintainable code
   - Add basic error handling
   - Use TypeScript features appropriately

## Starting Point

We will provide:

- Basic Next.js project setup
- Sample user data
- Basic TypeScript types/interfaces

## Evaluation Criteria

- Code organization and architecture
- TypeScript usage and type safety
- Problem-solving approach
- Component design and reusability
- Error handling
- Code style and clarity
- Time management

## Bonus Points (if time allows)

- Unit tests for critical functions
- Loading states
- Error boundary implementation
- Optimistic UI updates
- Search history

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
