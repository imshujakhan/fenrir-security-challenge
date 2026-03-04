import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function SignUpForm({ onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <input
          type="text"
          className="input-field text-sm placeholder:text-xs"
          placeholder="First name*"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          required
        />
      </div>
      <div>
        <input
          type="text"
          className="input-field text-sm placeholder:text-xs"
          placeholder="Last name*"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          required
        />
      </div>

      <div>
        <input
          type="email"
          className="input-field text-sm placeholder:text-xs"
          placeholder="Email address*"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="input-field text-sm placeholder:text-xs pr-12"
            placeholder="Password(8+ characters)*"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="terms"
          className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
          checked={formData.terms}
          onChange={(e) =>
            setFormData({ ...formData, terms: e.target.checked })
          }
          required
        />
        <label
          htmlFor="terms"
          className="text-xs text-gray-600 dark:text-gray-400"
        >
          I agree to Aps's <a href="" className="text-blue-600 underline">Terms & Conditions</a> and acknowledge the
          <a href="" className="text-blue-600 underline"> Privacy Policy</a>
        </label>
      </div>

      <button type="submit" className="btn-primary w-full rounded-3xl">
        Create account
      </button>
    </form>
  );
}

export default SignUpForm;
