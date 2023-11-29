import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {NewPost} from "./components/NewPost";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <NewPost />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
