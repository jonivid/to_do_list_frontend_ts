### 🚀 To-Do App Expansion Project Plan: TypeScript Deep Dive

Since your goal is to **gain TypeScript experience**, we will take an iterative approach to expanding your To-Do app. Each stage will introduce new TypeScript concepts and challenges, building on what you already know. This project will focus on TypeScript best practices, complex type definitions, React patterns, and optimizations.

### 🛠️ **Project Goals**

- Refactor and extend your existing To-Do app using TypeScript.
- Introduce new features with a focus on TypeScript type safety.
- Expose you to advanced TypeScript scenarios, including generics, utility types, discriminated unions, and context typing.
- Optimize the app with performance improvements using React.memo, useCallback, and useMemo.
- Implement state persistence with localStorage and type-safe data handling.

### 🗺️ **Overall Roadmap**

1. **Stage 1: Refactor Existing Code for Stronger Type Safety**
   - Refactor current components and hooks to use advanced TypeScript features.
   - Add stricter types, including union types, utility types, and enums.
   - Ensure all functions, hooks, and context are type-safe.

2. **Stage 2: Add Subtasks Functionality**
   - Extend the existing task type to support subtasks.
   - Implement a nested To-Do structure using complex types.
   - Refactor components and hooks to handle the new subtask feature.

3. **Stage 3: Implement Task Filters and Sorting**
   - Add filtering capabilities (e.g., by status, priority, due date).
   - Use enums and union types for filter options.
   - Add sorting options for tasks, and explore TypeScript’s utility types for better type safety.

4. **Stage 4: Persist Tasks with LocalStorage**
   - Introduce data persistence using localStorage.
   - Use TypeScript type assertions and guards to handle data retrieval and parsing.
   - Create a utility function with generics for type-safe localStorage handling.

5. **Stage 5: Analytics and Task Insights**
   - Add a feature to display analytics, such as total tasks, completed tasks, and overdue tasks.
   - Use TypeScript for type-safe calculations and data transformations.
   - Introduce `useMemo` for memoizing expensive calculations.

6. **Stage 6: Drag-and-Drop Task Reordering**
   - Implement drag-and-drop functionality using a library like `react-beautiful-dnd`.
   - Type the drag-and-drop handlers and components.
   - Use TypeScript generics for handling dynamic data.

7. **Stage 7: Theming and Dark Mode**
   - Add a dark mode toggle using React Context.
   - Type the context and theme objects with TypeScript.
   - Ensure the entire app respects the theme using TypeScript for type-safe styling.

### 🌱 **Detailed Prompt Structure for Each Stage**

For each stage, I will:
1. **Provide an Overview**: Explain what we are doing in the current stage and why.
2. **Outline TypeScript Concepts**: Highlight specific TypeScript features we’ll focus on.
3. **Step-by-Step Guide**: Break down the tasks into smaller steps with clear explanations.
4. **Code Examples**: Provide code snippets with detailed annotations for TypeScript learning.

### 📝 **How to Use This Plan**

You can simply say, "Let’s start with Stage 1," and I’ll give you a detailed breakdown of the tasks, TypeScript concepts, and step-by-step coding instructions for that stage. After we complete a stage, we can move on to the next one.

**************************************************************************************
**************************************************************************************

### 🚀 **Summary of Completed Stage: React Context Refactor with TypeScript Enhancements**

In this stage, we successfully refactored your To-Do app, transitioning to a more scalable and type-safe architecture using **React Context** and advanced TypeScript features. This refactor eliminated prop drilling and improved overall code quality. Here’s a summary of what we accomplished and a roadmap for the next stages.

### 📝 **Summary of Changes:**

1. **Refactored State Management with React Context:**
   - We created two contexts: `TaskStateContext` and `TaskActionsContext` to separate state and actions, improving maintainability and reducing unnecessary re-renders.
   - Implemented custom hooks (`useTaskState` and `useTaskActions`) to safely consume context values with proper TypeScript typing.

2. **Updated TypeScript Configuration:**
   - Enhanced `tsconfig.json` to support project references, composite builds, and proper JSX handling.
   - Added `"composite": true` and `"incremental": true` for efficient incremental builds.
   - Removed invalid compiler options (`noUncheckedSideEffectImports`), fixing build errors and aligning with TypeScript best practices.

3. **Refactored Components:**
   - **TaskForm**: Simplified by using `useTaskActions` from context, removed prop dependencies, and improved type safety with enum handling (`TaskPriority`).
   - **TaskItem**: Replaced prop drilling with context consumption, and simplified state updates using context actions.
   - **TaskList**: Refactored to consume `useTaskState`, making it cleaner and more efficient.
   - **HomePage**: Updated to use context hooks (`useTaskState` and `useTaskActions`), aligning with the new context-based architecture.
   - **App**: Wrapped the entire app in `TaskProvider`, ensuring global access to task state and actions.

4. **Improved TypeScript Usage:**
   - Leveraged TypeScript features like **enums**, **union types**, **Partial<T>**, and **utility types** for type-safe operations.
   - Refined custom hook typings with generics and type guards to enhance type inference and prevent runtime errors.

5. **Build and Type Check:**
   - Cleaned and rebuilt the TypeScript project using `npx tsc --build --clean` and `npx tsc --build`.
   - Resolved all TypeScript errors, ensuring a fully type-safe codebase.

### 🛠️ **What’s Next: Roadmap for Upcoming Stages**

Now that we have a solid foundation with React Context and TypeScript, we can increase the complexity of the app with new features and optimizations.

#### **Stage 2: Add Subtasks Functionality**
- **Extend Task Type**: Update the `Task` type to support nested subtasks.
- **UI Update**: Modify `TaskItem` to display subtasks with a collapsible view.
- **Recursive State Management**: Implement recursive state updates for handling nested subtasks.

#### **Stage 3: Implement Task Filters and Sorting**
- **Add Filters**: Introduce task filters (e.g., by status, priority, due date).
- **Sorting Options**: Allow sorting tasks by different criteria (e.g., priority, creation date).
- **Type-Safe Enum and Union Types**: Use enums and union types to define filter and sorting options.

#### **Stage 4: Persist Tasks with LocalStorage**
- **LocalStorage Integration**: Save tasks in LocalStorage to persist state across page reloads.
- **Custom Hook with Type Safety**: Create a custom hook for LocalStorage interactions, ensuring type-safe data handling.

#### **Stage 5: Analytics and Insights**
- **Task Analytics**: Display insights (e.g., total tasks, completed tasks, overdue tasks).
- **Performance Optimizations**: Use `useMemo` for memoizing expensive calculations.

#### **Stage 6: Drag-and-Drop Task Reordering**
- **Drag-and-Drop Library**: Integrate a library like `react-beautiful-dnd` for task reordering.
- **Type-Safe Handlers**: Type the drag-and-drop handlers with TypeScript generics.

#### **Stage 7: Theming and Dark Mode**
- **Theme Context**: Create a React Context for theming (light mode, dark mode).
- **Styled Components**: Ensure the entire app respects the theme using styled components or CSS variables.

### ✅ **How to Proceed:**

Simply say, "Let’s start with Stage 2: Add Subtasks Functionality," and I’ll provide a detailed breakdown of tasks and guide you through the implementation step by step. Each stage will continue to build on TypeScript knowledge and React best practices.

Let me know if you’re ready to continue or have any specific questions before we proceed!