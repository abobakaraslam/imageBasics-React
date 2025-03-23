// File: App.jsx located in src folder
import "./App.css"; //importing stylesheet
function App() {
  return (
    <div>
      <h1 className="pageHeader">Your Name</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/*outer-container*/}
        <div
          style={{ width: "107px", height: "142px", border: "1px solid black" }}
        >
          {/*image-container*/}
          <img
            src="../src/assets/images/cv_920_1080.png"
            alt="Portfolio Logo"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
