"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ToastSave } from "@/components/ui/toast-save";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function SignupFormDemo() {
  const [toastState, setToastState] = React.useState<"initial" | "loading" | "success" | "error">("initial");
  const [errorMsg, setErrorMsg] = React.useState<string>("");
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToastState("loading");
    setErrorMsg("");
    console.log(WEB3FORMS_ACCESS_KEY);
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY ||"");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const data = await res.json();

      if (data.success) {
        setToastState("success");
        // console.log("Form submitted successfully:", data);
        (event.target as HTMLFormElement).reset();
        setTimeout(() => setToastState("initial"), 2000);
      } else {
        setToastState("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
        setTimeout(() => setToastState("initial"), 2500);
        // console.log("something went wrong", data);
      }
    } catch (error) {
      setToastState("error");
      setErrorMsg("Server error. Please try again later.");
      setTimeout(() => setToastState("initial"), 2500);
      // console.log("Error submitting form:", error);
    }
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-transparent  p-4 sm:p-10 md:rounded-2xl md:p-1.5 lg:p-5 ">
      {toastState !== "initial" && (
        <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 flex justify-center w-full pointer-events-none">
          <ToastSave
            state={toastState === "error" ? "initial" : toastState}
            loadingText="Submitting..."
            successText="Thank you for your review!"
            initialText={errorMsg || "Fill the form and submit."}
            className={toastState === "error" ? "mb-4 pointer-events-auto bg-red-500 text-white border-red-600" : "mb-4 pointer-events-auto"}
            hideActions={toastState === "error"}
          />
        </div>
      )}
      <form className="my-8" onSubmit={onSubmit}>
        <div className="mb-4 flex flex-col space-y-2">
          <LabelInputContainer>
            <Label className="text-white " htmlFor="firstname">
              Your name
            </Label>
            <Input
              id="firstname"
              name="firstname"
              className="focus:ring-2 focus:ring-cyan-400"
              required
              placeholder="Hanna"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="text-white" htmlFor="twitter">
              Your Twitter
            </Label>
            <Input
              id="twitter"
              name="twitter"
              placeholder="@Gruz"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="text-white" htmlFor="review">
              Your review
            </Label>
            <textarea
              id="review"
              name="review"
              required
              placeholder="Share your thoughts..."
              rows={5}
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent p-2 text-white dark:text-neutral-200 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </LabelInputContainer>
        </div>
        <button
          className="group/btn cursor-pointer relative block h-10 w-full rounded-md bg-gradient-to-br bg-purple-500 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full  flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
