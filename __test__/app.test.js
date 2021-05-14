import request from "supertest";
import app from "../dist/app";

describe("tests for all eendpoints", () => {
  test("calculate Area of a square", async () => {
    let data = {
      shape: "square",
      dimension: 5,
    };
    let res = await request(app).post("/calculate").send(data);
    expect(res.status).toBe(201);
    expect(res.body).toEqual({
      shape: "square",
      dimension: 5,
      Area: 25,
    });
  });
  test("calculate Area of a circle", async () => {
    let data = {
      shape: "circle",
      dimension: 5,
    };
    let res = await request(app).post("/calculate").send(data);
    expect(res.status).toBe(201);
    expect(res.body).toEqual({
      shape: "circle",
      dimension: 5,
      Area: 78.54,
    });
  });

  test("calculate Area of a rectangle", async () => {
    let data = {
      shape: "rectangle",
      dimension: {
        a: 5,
        b: 7,
      },
    };
    let res = await request(app).post("/calculate").send(data);
    expect(res.status).toBe(201);
    expect(res.body).toEqual({
      shape: "rectangle",
      dimension: {
        a: 5,
        b: 7,
      },
      Area: 35,
    });
  });

  test("calculate Area of a triangle", async () => {
    let data = {
      shape: "triangle",
      dimension: {
        a: 5,
        b: 7,
        c: 8,
      },
    };
    let res = await request(app).post("/calculate").send(data);
    expect(res.status).toBe(201);
    expect(res.body).toEqual({
      shape: "triangle",
      dimension: {
        a: 5,
        b: 7,
        c: 8,
      },
      Area: 17.32,
    });
  });

  test("fetch all records", async () => {
    let res = await request(app).get("/fetchRecords");
    expect(res.status).toBe(200);
  });
});
