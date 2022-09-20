import { tutorial_list } from "../../api_route"

export const fetchTutorial = async () => {
  const tutorialList = await fetch(tutorial_list);
  const list = await tutorialList.json();
  console.log("tutorialList => ", list);
  return list;
}