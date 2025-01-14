export default {
    name: "React Glossary",
    description: "A card deck containing the basic vocabulary you will encounter when working with React.",
    author: "aasd24",
    data: [
        {   
            id: crypto.randomUUID(),
            front: "Component",
            back: "Small, reusable pieces of code that return a React element to be rendered to the page.",
        },
        {
            id: crypto.randomUUID(),
            front: "Props",
            back: "Inputs to a React component. They are data passed down from a parent component to a child component.",
        },
        {
            id: crypto.randomUUID(),
            front: "Lifecycle methods",
            back: "Lifecycle methods are custom functionality that gets executed during the different phases of a component.",
        },
        {
            id: crypto.randomUUID(),
            front: "Key",
            back: 'A "key" is a special string attribute. Keys help React identify which items have changed, are added, or are removed.',
        },
        {
            id: crypto.randomUUID(),
            front: "Refs",
            back: "React supports a special attribute that you can attach to any component. This allows you to have direct access to the DOM element or component instance.",
        },
    ]
}