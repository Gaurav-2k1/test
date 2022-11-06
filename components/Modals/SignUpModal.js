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
import { getToken, setToken } from "../../store/authSlice";
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
    response.jwt && closeModalHandler();
    response.jwt && reset();
  };

  return (
    <Modal open={isSignupModalOpen} onClose={closeModalHandler}>
      <div className="bg-white p-5 rounded">
        <div className="text-primary text-lg w-[80vw] text-center">
          <p className="font-semibold">SIGNUP</p>
          <p className="text-sm text-black">
            One or two liner title: It helps the designer plan where the content
            will sit.
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
