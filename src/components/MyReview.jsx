import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../providers/AuthProvider";

const MyReview = () => {
  const { user } = useContext(authContext);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://chill-gamer-server-seven.vercel.app/myReviews?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://chill-gamer-server-seven.vercel.app/review/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
              });
              const remaining = reviews.filter((rev) => rev._id !== _id);
              setReviews(remaining);
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    navigate(`/updateReview/${id}`);
  };

  return (
    <div className="container px-4 py-6 max-w-4xl mx-auto my-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center md:text-left">
        My Reviews
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Title
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Date
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review._id} className="border-t">
                <td className="px-4 py-2">{review.title}</td>
                <td className="px-4 py-2">{review.year}</td>
                <td className="px-4 py-2">{review.displayName}</td>
                <td className="px-4 py-2">
                  <div className="flex flex-col md:flex-row md:space-x-2">
                    <button
                      onClick={() => handleUpdate(review._id)}
                      className="bg-blue-500 text-white px-2 py-1 rounded mb-2 md:mb-0"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
