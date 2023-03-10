import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Modal } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSignupToggle,
  setLoginToggle,
  setSignUpToggle,
} from "../../store/modalSlice";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { signUp } from "../../service/auth";
import { getToken, setToken, setUserDetails } from "../../store/authSlice";
import Link from "next/link";
import { LoaderIcon } from "react-hot-toast";

export default function SignUpModal() {
  const isSignupModalOpen = useSelector(getSignupToggle);

  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(setSignUpToggle(false));
  };

  const openCloseLoginSignUp = () => {
    dispatch(setSignUpToggle(false));
    dispatch(setLoginToggle(true));
  };
  const onChangeField = () => {
    clearErrors("signup");
  };
  const { control, handleSubmit, reset, formState, setError, clearErrors } =
    useForm({
      defaultValues: {
        email: "",
        username: "",
        password: "",
      },
    });

  const { isSubmitting, errors } = formState;

  const onSubmit = async (data) => {
    const response = await signUp(data);
    response.error &&
      setError("signup", { types: { message: response.error.message } });
    response.jwt && dispatch(setToken(response.jwt));
    response.user && dispatch(setUserDetails(response.user));
    response.jwt && closeModalHandler();
    response.jwt && reset();
  };

  return (
    <Modal open={isSignupModalOpen} onClose={closeModalHandler}>
      <div className="bg-white p-5 rounded md:w-1/4">
        <div className="text-primary text-lg w-[80vw] md:w-full text-center">
        <div className="modal-close cursor-pointer text-black  text-sm z-50 pb-2">
          <button className="float-right" onClick={closeModalHandler}>
            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </button>
        </div>
          <p className="font-semibold">SIGNUP</p>
          <p className="text-sm text-black">
            Create an account with Infodal to gain access to exclusive content
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  className="pt-4"
                  placeholder="Username"
                  required
                  variant="filled"
                  onChangeCapture={onChangeField}
                  {...field}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  className="pt-4"
                  placeholder="Email"
                  required
                  onChangeCapture={onChangeField}
                  variant="filled"
                  {...field}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  className="py-4"
                  placeholder="Password"
                  required
                  hidden
                  variant="filled"
                  onChangeCapture={onChangeField}
                  type="password"
                  {...field}
                />
              )}
            />
            <p className="text-black text-sm px-5 pb-3">
              <span>By signing up, you agree to our </span>
              <Link href="/terms-of-use" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <span className="underline text-primary">Terms of Use</span>
                </a>
              </Link>
              <span> and </span>
              <Link href="/privary-policy" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <span className="underline text-primary">
                    Privacy Policy.
                  </span>
                </a>
              </Link>
            </p>
            <p className="text-sm text-red-400 pb-2">
              {errors.signup && errors.signup.types.message}
            </p>
            <Button
              type="sumbit"
              fullWidth
              disabled={isSubmitting ? true : false}
            >
              {isSubmitting ? "Signing up..." : "SignUp"}
            </Button>

            <div className="text-sm pt-4 text-black">
              <span>Already Have an Account? </span>
              <span
                className="text-primary underline"
                onClick={openCloseLoginSignUp}
              >
                Sign In
              </span>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
