import React from 'react';
import FormationTable from '../../components/FormationTable';
import Sidebar from '../../components/SideBar';

const Formations = () => {
    return (
        <div className='flex'>
        <Sidebar/>
        <div><FormationTable /> </div>
        </div>
    );
}

export default Formations;
