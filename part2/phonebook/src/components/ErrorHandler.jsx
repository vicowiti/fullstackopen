// eslint-disable-next-line react/prop-types
const ErrorHandler = ({ message, type }) => {
  if (message === null) {
    return null;
  }
  return (
    <div
      className="message"
      style={{
        padding: "1rem",
        borderRadius: "0.5rem",
        border: type === "error" ? "10px solid red" : "3px solid green",
        marginTop: "1rem",
        marginBottom: "1rem",
        fontWeight: "bold",
        backgroundColor: "#d3d3d3",
        color: type === "error" ? "red" : "green",
      }}
    >
      {message}
    </div>
  );
};

export default ErrorHandler;
