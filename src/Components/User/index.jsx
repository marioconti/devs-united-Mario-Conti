import { CreateTweet } from "./CreateTweet/index";
import { TweetList } from "./TweetList/index";
import { Nav } from "./Nav/index";
import { Profile } from "./Profile";

export const User = () => {
  return (
    <>
      <Nav />
      <CreateTweet />
      <TweetList />
      {/* <Profile/> */}
    </>
  );
};
