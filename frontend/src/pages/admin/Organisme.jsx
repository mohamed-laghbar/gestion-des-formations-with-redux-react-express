import React from 'react';
import OrgansimeTable from '../../components/OrganismeTable';
import Sidebar from '../../components/SideBar';

const Organismes = () => {
    return (
        <div className='flex'>
            <Sidebar/>
            <OrgansimeTable />
        </div>
    );
}

export default Organismes;
