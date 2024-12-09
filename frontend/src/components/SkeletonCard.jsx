const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-elegant animate-pulse">
      <div className="w-full h-64 bg-gray-300"></div>
      <div className="p-4 flex items-center justify-between">
        <div className="h-10 w-24 bg-gray-300 rounded-full"></div>
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
