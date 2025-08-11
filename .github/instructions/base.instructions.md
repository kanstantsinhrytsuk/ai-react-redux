---
applyTo: '*'
description: 'File contains base instructions for frontend development, including performance optimization, best practices, and tooling.'
---

## Instructions

### Checklist after applying changes

- run tests and check for errors
- run ts and lint validation
- implement code splitting and lazy loading
- check for unused code and remove it
- ensure no console logs in production code
- check for memory leaks and optimize state management
- ensure accessibility standards are met

### Reuse and Modularity

- Use Design System from the /src/styles/design-system.json (create configs in the theme or reuse existing ones)
- Use reusable components to avoid duplication.
- Create utility functions for common tasks.
- Use CSS modules or styled components to scope styles and avoid conflicts.
- Implement a design system or component library for consistency.
- Use environment variables for configuration to avoid hardcoding values.
- Use TypeScript interfaces for props and state to ensure type safety.
- Place types and styles in separate files to keep components clean.


### Requirements and Best Practices

- Avoid using inline styles; prefer CSS classes or styled components for better performance and maintainability.
- Avoid using `any` type
- Use `enum` for fixed sets of values to improve code clarity and type safety.
- Use constants for magic numbers or strings to improve maintainability.
- Avoid using `var` and `let` variables; prefer `const` for immutability and clarity.
- Use `async/await` for asynchronous code to improve readability.
- Max line length should be 80 characters to improve readability.
- Keep files at 300 lines or less to improve maintainability.

