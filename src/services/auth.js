import { toast } from "sonner";

import { PATHS } from "../constants/Paths";

const handleLoginMutation = async (
  { email, password },
  loginMutation,
  setError,
  navigate,
  methods
) => {
  try {
    const res = await loginMutation({ email, password }).unwrap();

    if (res.success) {
      toast.success(res?.message || "Login successful");

      navigate(PATHS.dashboard);

      methods.reset();
    }

    return null;
  } catch (error) {
    let errors = error?.data;

    if (typeof errors?.errors === "object") {
      setError(errors?.errors);
    } else {
      toast.error(
        errors?.message || errors?.error || errors || "Login failed",
        {
          id: "global-error",
        }
      );
    }

    return null;
  }
};

const handleVerifyEmailMutation = async (
  code,
  verifyEmail,
  setError,
  navigate,
  methods
) => {
  try {
    const res = await verifyEmail(code).unwrap();

    if (res.success) {
      toast.success(res?.message || "Login successful");

      navigate(PATHS.dashboard);

      methods.reset();
    }

    return null;
  } catch (error) {
    let errors = error?.data;

    if (typeof errors?.errors === "object") {
      setError(errors?.errors);
    } else {
      toast.error(
        errors?.message || errors?.error || errors || "Login failed",
        {
          id: "global-error",
        }
      );
    }

    return null;
  }
};

export { handleLoginMutation, handleVerifyEmailMutation };
