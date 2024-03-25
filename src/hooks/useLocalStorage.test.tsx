import { renderHook } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    Storage.prototype.setItem = jest.fn();
    Storage.prototype.getItem = jest.fn();
  });

  it("should write to localStorage correctly", () => {
    const { result } = renderHook(() => useLocalStorage());
    const key = "testKey";
    const value = { test: "data" };

    result.current.writeLocalStorage(key, value);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(value)
    );
  });

  it("should read from localStorage correctly", () => {
    const { result } = renderHook(() => useLocalStorage());
    const key = "testKey";
    result.current.readLocalStorage(key);
    expect(localStorage.getItem).toHaveBeenCalledWith(key);
  });

  it("should returns null when reading from non-existent key", () => {
    const { result } = renderHook(() => useLocalStorage());
    const key = "nonExistentKey";

    expect(result.current.readLocalStorage(key)).toBeNull();
  });
});
