import React from 'react'

const Hamburger = ({ isOpen }) => {
  return ( <>
    <div className='hamburger'>
        <div className='burger burger1' />
        <div className='burger burger2' />
        <div className='burger burger3' />
    </div>
    <style jsx>{`
                .hamburger{
                    width: 1.5rem;
                    height: 1.5rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                }
                .burger{
                    width: 1.5rem;
                    height: 0.15rem;
                    border-radius: .7rem;
                    background-color: #fff;
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                }
                .burger1{
                    transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                }
                .burger2{
                    transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
                    opacity: ${ isOpen ? 0 : 1};
                }
                .burger3{
                    transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                }
                
            `}</style>
    </>
  )
}

export default Hamburger