import axios from "axios";
import { QuestionBankType } from "../utils/Utils.types";
import { BackupQuestionBank } from "../backups/QuestionBank";
import { API_URL } from "../utils/Urls";

const useFetchQuestions = () => {
  const fetchQuestionBank = async () => {
    try {
      const response = await axios.get(API_URL);
      if (typeof response.data === "object") {
        return response.data as QuestionBankType;
      }
      return BackupQuestionBank;
    } catch (error) {
      console.log(error);
      return BackupQuestionBank;
    }
  };

  return { fetchQuestionBank };
};

export default useFetchQuestions;
