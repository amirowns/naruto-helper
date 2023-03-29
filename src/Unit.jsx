import React from 'react';
import {Units} from './Units'

const Unit = ({ value }) => {
    

    
    const alla = (value) => { ////////////////for a rare would return ex. RareSasuke
        const selected_unit = Units[value] ///would return `[Rare]Sasuke = MagicSasuke + NormalKarin + NormalKabuto`
        const z = selected_unit.split(/\s\+\s|\s=\s/g) // would return ["[Rare]Sasuke", "MagicSasuke", "NormalKarin", "NormalKabuto"]
        return (
        <div>
            {/Normal/.test(z[0]) && <li style={{color: "white"}}>{z[0]}</li>}
            {/Magic/.test(z[0]) && <li style={{color: "cyan"}}>{z[0]}</li>}
            {/Special/.test(z[0]) && <li style={{color: "yellow"}}>{z[0]}</li>}
            {/Type|scroll|Chakra/.test(z[0]) && <li style={{color: "gray"}}>{z[0]}</li>}
            {/Rare/.test(z[0]) && <details open><summary style={{color: "purple"}}>{z[0]}</summary>
                {z.length > 1 && <ul>{alla(z[1])}</ul>}
                {z.length > 2 && <ul>{alla(z[2])}</ul>}
                {z.length > 3 && <ul>{alla(z[3])}</ul>}
                {z.length > 4 && <ul>{alla(z[4])}</ul>}
                {z.length > 5 && <ul>{alla(z[5])}</ul>}
                {z.length > 6 && <ul>{alla(z[6])}</ul>}
                {z.length > 7 && <ul>{alla(z[7])}</ul>}
            </details>}
            {/Unique/.test(z[0]) && <details open><summary style={{color: "yellow"}}>{z[0]}</summary>
                {z.length > 1 && <ul>{alla(z[1])}</ul>}
                {z.length > 2 && <ul>{alla(z[2])}</ul>}
                {z.length > 3 && <ul>{alla(z[3])}</ul>}
                {z.length > 4 && <ul>{alla(z[4])}</ul>}
                {z.length > 5 && <ul>{alla(z[5])}</ul>}
                {z.length > 6 && <ul>{alla(z[6])}</ul>}
                {z.length > 7 && <ul>{alla(z[7])}</ul>}
            </details>}
            {/Hidden/.test(z[0]) && <details open><summary style={{color: "green"}}>{z[0]}</summary>
                {z.length > 1 && <ul>{alla(z[1])}</ul>}
                {z.length > 2 && <ul>{alla(z[2])}</ul>}
                {z.length > 3 && <ul>{alla(z[3])}</ul>}
                {z.length > 4 && <ul>{alla(z[4])}</ul>}
                {z.length > 5 && <ul>{alla(z[5])}</ul>}
                {z.length > 6 && <ul>{alla(z[6])}</ul>}
                {z.length > 7 && <ul>{alla(z[7])}</ul>}
            </details>}
            {/Legendary/.test(z[0]) && <details open><summary style={{color: "orange"}}>{z[0]}</summary>
                {z.length > 1 && <ul>{alla(z[1])}</ul>}
                {z.length > 2 && <ul>{alla(z[2])}</ul>}
                {z.length > 3 && <ul>{alla(z[3])}</ul>}
                {z.length > 4 && <ul>{alla(z[4])}</ul>}
                {z.length > 5 && <ul>{alla(z[5])}</ul>}
                {z.length > 6 && <ul>{alla(z[6])}</ul>}
                {z.length > 7 && <ul>{alla(z[7])}</ul>}
            </details>}
            {/Elite/.test(z[0]) && <details open><summary style={{color: "pink"}}>{z[0]}</summary>
                {z.length > 1 && <ul>{alla(z[1])}</ul>}
                {z.length > 2 && <ul>{alla(z[2])}</ul>}
                {z.length > 3 && <ul>{alla(z[3])}</ul>}
                {z.length > 4 && <ul>{alla(z[4])}</ul>}
                {z.length > 5 && <ul>{alla(z[5])}</ul>}
                {z.length > 6 && <ul>{alla(z[6])}</ul>}
                {z.length > 7 && <ul>{alla(z[7])}</ul>}
            </details>}
            {/Epic/.test(z[0]) && <details open><summary style={{color: "red"}}>{z[0]}</summary>
                {z.length > 1 && <ul>{alla(z[1])}</ul>}
                {z.length > 2 && <ul>{alla(z[2])}</ul>}
                {z.length > 3 && <ul>{alla(z[3])}</ul>}
                {z.length > 4 && <ul>{alla(z[4])}</ul>}
                {z.length > 5 && <ul>{alla(z[5])}</ul>}
                {z.length > 6 && <ul>{alla(z[6])}</ul>}
                {z.length > 7 && <ul>{alla(z[7])}</ul>}
            </details>}
        </div>
        )
    }

    return (
        <div>
            <ol>
                {alla(value)}
            </ol>
        </div>
    )
}

export default Unit;