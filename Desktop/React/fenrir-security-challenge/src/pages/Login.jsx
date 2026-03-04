import { useNavigate } from "react-router-dom";
import BrandingPanel from "../components/BrandingPanel";
import SignUpForm from "../components/SignUpForm";
import SocialLogin from "../components/SocialLogin";
import Logo from "../components/Logo";

function Login() {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black from-30% via-[rgba(26,58,66)] via-[rgba(149,101,55)] to-[rgba(130,45,33)]"></div>

      <div className="absolute top-6 left-6 z-20">
        <Logo />
      </div>

      <BrandingPanel />

      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 relative z-10">
        <div className="w-full max-w-md">
          <div className="card mt-20">
            <div className="mb-8 ">
              <h2 className="text-2xl flex justify-center font-bold text-gray-900 dark:text-white mb-2 ">
                Sign up
              </h2>
              <p className="text-gray-600 flex justify-center dark:text-gray-400">
                Already have an account?
                <a href="">Log in</a>
              </p>
            </div>

            <SignUpForm onSubmit={handleSubmit} />
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
