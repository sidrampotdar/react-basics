import PropTypes from "prop-types";

function UserGreeting(props) {
  return (
    props.isLoggedIn ? (
      <h2 className="welcome-msg">Welcome {props.username}</h2>
    ) : (
      <h2 className="login-prompt">Please Log In to Continue</h2>
    )
  );
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};


//This is deprecated; it will NOT WORK 
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting;
