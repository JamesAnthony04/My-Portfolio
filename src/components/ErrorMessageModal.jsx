import React from 'react'

const MessageModal = ({onClose}) => {
  return (
    <div className="">
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
            <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-xl font-bold text-center text-red-800">Message Failed!</h2>
            <p className="text-center text-sm text-gray-700">We were unable to send your message. Please try again. If the problem persists, feel free to contact me through other methods such as email or phone. Thank you!</p>
            <button className="bg-blue-700 text-white text-sm px-4 py-2 mt-4 rounded-md" onClick={onClose}>Close</button>
            </div>
        </div>
    </div>
  )
}

export default MessageModal