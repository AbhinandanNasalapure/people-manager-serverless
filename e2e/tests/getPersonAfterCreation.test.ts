import axios from "axios";

const url = "http://localhost:3003/dev";

export const getPersondataTest = () => {

  const person = {
    firstName: "Abhi",
    lastName: "Nasalapure",
    address: "Amstelveen",
    phoneNumber: "1231231",
  };

  test("should return result of created person", async () => {

    const createRes = await axios.post(`${url}/person`, person);
    const personId = createRes.data.personId;

    const res = await axios.get(`${url}/person/${personId}`);
    const {firstName, lastName, address, phoneNumber } = res.data;

    expect(firstName).toEqual("Abhi");
    expect(lastName).toEqual("Nasalapure");
    expect(address).toEqual("Amstelveen");
    expect(phoneNumber).toEqual("1231231");

    expect(res.status).toEqual(200);
  });
};
