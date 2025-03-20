import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState({ newPassword: '', confirmPassword: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;
        const newPasswordError = newPassword.length < 6 ? 'Password must be at least 6 characters long.' : '';
        const confirmPasswordError = confirmPassword !== newPassword ? 'Passwords do not match.' : '';

        if (newPasswordError) {
            isValid = false;
            setError((prev) => ({ ...prev, newPassword: newPasswordError }));
        }

        if (confirmPasswordError) {
            isValid = false;
            setError((prev) => ({ ...prev, confirmPassword: confirmPasswordError }));
        }

        if (isValid) {
            console.log('Password updated successfully.');
            navigate('/login'); // Navigate back to the Login page
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form 
                onSubmit={handleSubmit} 
                className="bg-white p-6 rounded shadow-md w-80 h-auto"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
                        New Password
                    </label>
                    <input 
                        type="password" 
                        id="newPassword" 
                        value={newPassword} 
                        onChange={(e) => {
                            setNewPassword(e.target.value);
                            setError((prev) => ({ ...prev, newPassword: '' })); // Clear error on input change
                        }} 
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            error.newPassword ? 'border-red-500' : ''
                        }`}
                    />
                    {error.newPassword && <p className="text-red-500 text-xs mt-1">{error.newPassword}</p>}
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        value={confirmPassword} 
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            setError((prev) => ({ ...prev, confirmPassword: '' })); // Clear error on input change
                        }} 
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            error.confirmPassword ? 'border-red-500' : ''
                        }`}
                    />
                    {error.confirmPassword && <p className="text-red-500 text-xs mt-1">{error.confirmPassword}</p>}
                </div>

                <button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                    Update Password
                </button>
            </form>
        </div>
    );
};

export default ForgetPassword;

