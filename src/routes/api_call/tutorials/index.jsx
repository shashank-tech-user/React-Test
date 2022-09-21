import { tutorial_list } from "../../api_route"

export const fetchTutorial = async () => {
  const tutorialList = await fetch(tutorial_list, {
    method: "GET",
    headers: {
      token: `Bearer ${process.env.REACT_APP_TOKEN}`
    }
  });
  const list = await tutorialList.json();
  return list;
}