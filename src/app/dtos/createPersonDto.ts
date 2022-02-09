interface CreatePerson {
  body: {
    personName: string;
    address: string;
    dateOfBirth: string;
  };
}

export default CreatePerson;
