const SkeletonCard = () => {
  return (
    <div className=" bg-white rounded-xl flex flex-col justify-center items-center overflow-hidden shadow-elegant animate-pulse">
      <div className="w-[80%] h-64 bg-neutral-light"></div>
      <div className="p-4">
        <div className="h-6 w-32 bg-neutral-light mb-2"></div>
        <div className="h-6 w-20 bg-neutral-light"></div>
      </div>
    </div>
  );
};
export default SkeletonCard;
