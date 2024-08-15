/* eslint-disable react/no-unescaped-entities */
import React from "react";
import image1 from "../assets/images1.png";
import image2 from "../assets/images2.png";
import image3 from "../assets/images3.png";
const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: image1,
    },
    {
      id: 2,
      title:"What are your safeguarding responsibilities and how can you manage them?",
      image: image2,
    },
    {
      id: 3,
      title: "Revamping the Membership Model with Triathlon Australia",
      image: image3,
    },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl max-auto my-12" id="faq">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
          Caring is the new marketing
        </h2>
        <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.
        </p>
      </div>

      {/*all blogs*/}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={blog.image}
              alt=""
              className="hover:scale-95 transition-all duration-300"
            />
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3 className="mb-3 text-neutralGrey font-semibold">
                {blog.title}
              </h3>
              <div className="flex items-center justify-center gap-8">
                <a
                  href="/"
                  className="text-brandPrimary font-bold hover:text-neutral-700"
                >
                  Readmore
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    className="inline-block ml-2"
                  >
                    <path
                      d="M8.7139 6.40925L11.006 4.11717C11.2778 3.84534 11.2778 3.40461 11.006 3.13278L8.7139 0.840698M10.8021 3.62498L1.05713 3.62498"
                      stroke="#4CAF4F"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
