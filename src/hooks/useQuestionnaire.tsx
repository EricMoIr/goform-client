import { useEffect } from "react";
import useApiRequest from "./useApiRequest";
import { Questionnaire } from "../models";

function useQuestionnaire(questionnaireId: string) {
  const { fetchData, ...rest } = useApiRequest<Questionnaire>({
    url: `/questionnaires/${questionnaireId}`,
  });
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { fetchData, ...rest };
}

export default useQuestionnaire;
