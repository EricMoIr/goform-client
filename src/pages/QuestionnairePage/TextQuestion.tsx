import React from "react";
import { Input, Form } from "antd";

import { TextQuestion as TextQuestionModel } from "../../models";

function TextQuestion({ question }: { question: TextQuestionModel }) {
  return (
    <Form.Item
      rules={[
        {
          required: question.isRequired,
          message: "Please enter an answer",
        },
      ]}
      name={question.id}
    >
      <Input placeholder="Your answer" />
    </Form.Item>
  );
}

export default TextQuestion;
