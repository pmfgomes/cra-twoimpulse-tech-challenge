import { address, name, internet, datatype } from "faker";
import { getRandomInt, randomIsoDate } from "utils/helpers";

const STATUS = ["Online", "Away", "Offline"];

const EMPLOYEE_DATA: Employees = [];

const BIRTHDATE_START_DATE = "1980-01-01";
const BIRTHDATE_END_DATE = "2000-12-31";
const CREATED_START_DATE = "2020-01-01";

for (let i = 0; i < 7; i++) {
  EMPLOYEE_DATA.push({
    id: `${datatype.number(100)}`,
    profilePhoto: internet.avatar(),
    address: `${address.cityName()}, ${address.country()}`,
    birthdate: randomIsoDate(new Date(BIRTHDATE_START_DATE), new Date(BIRTHDATE_END_DATE)),
    createdDate: randomIsoDate(new Date(CREATED_START_DATE), new Date()),
    name: `${name.firstName()} ${name.lastName()}`,
    position: name.jobTitle(),
    status: STATUS[getRandomInt(STATUS.length - 1)],
    updatedDate: "",
  });
}

export default EMPLOYEE_DATA;
