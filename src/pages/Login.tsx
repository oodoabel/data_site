import { Button } from '../components/ui/button'
const Login = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-blue-500 to-cyan-500 flex justify-center items-center w-screen h-screen'>
        <div className='bg-blue-200 h-[20rem] w-2/3 rounded-md mb-[5rem] sm:mb-0 sm:w-[30rem] sm:h-[30rem] flex justify-center flex-col items-center'>
          <p className='text-blue-600 font-extrabold text-2xl underline' >Login</p>
          <div className='flex justify-center items-center flex-col mt-[5px] mx-10'>
            <input type='email' placeholder='Email' className='w-[10rem] rounded-md outline-none border-blue-600 mt-3 px-2 h-7 sm:w-[15rem] placeholder:text-sm placeholder:font-thin'></input>
            <input type='password' placeholder='Password' className='w-[10rem] rounded-md mt-4 outline-none border-blue-600 px-2 h-7 sm:w-[15rem] placeholder:text-sm placeholder:font-thin'></input>
            <Button className='mt-4 bg-blue-600 w-full hover:bg-blue-500'>Login</Button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Login
