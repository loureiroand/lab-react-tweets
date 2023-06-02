import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

const Tweet = ({ tweet }) => {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />
      {/* <img src={user.image} className="profile" alt="profile" /> */}

      <div className="body">
        <div className="top">
          <User userData={tweet.user} />
          <Timestamp time={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
};

export default Tweet;
