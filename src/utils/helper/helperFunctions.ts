const handleFormatSalary = ({
  minSalary,
  maxSalary,
}: {
  minSalary?: number;
  maxSalary: number;
}) => {
  if (minSalary && maxSalary) {
    return `₹ ${minSalary} - ${maxSalary} LPA ✅`;
  } else if (maxSalary) {
    return `Upto ₹ ${maxSalary} LPA ✅`;
  }
};

export { handleFormatSalary };
