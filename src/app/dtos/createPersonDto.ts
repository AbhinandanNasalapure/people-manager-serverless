interface CreatePerson {
  body: {
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
  };
}

export default CreatePerson;
