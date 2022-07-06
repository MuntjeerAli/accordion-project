const questions = [
    {
        id: 1,
        question: '1. What are the features of React?',
        answer: 'JSX:  JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code. Components: Components are the building blocks of any React application, and a single app usually consists of multiple components. It splits the user interface into independent, reusable parts that can be processed separately. Virtual DOM: React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, virtual DOM changes only that object in the real DOM, rather than updating all the objects. One-way data-binding: React’s one-way data binding keeps everything modular and fast. A unidirectional data flow means that when designing a React app, you often nest child components within parent components. High performance: React updates only those components that have changed, rather than updating all the components at once. This results in much faster web applications.'
    },
    {
        id: 2,
        question: '2. What is JSX?',
        answer: 'JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.'
    },
    {
        id: 3,
        question: '3. Can web browsers read JSX directly? ',
        answer: 'Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object. For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel'
    },
    {
        id: 4,
        question: '4. What is the virtual DOM?',
        answer: 'DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.'
    },
    {
        id: 5,
        question: '5. What is a state in React?',
        answer: 'The state is a built-in React object that is used to contain data or information about the component. The state in a component can change over time, and whenever it changes, the component re-renders. The change in state can happen as a response to user action or system-generated events. It determines the behavior of the component and how it will render.'
    },
]

export default questions;