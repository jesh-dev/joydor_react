import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Components/Modal"; // assuming you already created this

const Logout = () => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // Simulate async logout
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      setLoading(false);
      setShowModal(true);

      // Auto redirect after modal shows
      setTimeout(() => {
        setShowModal(false);
        navigate("/login");
      }, 2000);
    }, 1000); // simulate 1s "logout" delay
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {loading && (
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-solid"></div>
      )}

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <h1 className="text-xl font-semibold text-center">You have been logged out</h1>
      </Modal>
    </div>
  );
};

export default Logout;
