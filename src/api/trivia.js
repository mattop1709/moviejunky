import Config from "react-native-config";

const controller = new AbortController();
const signal = controller.signal;

export async function fetchTrivia(difficulty) {
  try {
    const url = `${Config.TRIVIA_BASE_URL}?amount=10&category=11&type=multiple&difficulty=${difficulty}`;
    const response = await (await fetch(url, { signal })).json();

    if (response) {
      // console.log(response.results);
      return response.results;
    }
  } catch (error) {}
}
