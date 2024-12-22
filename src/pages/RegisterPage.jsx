import { useState } from "react"

const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      Password,
      userName,
      // ConfirmPassword,
    })
    alert("success")
    console.log(userData)
  }
  const HandleChangeUserName = (e) => {
    setUserName(e.target.value)
  }
  const HandleChangePassword = (e) => {
    setPassword(e.target.value)
  }
  // const HandleChangeConfirmPassword = (e) => {
  //   if (Password === confirmPassword){
  //     setConfirmPassword(e.target.value)
  //   }else{
  //     alert("User Failed")
  //   }
  // }
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center">
      <p className="text-2xl font-bold mt-10 relative top-14 mb-20">Register Now</p>
        <div className="p-10 m-10 bg-slate-800 rounded-2xl drop-shadow-xl w-1/3 flex flex-col">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center gap-3">
              <input type="text" onChange={HandleChangeUserName} placeholder="Enter your UserName" className="px-10 py-2 border border-black rounded-lg " />
              <input type="password" onChange={HandleChangePassword} placeholder="Enter your Password" className="px-10 py-2 border border-black rounded-lg " />
              <input type="password" onChange={HandleChangePassword} placeholder="Confirm your Password" className="px-10 py-2 border border-black rounded-lg " />
            </div>
            <div>
              <button type="submit" className="border border-black px-10 py-1 rounded-md bg-yellow-400 text-yellow-900 font-semibold justify-center mt-5">Register</button>
            </div>
          </form>
        </div>
        {/* <div>
          {JSON.stringify(userData)}
        </div> */}
      </div>
    </>
  )
}
export default RegisterPage