import React from "react";

const AccountList = ({ accounts = [] }) => {
  // Default list of accounts if none are passed as props
  const defaultAccounts = [
    {
      name: "John Doe",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Alice Johnson",
      profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "Bob Brown",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Charlie Davis",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  // Use the provided accounts prop or fallback to the default list
  const accountList = accounts.length > 0 ? accounts : defaultAccounts;

  return (
    <div className="account-list-container">
      {accountList.map((account, index) => (
        <div
          key={index}
          className="account-row"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            borderRadius: "10px",
            margin: "5px 0",
            backgroundColor: "#fff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          {/* Profile Image */}
          <img
            src={account.profilePic}
            alt={account.name}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "15px",
            }}
          />
          {/* Name */}
          <span style={{ flex: 1, fontWeight: "bold" }}>{account.name}</span>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <button
              style={{
                padding: "5px 10px",
                borderRadius: "5px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Friend
            </button>
            <button
              style={{
                padding: "5px 10px",
                borderRadius: "5px",
                backgroundColor: "#2196F3",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Message
            </button>
            <button
              style={{
                padding: "5px 10px",
                borderRadius: "5px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Mute
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountList;
