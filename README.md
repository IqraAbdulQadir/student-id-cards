
# Student ID Cards Project

This is a simple React/Next.js project that displays a list of student ID cards. Each student card shows the student's name, age, roll number, and class. The data is passed via props, and the project is styled using Tailwind CSS for a clean and responsive layout.

## Technologies Used

- **Next.js**: A React framework for building static and dynamic web applications.
- **TypeScript**: A typed superset of JavaScript that helps with code quality and maintainability.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs quickly.
- **React**: A JavaScript library for building user interfaces.

## Project Structure

```
/app
  /students
    page.tsx            // Main page displaying the list of student cards
/components
  StudentCard.tsx       // Displays individual student card
  StudentsList.tsx      // Renders a list of student cards
```

- **`page.tsx`** (inside `/app/students`): This is the page component that renders the list of student ID cards.
- **`StudentsList.tsx`** (inside `/components`): Maps over the student data and renders individual `StudentCard` components.
- **`StudentCard.tsx`** (inside `/components`): Displays the details of each student in a styled card.

## Features

- Displays a list of student ID cards with information such as name, age, roll number, and class.
- Fully responsive layout with Tailwind CSS, adapting to different screen sizes.
- Modular components using TypeScript to ensure type safety and maintainability.

## Installation & Setup

Follow the steps below to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/student-id-cards.git
   cd student-id-cards
   ```

2. **Install dependencies:**
   Ensure you have Node.js and npm installed, then run:
   ```bash
   npm install
   ```

3. **Start the development server:**
   Run the following command to start the server:
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000/students](http://localhost:3000/students) in your browser to view the student ID cards.

## Running the Project

- The app will display a page with student ID cards.
- Each card shows the student's name, age, roll number, and class.
- The cards are fully responsive and will adjust based on screen size.

## License

This project is open-source and available under the [MIT License](LICENSE).
