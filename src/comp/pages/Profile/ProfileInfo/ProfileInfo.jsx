import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cdn1.fullpicture.ru/wp-content/uploads/2015/06/Takim-nash-mir-vidyat-kompyutery-1.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava+discr
            </div>
        </div>
        

    )
}

export default ProfileInfo;