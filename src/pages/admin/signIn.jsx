import React from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  checkbox,
  Checkbox,
} from "@material-tailwind/react";
import logo from "../../assets/Image/logo.png";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <Card
        color="transparent"
        shadow={false}
        className="bg-[#1F1F1F] w-fit h-[510px] py-5 px-5 md:px-14 mx-auto"
      >
        <Typography
          variant="h4"
          color="blue-gray"
          className="flex justify-center"
        >
          <Link to={"/admin"}>
            <img src={logo} alt="company-logo" />
          </Link>
        </Typography>
        <Typography color="gray" className="mt-3 font-normal text-center">
          Sign into your admin account.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSignIn}
        >
          <div className="mb-1 flex flex-col gap-4">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 text-white"
            >
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 text-white"
            >
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <div className="flex justify-between items-center">
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    Remember Me
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />

              <Link className="text-[#E92727]">Forgot Password?</Link>
            </div>
          </div>
          <Button className="mt-6 bg-[#F78214]" fullWidth type="submit">
            sign up
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-normal text-white"
          >
            New User?
            <Link
              className="font-medium ms-3 text-[#F78214]"
              to={"/admin/signUp"}
            >
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </main>
  );
};