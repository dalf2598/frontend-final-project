export const API_URL = `https://${import.meta.env.VITE_API_PREFIX}.api.quickmocker.com/questionbank`;
/* DEV-NOTE 
In case you are wondering why this is here, the reason is that I encountered significant compatibility issues 
when using import.meta.env with JEST. I found myself unable to mock environment variables, 
consequently causing test cases to fail. I attempted multiple approaches to resolve this issue, 
but the only one that proved effective was extracting any usage of import.meta.env to an isolated file and 
mocking the variables exported from that file
*/