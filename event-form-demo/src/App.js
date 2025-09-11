import React, { useState, useRef, useEffect } from "react";

// Component con để minh họa Lifting State Up
function ChildInput({ value, onValueChange }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>Nhập dữ liệu từ component con: </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder="Gõ gì đó..."
      />
    </div>
  );
}

export default function App() {
  // Controlled component states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  // Lifting state up demo
  const [childValue, setChildValue] = useState("");

  // Uncontrolled component (useRef)
  const messageRef = useRef();

  // Debounce demo: log sau khi user dừng gõ 500ms
  useEffect(() => {
    if (childValue) {
      const timeout = setTimeout(() => {
        console.log("Debounced value:", childValue);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [childValue]);

  // Handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !gender) {
      setError("Vui lòng nhập đầy đủ thông tin!");
    } else {
      setError("");
      alert(
        `Đăng ký thành công!\nHọ tên: ${name}\nEmail: ${email}\nGiới tính: ${gender}\nTin nhắn: ${messageRef.current.value}`
      );
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Demo Event Handling & Forms trong React</h1>

      <form onSubmit={handleSubmit} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
        <h2>Form Đăng ký</h2>

        <div style={{ marginBottom: "10px" }}>
          <label>Họ tên: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập họ tên"
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập email"
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Giới tính: </label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">--Chọn--</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Tin nhắn (Uncontrolled): </label>
          <textarea ref={messageRef} placeholder="Nhập tin nhắn ở đây"></textarea>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Đăng ký</button>
      </form>

      <hr />

      <h2>Lifting State Up & Debounce Demo</h2>
      <ChildInput value={childValue} onValueChange={setChildValue} />
      <p>Giá trị ở component cha: <b>{childValue}</b></p>
    </div>
  );
}
