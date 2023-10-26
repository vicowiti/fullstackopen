const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;

const Header = ({course}) => {
  return <h1>{course}</h1>;
};

const Content = ({
  
  parts
}) => {
  return (
    <div>
      <Part exercise={parts[0].exercises} part={parts[0].name} />
      <Part exercise={parts[1].exercises} part={parts[1].name} />
      <Part exercise={parts[2].exercises} part={parts[2].name} />
    </div>
  );
};
const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
};

const Part = ({ part, exercise }) => {
  return (
    <>
      <p>
        {part} {exercise}
      </p>
    </>
  );
};
