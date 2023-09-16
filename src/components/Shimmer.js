const ShimmerCard = () => (
  <div className="shimmer-card">
    <div className="shimmer-effect shimmer-logo" />
    <div className="shimmer-effect shimmer-elements" />
    <div className="shimmer-effect shimmer-elements" />
    <div className="shimmer-effect shimmer-elements" />
    <div className="shimmer-effect shimmer-elements" />
    <div className="shimmer-effect shimmer-elements" />
  </div>
);

const Shimmer = () => (
  <div className="shimmer-container">
    <ShimmerCard />
    <ShimmerCard />
    <ShimmerCard />
    <ShimmerCard />
    <ShimmerCard />
  </div>
);

export default Shimmer;
