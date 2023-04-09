import React from "react";
const Input = ({label, type, name, onChange}) => {
    return (
        <div>
            <label> {label}:</label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)}/>
            <br />
        </div>

    )
}

const ShowErrors = ({errors}) => {
    return (
        <ul style={{color: 'red', marginLeft: '-20px'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}

class Validation extends React.Component {
    state = {
        nama: '',
        email: '',
        username: '',
        password: '',
        errors: []
    }

    handleSubmit = event => {
        event.preventDefault();
        const {nama, email, username, password} = this.state;

        let message = [];

        if(nama.length === 0) {
            message = [...message, 'Nama tidak boleh kosong']
        }

        if(email.length === 0) {
            message = [...message, 'Email tidak boleh kosong']
        }

        if(username.length === 0) {
            message = [...message, 'Username tidak boleh kosong']
        }

        if(password.length === 0) {
            message = [...message, 'Password tidak boleh kosong']
        }

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(email).toLowerCase())) {
            message = [...message, 'Email tidak valid'];
        }

        if(password.length < 8) {
            message = [...message, 'Password terlalu pendek'];
        }

        if(message.length > 0) {
            this.setState({
                errors: message
            });
        }else {
            alert(`
            Username: ${this.state.username}
            Password: ${this.state.password}
            Selamat anda sudah Berhasil!...
            `);
            this.setState({
                errors: []
            }) 
        }
    }

    render() {
        const style = {
            width: '400px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '10px'
        }
        
        return (
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }
                <h1>REGISTER FORM</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input type="nama" name="nama" label="Nama" 
                        onChange={value => this.setState({nama: value})}/>
                    <Input type="alamat email" name="alamat email" label="Alamat Email" 
                        onChange={value => this.setState({email: value})}/>
                    <Input type="username" name="username" label="Username"
                        onChange={value => this.setState({username: value})}/>
                    <Input type="password" name="password" label="Password"
                        onChange={value => this.setState({password: value})}/>
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default Validation;