function Employee(name, age, department, salary) {
  this.name = name;
  this.age = age;
  this.department = department;
  this.salary = salary;
}

let employees = [
  new Employee("Vamsi", 32, "IT", 32000),
  new Employee("sruthi", 22, "BPO", 18000),
  new Employee("Dinesh", 26, "Accountant", 8000),
  new Employee("Chiranjeevi", 23, "Data Science", 55000),
  new Employee("RajaRam", 24, "Marketing", 20000),
  new Employee("Navya", 21, "IT", 23000),
  new Employee("priyanka", 22, "Marketing", 29000),
];

function displayOutput(output) {
  document.getElementById("output").innerHTML = output;
}

function calculateAverageSalary() {
  let totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
  let averageSalary = totalSalary / employees.length;
  displayOutput(`Average Salary:${averageSalary.toFixed(2)}`);
}
function findEmployeesByDepartment(department) {
  let filteredEmployees = employees.filter(
    (emp) => emp.department === department
  );
  displayOutput(
    `Employees in ${department}: ${filteredEmployees
      .map((emp) => emp.name)
      .join(", ")}`
  );
}
function increaseSalary(percentage) {
  employees.forEach((emp) => {
    emp.salary += emp.salary * (percentage / 100);
  });
  displayOutput("Salaries increased successfully!");
}
function sortEmployeesByAge() {
  employees.sort((a, b) => a.age - b.age);
  displayOutput(
    `Employees Sorted by Age: ${employees.map((emp) => emp.name).join(", ")}`
  );
}
