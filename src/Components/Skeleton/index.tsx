import React from "react";

interface SkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

const Skeleton = ({ className, children }: SkeletonProps) => {
  return (
    <div role="status" className="animate-pulse">
      {children}
    </div>
  );
};

export default Skeleton;
