import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { PostRating } from "./PostRating";
import axios from "axios";
import { useGlobalContext } from "../../context/context";
import Cookies from "js-cookie";

export const PostReveiws = () => {
  const { reviewsUrl } = useGlobalContext();
  const [rating, setRating] = useState({
    property: 0,
    value: 0,
    location: 0,
    support: 0,
    name: "",
    email: "",
    message: "",
  });
  const token = Cookies.get("token");

  const handleChange = (obj) => {
    setRating({ ...rating, ...obj });
  };
  const handleChangeInput = (e) => {
    setRating({ ...rating, [e.target.name]: e.target.value });
  };

  const total =
    (rating.property + rating.value + rating.location + rating.support) / 4;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${reviewsUrl}/reviews`,
        { ...rating },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <section>
          <div className="flex items-center flex-wrap md:flex-nowrap">
            <section className="flex justify-between items-center flex-wrap mt-5">
              <div className="flex gap-10 items-center flex-wrap">
                <div>
                  {/* property */}
                  <h1 className="text-[#8D8D8D] text-sm">Property</h1>
                  <PostRating
                    Change={handleChange}
                    rate={rating.property}
                    name={"property"}
                  />
                </div>

                <div>
                  {/* Value for money */}
                  <h1 className="text-[#8D8D8D] text-sm">Value for money</h1>
                  <PostRating
                    Change={handleChange}
                    rate={rating.value}
                    name={"value"}
                  />
                </div>

                <div>
                  {/* Location*/}
                  <h1 className="text-[#8D8D8D] text-sm">Location</h1>
                  <PostRating
                    Change={handleChange}
                    rate={rating.location}
                    name={"location"}
                  />
                </div>

                <div>
                  {/* Support*/}
                  <h1 className="text-[#8D8D8D] text-sm">Support</h1>
                  <PostRating
                    Change={handleChange}
                    rate={rating.support}
                    name={"support"}
                  />
                </div>
              </div>
            </section>
            <section className="bg-black py-3 px-3">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl ">{total.toFixed(1)}</h1>
                <p className="text-[#ABABAB] text-xs mb-2">Out of 5.0</p>
                <div>{/* <PostRating rate={Math.round(total)} /> */}</div>
              </div>
            </section>
          </div>
        </section>

        <section className="mt-5">
          {/* this is for the form */}
          <div className="flex justify-center items-center flex-wrap gap-5">
            <input
              type="text"
              className="bg-transparent border border-[#343434] w-[230px] h-[40px] px-3 outline-none placeholder:text-sm rounded"
              placeholder="Your Name "
              value={rating.name}
              onChange={handleChangeInput}
              name="name"
            />
            <input
              type="email"
              className="bg-transparent border border-[#343434] w-[230px] h-[40px] px-3 outline-none rounded placeholder:text-sm"
              placeholder="Email"
              value={rating.email}
              onChange={handleChangeInput}
              name="email"
            />
          </div>

          <div className="mt-5 md:mx-3">
            <textarea
              id=""
              cols="50"
              className="w-[227px] md:w-[475px] md:h-[200px] resize-none bg-transparent border border-[#343434] outline-none rounded placeholder:text-sm p-3"
              rows="10"
              placeholder="Compose your review"
              value={rating.message}
              onChange={handleChangeInput}
              name="message"
            ></textarea>
          </div>
          <Button size="" className="md:ms-2 mt-3 bg-[#F78214]" type="submit">
            Submit Review
          </Button>
        </section>
      </form>
    </main>
  );
};
