import { useEffect, useState } from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import LoadingSpinner from "../component/loading-spinner";

export default function ContactMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/contactMessages");
        const data = await response.json();
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort messages by time
        setMessages(data);
      } catch (error) {
        console.log("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const updateBookingStatus = async (id, action) => {
    try {
      const response = await fetch("/api/contactMessages", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, action }),
      });

      if (response.ok) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg._id === id
              ? {
                  ...msg,
                  confirmed: action === "confirm",
                  cancelled: action === "cancel",
                }
              : msg
          )
        );
        alert(`Booking ${action === "confirm" ? "confirmed" : "cancelled"} successfully!`);
      } else {
        const { message } = await response.json();
        console.error(message);
        alert(`Failed to ${action} booking.`);
      }
    } catch (error) {
      console.error("Error updating booking status:", error);
      alert("An error occurred while updating booking status.");
    }
  };



  const deleteMessage = async (id) => {
    try {
      const response = await fetch("/api/contactMessages", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setMessages((prev) => prev.filter((msg) => msg._id !== id)); // Remove deleted message from state
        alert("Message deleted successfully!");
      } else {
        const { message } = await response.json();
        console.error(message);
        alert("Failed to delete message.");
      }
    } catch (error) {
      console.error("Error deleting message:", error);
      alert("An error occurred while deleting the message.");
    }
  };


  const sendEmail = async (recipientEmail, name) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipientEmail,
          subject: `Booking Confirmation for ${name}`,
          messageBody: `Dear ${name},\n\nYour booking has been confirmed. Thank you for choosing our service.\n\nBest regards,\nYour Company`,
        }),
      });
  
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        const { message } = await response.json();
        console.error(message);
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending the email.');
    }
  };
  

  if (loading) return <LoadingSpinner />;

  return (
    <div className="my-10 mb-40 px-8">
      <div className="mb-10 flex justify-center">
        <h1 className="text-xl font-semibold text-white bg-black px-8 py-2 rounded-md">
          All Bookings
        </h1>
      </div>
      <div>
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div
              key={msg._id}
              className={`mx-auto mb-6 max-w-xl rounded-lg p-6 shadow-xl ${
                msg.confirmed
                  ? "bg-green-100"
                  : msg.cancelled
                  ? "bg-red-100"
                  : "bg-white"
              }`}
            >
              <div className="mb-4 border-b border-gray-300 pb-3">
                <h2 className="text-2xl font-semibold text-gray-800">{msg.name}</h2>
                <div className="flex items-center gap-2">
                  <a href={`mailto:${msg.email}`} className="text-sm text-gray-600 flex items-center gap-1">
                    <AiOutlineMail className="text-gray-600" /> {msg.email}
                  </a>
                </div>
                <p className="text-md mt-2 font-medium text-gray-800">{msg.dateofbirth}</p>
              </div>

              <div className="mb-4 rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-700">
                  <strong>Message:</strong> {msg.message}
                </p>
              </div>

              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4 flex items-center gap-2">
                  <AiOutlinePhone className="text-blue-500" />
                  <a
                    href={`tel:${msg.phoneNumber}`}
                    className="text-sm text-gray-700 hover:underline"
                  >
                    {msg.phoneNumber}
                  </a>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Date:</strong> {msg.date}
                  </p>
                </div>
              </div>

              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Time:</strong> {msg.time}
                  </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-700">
                    <strong>IELTS Score:</strong> {msg.ielts}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">

              {/* <button
                  onClick={() => deleteMessage(msg._id)}
                  className="rounded-md bg-gray-500 px-4 mr-2 py-1 text-white hover:bg-gray-600"
                >
                  Delete
                </button> */}
                {msg.confirmed ? (
                  <span className="text-green-600 font-semibold">Confirmed</span>
                ) : msg.cancelled ? (
                  <span className="text-red-600 font-semibold">Cancelled</span>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateBookingStatus(msg._id, "confirm")}
                      className="rounded-md bg-blue-500 px-4 py-1 text-white hover:bg-blue-600"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => updateBookingStatus(msg._id, "cancel")}
                      className="rounded-md bg-red-500 px-4 py-1 text-white hover:bg-red-600"
                    >
                      Cancel
                    </button>
                  </div>
                )}
                <span className="text-xs mt-20 text-gray-500">
                  {new Date(msg.createdAt).toLocaleString()}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p>No messages found.</p>
        )}
      </div>
    </div>
  );
}