import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} emenulab.All rights reserved.</p>
                </div>
            </footer>
        </div>

    )
}

export default Footer
