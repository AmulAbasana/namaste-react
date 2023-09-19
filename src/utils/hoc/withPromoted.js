const withPromoted = (Component) => {
  return (props) => {
    return (
      <div>
        <label className="absolute mx-2 p-1 bg-black text-white rounded-xl">
          Promoted
        </label>
        <Component {...props} />
      </div>
    );
  };
};

export default withPromoted;
