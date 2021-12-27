export abstract class Question {
  abstract id: string;
  abstract title: string;
  abstract kind: kind;
  abstract isRequired: boolean;
  abstract condition?: Condition;
}

export type Condition = {
  questionId: string;
  operator: "=";
  value: string;
};

type kind = "multipleChoiceKind" | "textKind";

export class MultipleChoiceQuestion implements Question {
  public kind: kind = "multipleChoiceKind";
  constructor(
    public id: string,
    public title: string,
    public choices: string[],
    public hasOther: boolean,
    public isRequired: boolean,
    public condition: Condition
  ) {}
}

export class TextQuestion implements Question {
  public kind: kind = "textKind";
  constructor(
    public id: string,
    public title: string,
    public isRequired: boolean,
    public condition: Condition
  ) {}
}

export class Questionnaire {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public questions: Question[]
  ) {}
}
