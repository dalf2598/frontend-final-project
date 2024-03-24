const useLocalStorage = () => {
  const writeLocalStorage = (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const readLocalStorage = (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  return { writeLocalStorage, readLocalStorage };
};

export default useLocalStorage;
