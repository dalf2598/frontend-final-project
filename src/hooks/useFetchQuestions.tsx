import axios from "axios";
import { QuestionBankType } from "../utils/Utils.types";
import { BackupQuestionBank } from "../backups/QuestionBank";

const useFetchQuestions = () => {
  const fetchQuestionBank = async () => {
    try {
      const response = await axios.get(
        `https://${import.meta.env.VITE_API_PREFIX}.api.quickmocker.com/questionbank`
      );
      return response.data as QuestionBankType;
    } catch (error) {
      console.log(error);
      return BackupQuestionBank;
    }
  };

  return { fetchQuestionBank };
};

export default useFetchQuestions;
