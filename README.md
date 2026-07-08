#React + Typescript + Vite

This template uses the base project (vite-react-tanstack-base) integrated with simple auth implementation using mock data and service.

Mock auth data:
"mock-auth" - auth key to be stored then identifies the state if logged in or not
"demo@example.com" - email credential
"password123" - password credential

The following steps done for this setup:
( after cloning the base project )
- Created 'features/' and 'layouts/' directories
- Added 'auth/', 'hooks/', 'pages/', 'services/', subdirectories in 'features/'

- features/
  └─auth/
    ├─pages/
    │ └─login.tsx
    ├─hooks/
    │ └─use-service.ts
    └─services/
      └─auth-service.ts

- layouts/
  ├─auth-layout.tsx
  └─main-layou.tsx

- updated guest and authenticated or main layout files in routes/, added "beforeLoad:" property
- added "beforeLoad:" property, and identified logic of authenticated routing
- updated login page; imported auth service, and created login logic
- Run `pnpm run dev` to regenerate `routeTree.gen.ts` in case of an error occurred related to routes