import LoginForm from "@/components/LoginForm";
import { getDataFromDatabase } from "../database/database";
import Home from "@/components/Home";

const MyServerComponent = async () => {
  const data: any = await getDataFromDatabase();

  return (
    <div>
      <LoginForm />
      <Home data={data} />
    </div>
  );
};

export default MyServerComponent;
