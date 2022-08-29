import { IUser } from "../../interfaces/IUser";
import LanguagesChart from "../LanguagesChart/LanguagesChart";
import PopularReposChart from "../PopularReposChart/PopularReposChart";

interface ISidebarProps {
  user: IUser;
}

const Sidebar = ({ user }: ISidebarProps) => {
  return (
    <>
      <div className="border-top color-border-muted pt-3 mt-3">
        <h6 className="mb-2 h4">Languages</h6>
        <LanguagesChart reps={user.reps} />
      </div>
      <div className="border-top color-border-muted pt-3 mt-3">
        <h6 className="mb-2 h4">Popular Repos</h6>
        <PopularReposChart reps={user.reps} />
      </div>
    </>
  );
};

export default Sidebar;
