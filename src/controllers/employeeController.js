exports.getEmployee = async (req, res)=>{
    res.send(`Get All Employees`);
};

exports.getEmployeeById = async(req, res)=>{
    res.send(`Get Employees by ID : ${req.body.id}`);
};

exports.getSalary = async(req, res)=>{
    res.send(` : ${req.body.salary}`);
};

exports.addEmployee = async(req, res)=>{
    res.send(`ID : ${req.body.id}
    Name : ${req.body.name}
    Age : ${req.body.age}
    salary : ${req.body.salary}`);
};