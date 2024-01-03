import React from 'react'

const NavbarComponent = () => {
    return (  
        <div className='flex flex-row items-center justify-around h-20 bg-red-50 flex-wrap'>
            <div>
                <h1>B Docs</h1>
            </div>
            <div className='flex flex-row items-center justify-around gap-10 flex-wrap'>
                <h6>Home</h6>
                <h6>Shop</h6>
                <h6>About</h6>
                <div>
                    <h6>become a seller</h6>
                </div>
            </div>
            <div className='flex flex-row items-center justify-between gap-10 flex-wrap'>
                <div>
                    <h6>YU</h6>
                    <h6>$0.00</h6>
                </div>
                <div>
                <h6>YU</h6>
                    <h6>Login</h6>
                </div>
            </div>
        </div>
    );
}
 
export default NavbarComponent;