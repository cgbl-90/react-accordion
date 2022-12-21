import { useState } from "react";

function SingleQuestion(props) {
  const [extend, setExtend] = useState(false);

  function showHide() {
    setExtend(!extend);
  }

  return (
    <span>
      <button onClick={showHide}>{extend ? `🢃` : `🢁`}</button>
      <h4>{props.props.title}</h4>
          {extend ? <p>{props.props.info}</p> : ''}
    </span>
  );
}

export default SingleQuestion;
