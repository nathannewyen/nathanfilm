import React from "react";
import { Sidebar } from "@components/section";
import { useStaticQuery, graphql } from "gatsby";

const Works = () => {
  const data = useStaticQuery(graphql`
    query ProfilePage {
      gcms {
        profiles {
          id
          name
          image {
            url
          }
        }
      }
    }
  `);
  const profileData = data.gcms.profiles;

  return (
    <main className="sm:p-5 md:flex md:p-10 lg:p-20">
      <div className="sm:w-full md:w-1/4 lg:w-1/4">
        <Sidebar />
      </div>
      <div className="sm:w-full sm:mt-10 md:mt-0 md:w-4/6 lg:w-full">
        {profileData &&
          profileData.map((profile: any, i: number) => {
            return (
              <div className="tablet:flex tablet:flex-row" key={i}>
                <div className="text-sm text-gray mb-5 w-1/2">
                  <img
                    className="w-full"
                    src={profile.image.url}
                    alt={profile.name}
                  />
                </div>
                <div className="sm:text-sm md:text-base text-gray tablet:ml-5 mt-8 italic md:m-5">
                  <p>Vietnam and Dallas / Atlanta based photographer</p>
                  <p className="sm:mt-2 tablet:mt-5">Born in 1996</p>
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
};

export default Works;
