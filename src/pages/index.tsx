import * as React from "react";
import { Sidebar, Playground } from "@components/section";

const IndexPage = () => {
  return (
    <main className="sm:p-5 md:flex md:p-10 lg:p-20">
      <div className="sm:w-full md:w-1/4 lg:w-1/6">
        <Sidebar />
      </div>
      <div className="sm:w-full sm:mt-10 md:mt-0 md:w-4/6 lg:w-1/3">
        <Playground />
      </div>
    </main>
  );
};

export default IndexPage;
