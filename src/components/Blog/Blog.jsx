import React from "react";
const Blog = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold text-white mt-3 p-2 bg-yellow-600">
        Some Important Questions with Answers
      </h1>
      <div className="card w-[1400px] bg-slate-200 shadow-xl mx-auto mt-3">
        <div className="card-body">
          <h2 className="card-title text-2xl">
            1. Tell us the differences between uncontrolled and controlled
            components.
          </h2>
          <p>
            <span className="text-xl text-emerald-700 font-bold">Answer: </span>
            In React, controlled components are those that are controlled by
            React state, meaning that their values are updated and controlled by
            React. On the other hand, uncontrolled components are those that
            store their own state internally and do not rely on React to manage
            their state. Controlled components provide more control and
            flexibility over user input and can be used to validate and sanitize
            user input, while uncontrolled components can provide a simpler
            development experience with less code but less control over user
            input.
          </p>
        </div>
      </div>
      <div className="card w-[1400px] bg-slate-200 shadow-xl mx-auto mt-3">
        <div className="card-body">
          <h2 className="card-title text-2xl">
            2. How to validate React props using PropTypes?
          </h2>
          <p>
            <span className="text-xl text-emerald-700 font-bold">Answer: </span>
            PropTypes is a type-checking library built into React. It allows us
            to specify the data type of each prop that a component expects to
            receive, and it will log a warning to the console if the data type
            does not match what is expected. To use PropTypes, we need to import
            it from the prop-types package and then add a propTypes object to
            our component. Within this object, we can specify the data type for
            each prop by calling the appropriate PropTypes function.
          </p>
        </div>
      </div>
      <div className="card w-[1400px] bg-slate-200 shadow-xl mx-auto mt-3">
        <div className="card-body">
          <h2 className="card-title text-2xl">
            3. Tell us the difference between nodejs and express js.
          </h2>
          <p>
            <span className="text-xl text-emerald-700 font-bold">Answer: </span>
            Node.js is a runtime environment that allows developers to execute
            JavaScript code on the server-side. It provides a way to run
            JavaScript code outside of a web browser and can be used to create
            various types of applications, including web applications,
            command-line tools, and network applications. Express.js, on the
            other hand, is a web framework built on top of Node.js. It provides
            a set of features and tools to simplify the process of building web
            applications using Node.js. Express.js provides a simple and
            intuitive API for handling HTTP requests and responses, middleware
            support, routing, and other essential features needed for building
            modern web applications.
          </p>
        </div>
      </div>
      <div className="card w-[1400px] bg-slate-200 shadow-xl mx-auto mt-3 mb-4">
        <div className="card-body">
          <h2 className="card-title text-2xl">
            4. What is a custom hook, and why will we create a custom hook?
          </h2>
          <p>
            <span className="text-xl text-emerald-700 font-bold">Answer: </span>
            In React, a custom hook is a reusable function that encapsulates
            some common behavior or logic that can be shared across components.
            Custom hooks allow developers to abstract away complex logic and
            reuse it across multiple components without having to repeat code.
            We create custom hooks to keep our components small and focused on
            their specific tasks. By extracting common functionality into a
            custom hook, we can make our code more modular and easier to
            maintain. For example, if we find ourselves writing the same code in
            multiple components to fetch data from an API, we can create a
            custom hook to handle the fetching logic and reuse it across those
            components.
          </p>
        </div>
      </div>
      <button className="ml-40 btn btn-active mb-5">DOWNLOAD PDF</button>
    </div>

  );
};

export default Blog; 