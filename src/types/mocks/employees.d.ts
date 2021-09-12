interface Employee {
  id: string;
  profilePhoto?: string;
  name: string;
  birthdate: string;
  address: string;
  status: string;
  position: string;
  createdDate: string;
  updatedDate?: string;
}

type Employees = Employee[];
