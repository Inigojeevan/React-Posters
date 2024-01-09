import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";
function App() {
  const [modalIsVisble, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisble} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
