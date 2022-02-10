import axios from "axios";

const url = 'http://localhost:3003/dev';

export const createPersonTest = () => {
    const dummyPerson = {
        firstName: 'dummyFirstName',
        lastName: 'dummyLastName',
        address: 'Amstelveen',
        phoneNumber: '1231231'
    }
    test("should create a person", async () => {
        const res = await axios.post(`${url}/person`,dummyPerson);

        const {firstName,lastName,address,phoneNumber} = res.data;

        expect(firstName).toEqual('dummyFirstName');
        expect(lastName).toEqual('dummyLastName');
        expect(address).toEqual('Amstelveen');
        expect(phoneNumber).toEqual('1231231');

        expect(res.status).toEqual(201)
      })

}