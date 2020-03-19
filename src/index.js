import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ];

  const Header = props => {
    console.log(props);
    return <h1>{props.course}</h1>;
  };

  const Content = props => {
    return props.parts.map(item => {
      return (
        <p>
          {item.name}: {item.exercises}
        </p>
      );
    });
  };

  const Total = props => {
    let counter = 0;
    props.parts.map(item => {
      counter += item.exercises;
    });
    return `Total exercises: ${counter}`;
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
