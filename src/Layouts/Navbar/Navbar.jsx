import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top:'0',
    left: '0',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height : 100,
    bgcolor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0,
  };
const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let openall =()=>{
        handleOpen()
    }
  return (
    <nav id='navbar'>
        <div className='container'>
            <ul className='item'>
                <li>
                    <button className='alllinksitebar'  onClick={openall}>all</button>
                </li>
                <li>
                    <NavLink to='/'>home</NavLink>
                </li>
                <li>
                    <NavLink to='todaydeals'>today deals</NavLink>
                </li>
                <li>
                    <NavLink to='registry'>registry</NavLink>
                </li>
                <li>
                    <NavLink to='customerservice'>customer service</NavLink>
                </li>
                <li>
                    <NavLink to='giftcard'>gift cards</NavLink>
                </li>
                <li>
                    <NavLink to='sell'>sell</NavLink>
                </li>
            </ul>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>achi</h1>
        </Box>
      </Modal>
    </nav>
  )
}

export default Navbar