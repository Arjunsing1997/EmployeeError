window.addEventListener('DOMContentLoaded', (even) => 
{
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input' , function()
    {
        if(name.value.length == 0)
        {
            textError.textContent = "";
            return;
        }
        try
        {  
            (new EmployeePayRollData()).name = name.value;
            textError.textContent = "";
        }
        catch(e)
        {
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function()
    {
        output.textContent = salary.value;
    });

});

const save1 = () =>
{
    try
    {
        let EmployeePayRollData1 = createEmployeePyroll();
        console.log("Demo");
    }
    catch(e)
    {
        console.log(e);
        return;
    }
}

const createEmployeePyroll = () => 
{
    let employeePayRollData = new EmployeePayRollData();
    try
    {
        employeePayRollData.name = getInputValueById('#name');
    }
    catch(e)
    {
       
        throw e;
    }

    employeePayRollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayRollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayRollData.department = getSelectedValues('[name=department]');
    employeePayRollData.salary = getSelectedValues('#salary');
    employeePayRollData.note = getSelectedValues('#notes');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+
                getInputValueById('#year');
                employeePayRollData.date = Date.parse(date);
    alert(employeePayRollData.toString());
    return employeePayRollData;
}


const getSelectedValues = (propertyValue) =>
{
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach(item => 
        {
            if(item.checked) setItems.push(item.value);
        });
        return setItems;
}

const getInputValueById = (id) =>
{
    let value = document.querySelector(id).value;
    return value;
}

const temp = () =>
{
    console.log("Demo");
    event.stopPropagation();
    event.preventDefault();
}
class EmployeePayRollData 
{
    get id() { return this._id; }
    set id(id)
    {
        this._id = id;
    }

    get name() 
    {
        return this._name; 
    }
    set name(name)
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if(nameRegex.test(name))
            this._name = name;
        else
            throw "Input is Incorrect!!!";
    }

    get profilePic() { return this._profilePic;}
    set profilePic(profilePic)
    {
        this._profilePic = profilePic;
    }

    get gender() { return this._gender;}
    set gender(gender)
    {
        this._gender = gender;
    }

    get department() { return this._department;}
    set department(department)
    {
        this._department = department;
    }   
    
    get salary() { return this._salary;}
    set salary(salary)
    {
        this._salary = salary;
    } 

    get note() { return this._note;}
    set note(note)
    {
        this._note = note;
    } 

    get startDate() { return this._startDate;}
    set startDate(startDate)
    {
        this._startDate = startDate;
    } 

    //method
    toString()
    {
        const options = { year: 'numeric', month: 'long', day:'numeric'};
        const empDate = !this.startDate ? "undefined":
                            this.startDate.toLoclDateString("en-US", options);
        return "id=" +this.id + ", Name="+this.name +", Gender="+this.gender+
                ", profilePic="+this.profilePic+", Department="+this.department+
                ", salary="+this.salary+", startDate="+empDate+", note="+this.note;
    }

}