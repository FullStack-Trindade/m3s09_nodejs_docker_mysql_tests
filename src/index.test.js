const request = require("supertest");
const { server } = require("./server");

const propeties = ["welcome", "name"];
const mockUser = {
  name: "Robert",
  email: "robertsantos@teste.com.br",
};

describe("App Test Suite", () => {
  it("Should be able get main route", async () => {
    const response = await request(server).get("/");
    const { body, statusCode } = response;

    expect(statusCode).toEqual(200);

    propeties.map((prop) => expect(body).toHaveProperty(prop));
  });

  it("Should be able create user", async () => {
    const response = await request(server).post("/users").send(mockUser);
    const { body, statusCode } = response;

    expect(statusCode).toEqual(200);
    expect(body).toMatchObject({
      ...mockUser,
      id: 1,
    });
  });

  it("Should be not able create user", async () => {
    const response = await request(server).post("/users");
    const { body, statusCode } = response;

    expect(statusCode).toEqual(400);
    expect(body).toHaveProperty(
      "message",
      "Dados do usuário devem ser preenchidos"
    );
  });
});
