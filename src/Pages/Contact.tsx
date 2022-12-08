import Social from "../components/Social";

type Props = {};

const Contact = (props: Props) => {
  const handleForm = (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="text-black text-base mb-20 flex flex-col items-center">
      <h1 className="font-bold text-2xl mt-10 mb-6">Contact us</h1>
      <form action="post" onSubmit={handleForm}>
        <div className="m-4">
          <input
            className="border-2 rounded w-full md:w-96 p-4 "
            type="email"
            name="email"
            id=""
            placeholder="Enter your email"
          />
        </div>
        <div className="m-4">
          <input
            className="border-2 rounded w-full md:w-96 p-4 "
            type="text"
            name="name"
            id=""
            placeholder="Enter your name"
          />
        </div>
        <div className="m-4">
          <input
            className="border-2 rounded w-full md:w-96 p-4 "
            type="textarea"
            name="message"
            id=""
            placeholder="Enter your message"
          />
        </div>
        <div className="m-4 mt-8">
          <button
            type="submit"
            className="p-4 bg-primary shadow-xl focus:shadow-none active:shadow-none rounded text-white md:w-96 w-full"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="my-10 px-20 py-4 bg-tertiary max-w-max flex items-center w-full justify-center">
        <Social />
      </div>
    </div>
  );
};

export default Contact;
