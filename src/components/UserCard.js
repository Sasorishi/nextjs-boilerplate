import React from "react";
import Image from "next/image";

const UserCard = ({ name, email, avatar, initials }) => {
  return (
    <div className="border p-4 rounded-lg shadow">
      <Image src={avatar} alt={name} className="w-16 h-16 rounded-full mb-2" />
      <h2 className="text-lg font-bold">
        {name} ({initials})
      </h2>
      <p className="text-gray-500">{email}</p>
    </div>
  );
};

export default UserCard;
