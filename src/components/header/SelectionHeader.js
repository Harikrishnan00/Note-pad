import React from 'react'
import './style/selectionheader.css'
import CancelIcon from '../../assets/icons/cancel.svg'
import DeleteIcon from '../../assets/icons/delete.svg'
import PinIcon from '../../assets/icons/pin-icon.svg'
import FavourateIcon from '../../assets/icons/fav.svg'

function SelectionHeader() {
    return (
        <div className='selection-header-container'>
            <div className="selection-header-left-section">
                <div className="selection-header-cancel-button">
                    <img src={CancelIcon} alt="cancel" />
                </div>
                <p><span>10</span>Selected</p>
            </div>
            <div className="selection-header-right-section">
                <div className="selection-header-delete-button">
                    <img src={DeleteIcon} alt="delete" />
                </div>
                <div className="selection-header-pin-button">
                    <img src={PinIcon} alt="pin" />
                </div>
                <div className="selection-header-favourate-button">
                    <img src={FavourateIcon} alt="favourate" />
                </div>
            </div>
        </div>
    )
}

export default SelectionHeader