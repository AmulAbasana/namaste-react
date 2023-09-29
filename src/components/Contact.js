const Contact = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-3xl">Contact Us</h1>
      <form className="m-4">
        <input
          type="text"
          className="p-2 border border-black rounded-lg m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="p-2 border border-black rounded-lg m-2"
          placeholder="message"
        />
        <button
          type="button"
          className="p-2 border border-black bg-gray-300 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
