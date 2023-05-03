import React from 'react';
import { useNavigation } from 'react-router-dom';
import {FaSpinner} from 'react-icons/fa'

const Navigation = () => {
    const navigation = useNavigation()
    return (
        <div>
            {
                navigation.state ==='loading' ? <div className="animate-spin flex items-center justify-center">
                        <FaSpinner className="text-2xl"/>
                </div> :  " "
            }
        </div>
    );
};

export default Navigation;