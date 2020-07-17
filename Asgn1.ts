interface IConnection {
    open(url: string, login: string, password?: string): void;
    close(): void;
}

class OracleConnection implements IConnection {
    open(url: string, login: string): void {
        console.log(`OracleConnection Open ${url} ${login} `);
    }

    close() {
        console.log('Oracle Connection Close');
    }
}

class SQLConnection implements IConnection {
    open(url: string, login: string, password: string): void {
        console.log(`SQL Connection Open ${url} ${login} ${password} `);
    }

    close() {
        console.log('SQL Connection Close');
    }
}

 class Employee {
    id: number;
    name: string;
    salary: number;
    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}

 class EmployeeDao {
   private allEmployees=new Array<Employee>(); 
    

    constructor(private connection:IConnection){
        
    }
    
    insertEmplopyee(emp: Employee): void {
        this.connection.open("myurl","mylogin","mypass")
        this.allEmployees.push(emp);
        console.log("in InsertEmployee")
        this.connection.close()
    
    }

    listAllEmplopyees() : void {
        for (let i = 0; i < this.allEmployees.length; i++)
        
        console.log(`Employee Id :${this.allEmployees[i].id} Name : ${this.allEmployees[i].name} salary : ${this.allEmployees[i].salary}`);
    }
}
//let con = new OracleConnection();
let employeeDao: EmployeeDao = new EmployeeDao(new SQLConnection());
employeeDao.insertEmplopyee(new Employee(789, 'test', 123));
employeeDao.insertEmplopyee(new Employee(787, 'test1', 456));

employeeDao.listAllEmplopyees();
