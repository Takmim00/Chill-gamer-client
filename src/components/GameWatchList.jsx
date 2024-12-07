import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const GameWatchList = () => {
  const { user } = useContext(authContext);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/watchList/${user.email}`)
        .then((res) => res.json())
        .then((data) => setWatchList(data))
    }
  }, [user]);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Game WatchList</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
          <th className="px-6 py-3 text-left">No.</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Game Title
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Genre
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Rating
            </th>
          </tr>
        </thead>
        <tbody>
          {watchList.map((item, index) => (
            <tr key={item._id} className="border-t border-gray-200">
                <td className="px-6 py-3">{index + 1}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{item.title}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{item.genre}</td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {item.rating}/10
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameWatchList;
