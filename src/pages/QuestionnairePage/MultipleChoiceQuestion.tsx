import { useState } from "react";
import { Form, Radio, Space, Input, RadioChangeEvent } from "antd";

import { MultipleChoiceQuestion as MultipleChoiceQuestionModel } from "../../models";

function MultipleChoiceQuestion({
  question,
}: {
  question: MultipleChoiceQuestionModel;
}) {
  const [otherRequired, setOtherRequired] = useState(false);

  function handleChange(event: RadioChangeEvent) {
    if (event.target.value === "other") {
      setOtherRequired(true);
    } else {
      setOtherRequired(false);
    }
  }

  return (
    <Form.Item
      rules={[
        {
          required: question.isRequired,
          message: "Please select an answer",
        },
      ]}
      name={question.id}
    >
      <Radio.Group onChange={handleChange}>
        <Space direction="vertical">
          {question.choices.map((option, index) => (
            <Radio key={`choice_${question.id}_${index}`} value={option}>
              {option}
            </Radio>
          ))}
          {question.hasOther && (
            <Radio value="other" className="multiple-question-other-radio">
              Other:
              <Form.Item
                rules={[
                  {
                    required: otherRequired,
                    message: "Please enter an answer",
                  },
                ]}
                name={`${question.id}-other`}
                noStyle
              >
                <Input
                  placeholder="Your answer"
                  className="multiple-question-other-input"
                />
              </Form.Item>
            </Radio>
          )}
        </Space>
      </Radio.Group>
    </Form.Item>
  );
}

export default MultipleChoiceQuestion;
