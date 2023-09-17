const User = (props) => {
  const { name, location } = props;
  return (
    <div className="user-card">
      <h3>Name: {name}</h3>
      <p>Location: {location}</p>
      <p>Contact: On Email</p>
    </div>
  );
};

export default User;
