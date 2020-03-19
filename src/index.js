import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }

  const Header = props => {
    console.log(props);
    return <h1>{props.course.name}</h1>;
  };

  const Content = props => {
    return props.course.parts.map(item => {
      return (
        <p>
          {item.name}: {item.exercises}
        </p>
      );
    });
  };

  const Total = props => {
    let counter = 0;
    props.course.parts.map(item => {
      counter += item.exercises;
    });
    return `Total exercises: ${counter}`;
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
