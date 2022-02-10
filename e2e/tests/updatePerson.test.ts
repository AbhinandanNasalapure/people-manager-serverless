import axios from "axios";

const url = "http://localhost:3003/dev";

export const updatePersonData = () => {
  const dummyPerson = {
    firstName: "dummyFirstName",
    lastName: "dummyLastName",
    address: "Amstelveen",
    phoneNumber: "1231231",
  };

  const updatedPerson = {
    firstName: "updatedFirstName",
    lastName: "updatedLastName",
    address: "NewCity",
    phoneNumber: "523424",
  };
  test("should update  a person", async () => {
    const createRes = await axios.post(`${url}/person`, dummyPerson);
    const personId = createRes.data.personId;

    const updateRes = await axios.put(
      `${url}/person/${personId}`,
      updatedPerson
    );

    const { firstName, lastName, address, phoneNumber } = updateRes.data;

    expect(firstName).not.toEqual("dummyFirstName");
    expect(lastName).not.toEqual("dummyLastName");
    expect(address).not.toEqual("Amstelveen");
    expect(phoneNumber).not.toEqual("1231231");

    expect(firstName).toEqual("updatedFirstName");
    expect(lastName).toEqual("updatedLastName");
    expect(address).toEqual("NewCity");
    expect(phoneNumber).toEqual("523424");

    expect(updateRes.status).toEqual(200);
  });
};
