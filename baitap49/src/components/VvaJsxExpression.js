import React from 'react'

export default function VvaJsxExpression() {
    // Biến
    const name="FitNTU - K22"
    // Biến đối tượng
    const user = {
        firstName: "Vũ Việt",
        lastName: "Anh"
    }
    // Hàm (trả về JSX, không phải string)
    const formatName = (param) => {
        return <h2>Welcome to, {param.firstName} {param.lastName}</h2>;
    }

    // element
    const element = <h2 className='text-center'> Welcome to, {user.firstName} {user.lastName}</h2>
    // func-element
    const formatFullName = (param) => {
        return <h2>Welcome to, {param.firstName} {param.lastName}</h2>
    }

    return (
        <div>
            <h2>Biểu thức Jsx</h2>
            <hr/>
            {/* Sử dụng biến  */}
            <p>Giá trị biến name: {name}</p>
            <div>
                Họ và tên: {user.firstName} {user.lastName}
            </div>

            {/* Gọi hàm */}
            {formatName(user)}

            {/* Gọi element */}
            {element}

            {/* Gọi hàm-element */}
            {formatFullName(user)}

        </div>
    )
}
