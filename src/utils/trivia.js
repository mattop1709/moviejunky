class Trivia {
  constructor(answers) {
    this.answers = answers;
  }

  get shuffledAnswers() {
    return [...this.answers].sort(() => Math.random() - 0.5);
  }
}

export default Trivia;
