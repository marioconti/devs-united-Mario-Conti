import "./App.css";
import { CreateTweet } from "../src/Components/CreateTweet/index";
import { TweetList } from "./Components/TweetList/index";

function App() {
  return (
    <div>
      <CreateTweet />
      <TweetList />
    </div>
  );
}

export default App;
