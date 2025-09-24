import { GoClock } from "react-icons/go";

function Header({ today }) {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800">My Dashboard</h1>
      <div className="flex items-center gap-2 text-lg font-medium text-gray-600">
        <GoClock className="text-gray-600" />
        <span>Today: {today}</span>
      </div>
    </header>
  );
}

export default Header;
