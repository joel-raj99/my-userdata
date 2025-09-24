import CountUp from "react-countup";

function StatsCard({ icon: Icon, color, title, value }) {
  return (
    <div className="relative bg-white p-6 rounded-2xl shadow-lg flex items-center gap-4 hover:shadow-xl transition overflow-hidden">
      
      <div className="absolute top-0 right-0 h-full w-2 bg-pink-600 rounded-r-2xl"></div>

      <Icon className={`${color} text-4xl`} />
      <div>
        <h2 className="text-lg font-semibold text-gray-600">{title}</h2>
        <p className="text-3xl font-bold text-gray-900">
          <CountUp end={value} duration={1.5} />
        </p>
      </div>
    </div>
  );
}

export default StatsCard;

