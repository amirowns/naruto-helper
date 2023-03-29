import React from 'react';
import {Units} from './Units'

const Unit2 = ({ value }) => {
    

    
    const alla = (value) => { ////////////////for a rare would return ex. RareSasuke
        const selected_unit = Units[value] ///would return `[Rare]Sasuke = MagicSasuke + NormalKarin + NormalKabuto`
        const z = selected_unit.split(/\s\+\s|\s=\s/g) // would return ["[Rare]Sasuke", "MagicSasuke", "NormalKarin", "NormalKabuto"]
        return (
        <div>

        </div>
        )
    }

    return (
        <div>
            <ul>
                {alla(value)}
            </ul>
        </div>
    )
}

export default Unit2;