import { BASE_API } from "@constants";
import { IRepository } from "@interfaces/IRepository";

const useFetch = () => {
  const getRepos = async (nickname: string): Promise<IRepository[]> => {
    const req = await fetch(`${BASE_API}/users/${nickname}/repos?sort=pushed&per_page=100`);
    const repos = await req.json();
    return repos;
  };

  return { getRepos };
};

export default useFetch;
