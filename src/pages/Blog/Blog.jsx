import React, { useRef } from "react";
import Pdf from "react-to-pdf";
import {BsFiletypePdf} from 'react-icons/bs'
import {GrDocumentPdf} from 'react-icons/gr'


const Blog = () => {
  const pdfRef = useRef();
  const options = {
    orientation: "portrait",
    unit: "in",

  };
  return (
    <div className="max-w-5xl mx-auto my-20 font-Nunito p-10">
        <div className="w-full flex items-center justify-end ">
      <Pdf  targetRef={pdfRef} filename="blog.pdf" options={options} x={.2} y={.5} scale={0.8}>
        {({ toPdf }) => <>
        <button onClick={toPdf}>Download pdf </button>
       <GrDocumentPdf  className="text-xl"/>
        </>
        }

      </Pdf>
        </div>

      <div ref={pdfRef}>
        <h1 className="text-center py-3 text-red-500 text-4xl">
          Frequently Asked Questions
        </h1>
        <div className="py-5">
          <h1 className="text-2xl font-bold py-2">
            1. Tell us the differences between uncontrolled and controlled
            components
          </h1>

          <p className="leading-relaxed text-md">
            Uncontrolled components are provided by third-party libraries and
            have their own internal state management, whereas controlled
            components are built and managed by the developer and rely on props
            to manage their state.
            <br /> Controlled components provide more control over their
            behavior and are typically easier to test and maintain, while
            uncontrolled components are easier to use but may be less flexible.
          </p>
        </div>
        <div className="py-5">
          <h1 className="text-2xl font-bold py-2">
            2. How to validate React props using PropTypes
          </h1>

          <p className="leading-relaxed text-md">
            To validate React props using PropTypes, you need to import the
            PropTypes library and define the expected props for your component
            as a static property on the component. You can then use the various
            PropTypes validators to specify the type and shape of each prop. For
            example, you can use PropTypes.string to specify that a prop should
            be a string, or PropTypes.shape to specify that a prop should be an
            object with specific keys and values. Once you have defined the
            PropTypes for your component, React will automatically validate the
            props at runtime and warn you in the console if any of the props are
            of the wrong type or shape. This can help catch errors early and
            make your code more robust. Regenerate response
          </p>
        </div>
        <div className="py-5">
          <h1 className="text-2xl font-bold py-2">
            3. Tell us the difference between nodejs and express js.
          </h1>
          <p className="leading-relaxed text-md">
            Node.js is a JavaScript runtime environment that allows developers
            to run JavaScript code on the server-side, while Express.js is a web
            application framework built on top of Node.js that provides a set of
            tools and conventions for building web applications and APIs.
          </p>
        </div>
        <div className="py-5">
          <h1 className="text-2xl font-bold py-2">
            4.What is a custom hook, and why will you create a custom hook?
          </h1>

          <p className="leading-relaxed text-md">
            {" "}
            A custom hook is a JavaScript function that allows us to reuse logic
            across multiple components. We create custom hooks to encapsulate
            and share logic that is used by multiple components in our
            application. If we find ourselves repeating the same code pattern in
            multiple components, we can extract that code into a custom hook and
            reuse it across our components. This makes our code more modular and
            easier to maintain, as we can update the logic in one place and have
            it propagate across all the components that use the custom hook.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
