import React, {useState } from 'react';


const LoginForm = (props) => {
    const formData = { //Пустые инпуты
        name: "",
        pass: "",
        colorName: "",
        colorPass: ""
    }
    const [name, setName] = useState(formData.name) 
    const [pass, setPass] = useState(formData.pass)
    const [colorName, setColorName] = useState(formData.colorName)
    const [colorPass, setColorPass] = useState(formData.colorPass)
    
    const handleNameInput = (e) => { //Заполняет state в имени 
        setName(e.target.value);
        formData.name = e.target.value;
        if (formData.name.length < 4) { //Более 3 символов
            setColorName("1px solid red");
        } else {
            setColorName("none");
        }
    }

    const handlePassInput = (e) => { //Заполняет state в пароле
        
        setPass(e.target.value);
        formData.pass = e.target.value;
        if (formData.pass.length < 1) { //Не пустое поле
            setColorPass("1px solid red");
        } else {
            setColorPass("none");
        }
    }

    return (
        <div className="userFormWraper">
            <form className="userForm">
                <div className="inputWraper">
                    <input type="text" name="firstname" placeholder="Name" value={name} onChange={handleNameInput} style={{border:colorName}}></input>
                </div>
                <div className="inputWraper">
                    <input type="password" name="password" placeholder="Enter password" value={pass} onChange={handlePassInput} style={{border:colorPass}}></input>
                </div>
           </form>
        </div>
    );
}

export default LoginForm;