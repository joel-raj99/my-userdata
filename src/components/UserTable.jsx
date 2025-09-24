function UserTable({ users }) {
  return (
    <div className="relative bg-white p-6 rounded-2xl shadow-lg mb-10 overflow-hidden">
      {/* Right Edge Bar */}
      <div className="absolute top-0 right-0 h-full w-2 bg-pink-600 rounded-r-2xl"></div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Users</h2>

      <table className="w-full border-collapse overflow-hidden rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border-b">ID</th>
            <th className="p-3 border-b">Name</th>
            <th className="p-3 border-b">Email</th>
            <th className="p-3 border-b">Phone</th>
            <th className="p-3 border-b">Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr
              key={user.id}
              className={`border-b hover:bg-gray-50 ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <td className="p-3">{user.id}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.phone}</td>
              <td className="p-3">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
