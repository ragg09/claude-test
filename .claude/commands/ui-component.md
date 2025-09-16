---
description: Create a UI Component in /components/ui
argument-hint: Component Name | Component Summary
---

## Context 

Parse $ARGUMENTS to get the following values:

- [name]: Component Name from $ARGUMENTS
- [summary]: Component Summary from $ARGUMENTS

## Task

Make a UI component according to the [name] and [summary] provided, following these guidelines:

- Create a component file in `src\components\ui\[name].tsx`
- Use a functional component with the name [name]
- Reference the [summary] when making the component

## Variants

- Add the following variants for the component using the color from the them variables in the @src\app\globals.css file
- create color theme for variants if not added yet

1. primary
2. secondary
3. success
4. danger
5. warning

- Support common patterns like disabled states and sizes where appropriate (sm, md, lg, defaulting to md when no preference is passed)

## Testing

- Make a test file for the component to test basic use cases
- Run tests and iterate until the all pass

## Previews

- Add the component to the `src/app/preview/page.tsx` file so it can be viewed in the browser, and use multiple variants
- DO NOT add the component to any other page

## Review the work
- **Invoke the ui-ux-playwright-reviewer subagent** to review your work and implement suggestions where needed
- Iterate on the review process when needed