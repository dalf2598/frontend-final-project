import { renderHook } from "@testing-library/react";
import useFetchQuestions from "./useFetchQuestions";
import { BackupQuestionBank } from "../backups/QuestionBank";
import axios from "axios";
import * as utils from "../utils/Utils";

jest.mock("../utils/Urls", () => ({
  get API_URL() {
    return "localhost:3000/api/questions";
  },
}));
jest.mock("../utils/Utils");
jest.mock("axios");

describe("useFetchQuestions", () => {
  test("should return appropiate question bank", async () => {
    const { result } = renderHook(() => useFetchQuestions());
    const response = await result.current.fetchQuestionBank();

    expect(response).toEqual(BackupQuestionBank);
  });

  test("should return appropiate question bank 2", async () => {
    const mockResponse = {
      data: [
        {
          id: 1,
          name: "Joe Doe",
        },
        {
          id: 2,
          name: "Jane Doe",
        },
      ],
    };

    const mockedAxios = jest.mocked(axios);

    mockedAxios.get.mockResolvedValue(mockResponse);

    const mockedUtils = jest.mocked(utils);

    mockedUtils.isOfQuestionBankType.mockReturnValue(true);

    const { result } = renderHook(() => useFetchQuestions());

    const response = await result.current.fetchQuestionBank();

    expect(response).toEqual(mockResponse.data);
  });
});
