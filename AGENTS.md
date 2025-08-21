# AGENTS Guidelines for This Repository

This repository contains a Next.js application providing EVM blockchain utilities and tools. When working on the project interactively with an agent (e.g. the Codex CLI) please follow the guidelines below for efficient development and module creation.

## 1. Use Development Server for Testing

* **Always use `npm run dev`** for local development.
* **Test at** http://localhost:3000.
* **Do _not_ deploy to production** during agent development sessions.
* **Check console** for React and Next.js warnings.

## 2. Keep Dependencies in Sync

If you update dependencies:

1. Install packages with `npm install`.
2. Update specific packages with `npm update <package>`.
3. Verify compatibility with Next.js 13 and React 18.
4. Test Ant Design components after updates.

## 3. Module Development Workflow

Follow this process to add new utilities:

### Step 1: Create Module Component
Create in `src/components/Modules/`:
```jsx
// MyNewModule.js
export default function MyNewModule() {
  // Module logic
  return ...
}
```

### Step 2: Create Page
Create in `src/pages/`:
```jsx
// my-new-module.js
export default function MyNewModulePage() {
  return (
    <>
      <Head>...</Head>
      <LayoutWrapper>
        <MyNewModule />
      </LayoutWrapper>
    </>
  );
}
```

### Step 3: Add to Navigation
Edit `src/components/LayoutWrapper/LayoutWrapper.jsx`:
```jsx
getItem('Group Name', 'groupId', <></>, [
  getItem('My New Module', 'my-new-module')
])
```

## 4. Module Structure Requirements

Each module must have:
* **Heading** (required)
* **Description** (recommended)
* **Module logic** (required)
* **Isolated functionality**
* **CSS module** for styling

## 5. File Naming Conventions

| Type | Format | Example |
| ---- | ------ | ------- |
| Module component | CamelCase | `MyNewModule.js` |
| Page file | kebab-case | `my-new-module.js` |
| CSS module | CamelCase | `MyNewModule.module.scss` |
| URL route | kebab-case | `/my-new-module` |

## 6. Code Quality Checks

Before completing any task:

| Command | Purpose |
| ------- | ------- |
| `npm run lint` | ESLint checks |
| `npm run build` | Build verification |
| Browser DevTools | Runtime errors |
| Network tab | API calls |

## 7. Web3 Utilities

Common utilities in the app:
* ETH ↔ Wei converter
* Decimal ↔ Hexadecimal
* ENS → Address resolver
* Keccak-256 hashing
* Checksum address validation
* Calldata encoding
* Event signature generation

## 8. Component Guidelines

* Use Ant Design components consistently.
* Follow existing patterns in `src/components/`.
* Keep logic isolated within modules.
* Use SCSS modules for styling.
* Implement proper error handling.

## 9. API Routes

API endpoints in `pages/api/`:
* `/api/contractData` - Smart contract data
* `/api/hello` - Test endpoint

Add new API routes as needed for backend functionality.

## 10. Testing New Modules

Test checklist for new modules:

- [ ] Module renders without errors
- [ ] Navigation link works
- [ ] URL routing correct
- [ ] Mobile responsive
- [ ] Dark/light theme support
- [ ] Input validation works
- [ ] Error states handled

## 11. Navigation Configuration

Update navigation bar:

1. Find target group in `items` array
2. Add new item with unique ID
3. ID must match page filename
4. Add group ID to `defaultOpenKeys` if new group

## 12. Asset Management

### Icons
* Location: `src/components/Icons/`
* Format: React components
* Usage: In Ant Design components

### Images
* Location: `public/images/`
* Format: SVG, PNG, JPG
* Usage: Via Next.js Image component

## 13. Common Development Tasks

### Add New Converter
1. Create module in `Modules/`
2. Implement conversion logic
3. Add input validation
4. Create page wrapper
5. Add to Converters group in nav

### Add New Tool
1. Follow module creation steps
2. Test with various inputs
3. Handle edge cases
4. Add helpful descriptions

## 14. Useful Commands Recap

| Command | Purpose |
| ------- | ------- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Build production |
| `npm run lint` | Run linter |
| `npm start` | Run production server |

## 15. Troubleshooting

### Common Issues

**"Module not found"**
- Check import paths
- Verify file exists
- Clear `.next` cache

**"Navigation not working"**
- Verify ID matches filename
- Check `defaultOpenKeys`
- Ensure proper routing

**"Style not applied"**
- Import CSS module correctly
- Use `styles.className`
- Check SCSS syntax

---

Following these practices ensures consistent module development, maintains code quality, and enables reliable utility creation. Always test new modules thoroughly and follow the established patterns for navigation and page structure.