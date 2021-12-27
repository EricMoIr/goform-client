import { useEffect, useState } from "react";
import { Form, Button, message } from "antd";
import { useParams } from "react-router-dom";

import { Question as QuestionType } from "../../models";
import useQuestionnaire from "../../hooks/useQuestionnaire";
import Question from "./Question";
import FormViewer from "../../components/FormViewer";

function QuestionnairePage() {
  const params = useParams();
  const { error, loading, data } = useQuestionnaire(params.id!);
  const [form] = Form.useForm();
  const [questionsToShow, setQuestionsToShow] = useState<QuestionType[]>([]);

  function updateQuestionsToShow() {
    setQuestionsToShow(
      data!.questions.filter((question) => {
        if (question.condition) {
          const values = form.getFieldsValue(true);
          const conditionValue = values[question.condition.questionId];
          if (question.condition.operator === "=") {
            if (conditionValue === question.condition.value) {
              return true;
            }
          }
          return false;
        } else {
          return true;
        }
      })
    );
  }

  useEffect(() => {
    if (data) {
      updateQuestionsToShow();
    }
  }, [data]);

  if (error) {
    return <div className="page">Couldn't render questionnaire</div>;
  }
  if (loading) {
    return <div className="page">Loading...</div>;
  }

  function handleFinish() {
    message.success("Questionnaire submitted");
  }

  function handleFormChange() {
    updateQuestionsToShow();
  }

  if (data) {
    return (
      <div className="page">
        <Form
          layout="vertical"
          form={form}
          onFinish={handleFinish}
          onValuesChange={handleFormChange}
          id="questionnaire-form"
        >
          <FormViewer isImportant>
            <h1>{data.title}</h1>
            <h2>{data.description}</h2>
            <div className="required">* Required</div>
          </FormViewer>
          {questionsToShow.map((question) => {
            return <Question key={question.id} question={question} />;
          })}
          <Button form="questionnaire-form" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
  return <div>No data was found :(</div>;
}

export default QuestionnairePage;
