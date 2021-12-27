import { FormInstance } from "antd";

import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import TextQuestion from "./TextQuestion";
import FormViewer from "../../components/FormViewer";

import {
  MultipleChoiceQuestion as MultipleChoiceQuestionType,
  TextQuestion as TextQuestionType,
  Question as QuestionType,
} from "../../models";

function Question({ question }: { question: QuestionType }) {
  return (
    <FormViewer>
      <h2>
        {question.title}
        {question.isRequired && <span className="required"> *</span>}
      </h2>
      {question.kind === "multipleChoiceKind" ? (
        <MultipleChoiceQuestion
          question={question as MultipleChoiceQuestionType}
        />
      ) : (
        <TextQuestion question={question as TextQuestionType} />
      )}
    </FormViewer>
  );
}

export default Question;
