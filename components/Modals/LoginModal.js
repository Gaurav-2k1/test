import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Modal } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoginToggle, setLoginToggle } from "../../store/modalSlice";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { login } from "../../service/auth";
import { setToken } from "../../store/authSlice";
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
    response.jwt && closeModalHandler();
    response.jwt && reset();
  };

  return (
    <Modal open={isLoginModalOpen} onClose={closeModalHandler}>
      <div className="bg-white p-5 rounded">
        <div className="text-primary text-lg w-[80vw] text-center">
          <p className="font-semibold">LOGIN</p>
          <p className="text-sm text-black">
            One or two liner title: It helps the designer plan where the content
            will sit.
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
