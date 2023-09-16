const Progress = ({ percentage }) => {
  return (
    <div className="h-2 rounded-t-md w-full bg-slate-400">
      <div
        style={{ width: `${percentage * 10}%` }}
        className={`h-full ${
          percentage >= 5
            ? "bg-gradient-to-r from-primary to-lining"
            : "bg-gradient-to-r from-lining to-primary"
        }`}
      ></div>
    </div>
  );
};

export default Progress;
