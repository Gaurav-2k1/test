import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Modal } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoginToggle, setLoginToggle } from "../../store/modalSlice";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { login } from "../../service/auth";
import { setToken, setUserDetails } from "../../store/authSlice";
import { debounce } from "lodash";

export default function LoginModal() {
  const isLoginModalOpen = useSelector(getLoginToggle);

  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(setLoginToggle(false));
  };

  const { control, handleSubmit, reset, formState, setError, clearErrors } =
    useForm({
      defaultValues: {
        identifier: "",
        password: "",
      },
    });

  const { isSubmitting, errors } = formState;
  const onChangeField = () => {
    clearErrors("login");
  };
  const onSubmit = async (data) => {
    const response = await login(data);

    response.error &&
      setError("login", { types: { message: response.error.message } });
    response.jwt && dispatch(setToken(response.jwt));
    response.user && dispatch(setUserDetails(response.user));
    response.jwt && closeModalHandler();
    response.jwt && reset();
  };

  return (
    <Modal open={isLoginModalOpen} onClose={closeModalHandler}>
      <div className="bg-white p-5 rounded md:w-1/4">
        <div className="text-primary text-lg w-[80vw] md:w-full text-center">
        <div className="modal-close cursor-pointer text-black  text-sm z-50 pb-2">
          <button className="float-right" onClick={closeModalHandler}>
            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </button>
        </div>
          <p className="font-semibold">LOGIN</p>
          <p className="text-sm text-black">
            Please login to your account to gain access to exclusive content
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="identifier"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  className="pt-4"
                  placeholder="Email or Username"
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
                  type="password"
                  onChangeCapture={onChangeField}
                  {...field}
                />
              )}
            />

            <Button
              type="login"
              fullWidth
              disabled={isSubmitting ? true : false}
            >
              {isSubmitting ? "Logging In..." : "Login"}
            </Button>
            <p className="text-sm text-red-400 pb-2">
              {errors.login && errors.login.types.message}
            </p>
          </form>
        </div>
      </div>
    </Modal>
  );
}
