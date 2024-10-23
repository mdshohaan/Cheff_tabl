const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat rounded-3xl md:w-full h-full md:h-[35.5rem] mb-10"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/8KgHKGW/ryan-kwok-Fhe-Bw4-Bf-Rp-Q-unsplash.jpg)",
      }}
    >
      <div className="w-9/12 mx-auto flex flex-col justify-center items-center text-center h-fll space-y-6 py-4">
        <h1 className="font-bold text-white md:text-[3.25rem]">
          Discover An Exceptional Cooking class tailored
        </h1>
        <p className="tetx-lg text-white font-normal">
          A chef is a person who is professionally trained to cook and
          experiment with different food to offer a great dining experience for
          people who come to the restaurant. While we may think that the only
          role of a chef is to make healthy food, we will understand the extent
          of his duties through this essay on chefs in English.
        </p>
        <div className="flex gap-4 text-xl font-semibold">
          <button className="btn bg-green-400 rounded-full border-none ">
            Explore Now
          </button>
          <button className="btn btn-outline text-white hover:bg-green-400">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
