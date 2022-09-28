import { IUser } from "@interfaces/IUser";
import LanguagesChart from "@components/LanguagesChart/LanguagesChart";
import PopularReposChart from "@components/PopularReposChart/PopularReposChart";
import * as S from "./Sidebar.styles";

interface ISidebarProps {
  user: IUser;
}

const Sidebar = ({ user }: ISidebarProps) => {
  return (
    <>
      <S.Section>
        <S.Title>Languages</S.Title>
        <LanguagesChart reps={user.reps} />
      </S.Section>
      <S.Section>
        <S.Title>Popular Repos</S.Title>
        <PopularReposChart reps={user.reps} />
      </S.Section>
    </>
  );
};

export default Sidebar;
