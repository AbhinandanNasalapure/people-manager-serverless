import { createPersonTest } from "./tests/createPerson.test";
import { getPersondataTest } from "./tests/getPersonAfterCreation.test";
import { updatePersonData } from './tests/updatePerson.test';

describe('create a person', createPersonTest);

describe ('get person data', getPersondataTest);

describe ('update person data',updatePersonData);