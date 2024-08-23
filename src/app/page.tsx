import LoginForm from "@/components/LoginForm";
import Home from "@/components/Home";

const MyServerComponent = async () => {
  return (
    <div>
      <LoginForm />
      <Home />
    </div>
  );
};

export default MyServerComponent;
