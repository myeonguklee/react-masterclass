import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();
  console.log(nameOfMyUser);
  return <div>Here are {nameOfMyUser}의 followers</div>;
}
export default Followers;
