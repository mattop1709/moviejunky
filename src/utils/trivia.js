class Trivia {
  constructor(answers) {
    this.answers = answers;
  }

  /**
   * use this to provide random arrangement of correct answer
   * @return any
   */
  get shuffledAnswers() {
    return [...this.answers].sort(() => Math.random() - 0.5);
  }

  /**
   * use this utils to assist the result page
   * @param { number }    score   based on the correct answer from the trivia
   * @returns any
   */
  provideVerdict(score) {
    let result;
    if (score <= 3) {
      result = {
        title: "Oh Sorry",
        icon: require("../../assets/newb.png"),
        color: "#C83758",
      };
    } else if (score <= 7) {
      result = {
        title: "Not Bad",
        icon: require("../../assets/cat.png"),
        color: "#E9D816",
      };
    } else {
      result = {
        title: "Congratz",
        icon: require("../../assets/trophy.png"),
        color: "#3EC639",
      };
    }
    return result;
  }
  /**
   * use this to convert into symbol
   * @param { string }    string  prevent from showing unknown string
   * @returns string
   */
  handleSymbol(string) {
    if (!string) {
      return;
    }
    const char = {
      "&#039;": "'",
      "&quot;": '"',
      "&amp;": "&",
      "&grave;": "`",
      "&ldquo;": '"',
      "&rdquo;": '"',
    };
    return string.replace(
      /&#039;|&quot;|&amp;|&grave;|&ldquo;|&rdquo;/g,
      symbol => char[symbol],
    );
  }
}

export default Trivia;
