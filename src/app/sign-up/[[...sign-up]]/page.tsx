import { SignUp } from "@clerk/nextjs";

export default () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SignUp />
    </div>
  );
};
