import { LoginForm } from "@/components/login-form";
import { ThemeToggle } from "@/components/theme-toggle";

const Page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ThemeToggle />
      <LoginForm />
    </div>
  );
};

export default Page;
