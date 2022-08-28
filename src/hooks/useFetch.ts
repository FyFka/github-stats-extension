import { baseApi } from "../constants";
import { IRepository } from "../interfaces/IRepository";

const useFetch = () => {
  const getRepos = async (nickname: string): Promise<IRepository[]> => {
    const req = await fetch(`${baseApi}/users/${nickname}/repos?sort=pushed`);
    const repos = await req.json();
    return repos;
  };

  return { getRepos };
};

export default useFetch;
