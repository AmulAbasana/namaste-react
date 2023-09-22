const ShimmerCard = () => (
  <div className="p-4 bg-gray-200 m-4 w-[200px] rounded-lg shadow-lg h-[450px]">
    <img className="rounded-lg w-48 h-48 bg-slate-300" />
    <h3 className="py-2 my-6 w-full bg-slate-300"></h3>
    <h4 className="py-2 my-6 w-full bg-slate-300"></h4>
    <h4 className="py-2 my-6 w-full bg-slate-300"></h4>
    <h4 className="py-2 my-6 w-full bg-slate-300"></h4>
    <h4 className="py-2 my-6 w-full bg-slate-300"></h4>
  </div>
);

const Shimmer = () => (
  <div className="flex flex-wrap my-4 mx-10 p-4 justify-left">
    <ShimmerCard />
    <ShimmerCard />
    <ShimmerCard />
    <ShimmerCard />
    <ShimmerCard />
  </div>
);

export default Shimmer;
