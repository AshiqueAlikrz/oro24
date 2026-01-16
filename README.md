#ORO24FACILITIES

A modern, performant, and secure web application built with React and Vite, featuring a clean UI, optimized performance, and robust state management.

🌟 Tech Stack

- **Frontend:** React 18 + Vite
- **State Management & API Fetching:** Redux Toolkit + RTK Query
- **Routing:** React Router v7 with Public & Private routes
- **Authentication:** Secure token-based authentication
- **UI & Design:** Reusable components, Skeleton UI for loading states, Avenir Next - Cold font as per design, Added Toast for the alert as well.
- **Performance Optimization:** Lazy loading, dynamic imports, optimized bundle size
- **Style:** Tailwind CSS

---

## 🚀 Features

- **Secure Authentication:** Only authenticated users can access private routes.
- **Public & Private Routes:** Proper route protection to prevent unauthorized access.
- **Lazy Loading & Dynamic Imports:** Components and pages load only when needed for faster performance.
- **Skeleton UI:** Smooth user experience during data fetching.
- **Reusable Components:** Modular, maintainable, and scalable codebase.
- **Global State Management:** RTK Query for fetching APIs and Redux Toolkit for managing state efficiently.
- **Responsive Layouts:** Layout system ensures consistency across pages and devices.
- **User Country Flag:** User show their country flag while login to the their account\* .

---

## 🖥️ User Flow

1. **Landing Page / Home**

   - Users visit the public landing page.
   - Public routes display basic information and call-to-action buttons.

2. **Authentication**

   - Users log in using a secure token-based authentication system.
   - Private routes are accessible only after successful login.
   - Store the token in localStorage for global access, and also set it up in Redux to make it accessible throughout the application.

3. **Service Navigation**

   - Users can browse through categories of services.
   - Clicking a service dynamically loads the service types (RTK Query fetching).
   - Skeletons indicate loading while fetching data.

4. **Service Details**

   - Selecting a service type loads detailed information dynamically.
   - Users can view service duration, pricing, and other details.

5. **Pagination & Selection**

   - Users can navigate paginated data for services.
   - Selected items are highlighted with interactive UI feedback.

6. **Performance & UX Enhancements**
   - Lazy-loaded components reduce initial bundle size.
   - Skeleton UI ensures smooth visual feedback during API calls.
   - Reusable components improve consistency across the application.
