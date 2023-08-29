import { Sticker } from "./Sticker"
export function StickerList({stickers, onGetLabel, labelHandler}) {
    return (
        <ul>
            {stickers.map(({img, label})  => { return <li><Sticker onGetLabel={labelHandler} img={img} label={label} /></li>})}
            
        </ul>   
    )
}