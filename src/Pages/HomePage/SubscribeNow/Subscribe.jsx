import { useState } from 'react';
import Swal from 'sweetalert2';
import subscribe from '../../../assets/subscribe.avif'

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
     const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Subscribed successfully"
          });
    setEmail('');
  };

  return (
   <div className=' flex flex-col md:flex-row justify-center items-center gap-5 px-[5%] py-[2%]'>
     <div className="p-6 text-center bg-white rounded-lg shadow-md font-myfont  ">
      <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-gray-600 mb-6">
        Get the latest updates and exclusive offers straight to your inbox.
      </p>
      <form onSubmit={handleSubscribe} className="flex flex-col space-y-4 rounded-xl">
        <input
          type="email"
          className="p-3 border rounded-md w-full"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Subscribe
        </button>
      </form>
    
    </div>
    <div className='  justify-center hidden md:flex'>
        <img className='h-[400px] rounded-lg shadow-lg shadow-purple-300' src={subscribe} alt="" />
    </div>
   </div>
  );
};

export default Subscribe;
