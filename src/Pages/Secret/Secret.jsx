import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

const Secret = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    unregister,
  } = useForm({
    mode: "onTouched",
  });

  const domain = watch("domain");

  // Unregister "Type Here" field if domain is not "Others"
  useEffect(() => {
    if (domain !== "others") {
      unregister("otherdomainname");
    }
  }, [domain, unregister]);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="w-[500px] p-8 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sign Up</h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter your details to register.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6">
          {/* Username */}
          <div>
            <Controller
              name="username"
              control={control}
              rules={{
                required: "Username is Required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
              }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    className={`w-full border rounded px-3 py-2 text-gray-700 ${
                      errors.username ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Username"
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Email */}
          <div>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is Required",
                pattern: {
                  value: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    className={`w-full border rounded px-3 py-2 text-gray-700 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Email ID"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Select Domain */}
          <div>
            <Controller
              name="domain"
              control={control}
              rules={{ required: "Domain is Required" }}
              render={({ field }) => (
                <div>
                  <select
                    {...field}
                    className={`w-full border rounded px-3 py-2 text-gray-700 ${
                      errors.domain ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select Domain</option>
                    <option value="designer">Designer</option>
                    <option value="dev">Developer</option>
                    <option value="tester">Tester</option>
                    <option value="others">Others</option>
                  </select>
                  {errors.domain && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.domain.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Type Here (Conditional) */}
          {domain === "others" && (
            <div>
              <Controller
                name="otherdomainname"
                control={control}
                rules={{ required: "Please specify the domain" }}
                render={({ field }) => (
                  <div>
                    <input
                      {...field}
                      className={`w-full border rounded px-3 py-2 text-gray-700 ${
                        errors.otherdomainname
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Type Here"
                    />
                    {errors.otherdomainname && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.otherdomainname.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          )}

          {/* Password */}
          <div>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is Required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/,
                  message:
                    "Password must be at least 8 characters, with uppercase, lowercase, number, and special character",
                },
              }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="password"
                    className={`w-full border rounded px-3 py-2 text-gray-700 ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Confirm Password is Required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="password"
                    className={`w-full border rounded px-3 py-2 text-gray-700 ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Confirm Password"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Buttons */}
          <div className="col-span-2 flex justify-between mt-4">
            <button
              type="button"
              onClick={() => reset()}
              className="px-4 py-2 bg-gray-100 border rounded hover:bg-gray-200"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Secret;
