import React from 'react';

class Avatar extends React.Component{
    render() {
        return (
            <div className="b-avatar">
                <div className="b-avatar__img">
                    <img src={require('./avatar.png')}  alt={"Avatar"}  />
                </div>
                <div className="b-avatar__name">
                   <p>Kirsten Mckellar</p>
                </div>
                <div className="b-avatar__from">
                   <p>California</p>
                </div>
                <div className="b-avatar__nickname">
                    <p>Nickname:</p>
                    <p>Killa Kella</p>
                </div>
                <div className="b-avatar__tel">
                    <p>Tel:</p>
                    <p>072 143 9920</p>
                </div>
                <div className="b-avatar__birthday">
                    <p>Date Of Birth:</p>
                    <p>July 12, 1988</p>
                </div>
                <div className="b-avatar__gender">
                    <p>Gender:</p>
                    <p>Female</p>
                </div>
                <div className="b-avatar__language">
                    <p>Language:</p>
                    <p>English</p>
                </div>
            </div>
        )
    }
}

export default Avatar;