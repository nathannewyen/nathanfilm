import * as React from "react";
import { Sidebar, Works } from "@components/section";

const FriendsPage = () => {
  return (
    <main className="sm:p-5 md:flex md:p-20">
      <div className="sm:w-full md:w-1/6">
        <Sidebar />
      </div>
      <div className="sm:w-full sm:mt-10 md:w-1/4">
        <Works />
      </div>
    </main>
  );
};

export default FriendsPage;
