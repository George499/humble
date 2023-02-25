import { useState } from "react";
import LoginForm from "../components/ui/loginForm";
const Login = () => {
  const { type } = useParams();

  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4">Login</h3>
          <LoginForm />;
        </div>
      </div>
    </div>
  );
};

export default Login;
