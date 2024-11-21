import "./ErrorPage.css";
import errorPic from "../assets/error.png"

function ErrorPage() {
  return (
    <div id="image-div">
      <img id="image-404" src={errorPic} alt="404 Error Image" />
    </div>
  );
}

export default ErrorPage;
