import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from './FIrebaseconfig';
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const provider = new GoogleAuthProvider();
    // const auth = getAuth();
    let routes=useNavigate()
    let loginwork = () => {
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
               Cookies.set('blinkit-token', token, { expires: 7 })
               routes("/")


            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    return (
        <div>
            <section className="bg-[#E9FBE5] min-h-screen flex items-center justify-center">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto w-full sm:max-w-md">
                    {/* Google Login Image */}
                    <h2 className="text-2xl font-bold text-[52px] mb-4">
                        <span className="text-[#4285F4]">S</span>
                        <span className="text-[#DB4437]">i</span>
                        <span className="text-[#F4B400]">g</span>
                        <span className="text-[#4285F4]">n</span>
                        <span> </span>
                        <span className="text-[#0F9D58]">i</span>
                        <span className="text-[#DB4437]">n</span>
                        <span> </span>
                        <span className="text-[#F4B400]">w</span>
                        <span className="text-[#0F9D58]">i</span>
                        <span className="text-[#DB4437]">t</span>
                        <span className="text-[#4285F4]">h</span>
                        <span> </span>
                        <span className="text-[#4593E6]">G</span>
                        <span className="text-[#E5493C]">o</span>
                        <span className="text-[#F3BD17]">o</span>
                        <span className="text-[#4B88F4]">g</span>
                        <span className="text-[#44AB5F]">l</span>
                        <span className="text-[#F24941]">e</span>
                    </h2>

                    {/* Login Card */}
                    <div className="w-full bg-[#54B226] text-white rounded-lg shadow-xl p-8 space-y-6">
                        <h1 className="text-2xl font-bold text-center">
                            Sign in to your account
                        </h1>

                        <form className="space-y-4" action="#">
                           

                            <button onClick={loginwork}
                                type="submit"
                                className="w-full bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Sign in With Google
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
