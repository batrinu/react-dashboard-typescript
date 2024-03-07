// src/mocks/mockAuth.ts
export const mockLogin = async (
  username: string,
  password: string
): Promise<{ token: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simple auth mockup, replace with actual validation logic
      if (username === "admin" && password === "password") {
        resolve({ token: "mocked-jwt-token" });
      } else {
        throw new Error("Invalid credentials");
      }
    }, 1000); // Simulating network delay
  });
};
