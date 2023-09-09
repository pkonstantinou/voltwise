type ValueCardProps = {
  label: string;
  value: string;
  color?: "green" | "red" | "blue" | "yellow" | "purple" | "transparent";
  icon?: React.ReactNode;
};

const colorMap = {
  green: "bg-green-500",
  red: "bg-rose-500",
  blue: "bg-blue-500",
  yellow: "bg-yellow-500",
  purple: "bg-purple-500",
  transparent: "bg-transparent",
};

export const ValueCard: React.FC<ValueCardProps> = ({
  label,
  value,
  color = "transparent",
  icon,
}) => {
  const colorClass = colorMap[color];

  return (
    <div className="w-64 h-36 rounded-xl border border-[#ffffff22] overflow-hidden">
      <div className={`w-full h-1.5 ${colorClass}`} />
      <div className="w-full h-full p-4">
        <div className="flex justify-between items-center">
          <p className="font-light text-lg">{label}</p>
          {icon}
        </div>
        <div className="mt-8 flex justify-end items-end gap-1">
          <p className="text-3xl font-light text-center">{value}</p>
          <p>kWh</p>
        </div>
      </div>
    </div>
  );
};
