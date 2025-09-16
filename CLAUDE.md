# Claude Development Guidelines

## Core Development Rules

### 1. Best Practices, Standards, and Conventions
- Follow established coding standards and best practices for the project's tech stack
- Maintain consistent code style, naming conventions, and project structure
- Use proper error handling, logging, and security practices
- Write clean, maintainable, and well-documented code
- Follow SOLID principles and design patterns where appropriate

### 2. Reusable Components with Variants
- All reusable components must support multiple variants to ensure flexibility
- Implement variant systems using props, themes, or configuration objects
- Design components to be composable and extensible
- Provide clear documentation for all available variants
- Use TypeScript interfaces or PropTypes to define variant options

### 3. Context7 Guidelines Compliance
- Generated code must adhere to Context7 framework guidelines and conventions
- Follow Context7 component architecture and lifecycle patterns
- Use Context7's routing, state management, and UI component systems appropriately
- Maintain compatibility with Context7's theming and styling approaches
- Implement proper Context7 event handling and data binding patterns

### 4. Folder/File Structure Rules
- Organize files by feature or domain rather than by file type
- Use clear, descriptive naming conventions for folders and files
- Group related components, hooks, utils, and tests together
- Maintain a shallow folder structure to avoid deep nesting
- Separate concerns: components, services, utilities, types, and tests
- Use index files for clean imports and barrel exports
- Keep configuration files at appropriate levels (root, feature, or component)
- Follow naming patterns: PascalCase for components, camelCase for utilities, kebab-case for assets

#### Current Project Structure
```
claude-test/
├── .gitignore
├── CLAUDE.md
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
└── src/
    └── app/
        ├── favicon.ico
        ├── globals.css
        ├── layout.tsx
        └── page.tsx
```

#### Recommended Structure for Scaling
```
src/
├── app/                    # Next.js App Router pages
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components (buttons, inputs)
│   └── features/         # Feature-specific components
├── lib/                   # Utilities and configurations
├── hooks/                 # Custom React hooks
├── services/             # API calls and external services
├── types/                # TypeScript type definitions
├── constants/            # Application constants
└── styles/               # Global styles and themes
```
- when making new page component, always add a link to that page in the header navbar