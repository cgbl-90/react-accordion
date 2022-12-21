import data from "./questions.js";
import SingleQuestion from "./SingleQuestion";
import { useState } from "react";

function Faqs() {
  const [questions] = useState(data);

  return (
    <section>
      <h1>most frequent Q's</h1>
      <div>
        {questions.map((question) => (
          <SingleQuestion props={question} />
        ))}
      </div>
    </section>
  );
}

export default Faqs;
