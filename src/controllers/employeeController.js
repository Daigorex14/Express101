exports.getEmployee = async (req, res)=>{
    res.send(`Get All Employees`);
};

exports.getEmployeeById = async(req, res)=>{
    res.send(`Get Employees by ID : ${req.body.id}`);
};

exports.getSalary = async(req, res)=>{
    const sal = req.params.salary;
    const tax = (sal * 10) /100;
    res.send(`Employee Salary: ${tax}`);
};

exports.getTax = async(req, res)=>{
    const age = req.params.age;
    const retire = 60 - age;
    res.send(`Employee Retire: ${retire}`);
};

exports.addEmployee = async(req, res)=>{
    res.send(`ID : ${req.body.id}
    Name : ${req.body.name}
    Age : ${req.body.age}
    salary : ${req.body.salary}`);
};