import batman from "@/assets/vite.svg";

const ErrorPage = () => {
  const centerH2 = {
    textAlign: "center",
    marginTop: "50px",
  };

  const centerImg = {
    display: "block",
    margin: "40px auto",
  };

  return (
    <div className="quiz-bg">
      <div className="container">
        Error Page
        <h2 style={centerH2}>Cette page existe pas</h2>
        <img style={centerImg} src={batman} alt="error page" />
      </div>
    </div>
  );
};

export default ErrorPage;
