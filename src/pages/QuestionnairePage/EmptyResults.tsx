import { Result } from "antd";

function EmptyResults() {
  return (
    <div className="page">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, we couldn't find the questionnaire you were looking for."
      />
    </div>
  );
}

export default EmptyResults;
