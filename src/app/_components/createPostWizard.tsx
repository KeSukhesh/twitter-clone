"use client";

import { UserButton, useUser } from "@clerk/nextjs";

const CreatePostWizard = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="flex gap-3 w-full">
      <img 
        src={user.imageUrl}
        alt="Profile_image"
        className="h-14 w-14 rounded-full"
      />
      <input placeholder="Tweet!" className="grow bg-transparent outline-none"/>
    </div>
  );
};

export default CreatePostWizard;