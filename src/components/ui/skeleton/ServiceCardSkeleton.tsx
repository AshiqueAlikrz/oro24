const ServiceCardSkeleton = () => {
  return (
    <div className="rounded-xl bg-gray-200 animate-pulse h-32 sm:h-36 md:h-40 flex flex-col items-center justify-center">
      <div className="w-10 h-10 bg-gray-300 rounded mb-2" />
      <div className="h-3 w-16 bg-gray-300 rounded" />
    </div>
  );
};

export default ServiceCardSkeleton;
