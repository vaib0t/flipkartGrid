/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/Buy.css';

/* Component import */
import Card from './Retailer/Card'
/* Asset imports */
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

function Buy(){

    return(
        <div className='Buy'>
            <div className='Cards'>
                <Card
                    title = 'Nike Air jordan'
                    price = '99'
                    link = '/productpage'
                    image = 'https://fadzrinmadu.github.io/hosted-assets/product-card-ui-design-using-html-and-css/img.png'
                    description = 'Nike Air Jordan Footwear basketball sneakers.'
                />
                <Card
                    title = 'Jordan Varsity Red'
                    price = '89'
                    link='https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/31436610100204812759533452885115316393349373173934749066719693061502565089281'
                    image = 'https://cdn.discordapp.com/attachments/751494279586775124/1003282063543255050/gg3-removebg-preview.png'
                    description = 'Red Shoes with Comfortable sole'
                />
                <Card
                    title = 'Coconut High'
                    price = '129'
                    link = ''
                    image = 'https://cdn.discordapp.com/attachments/751494279586775124/1003308560618360913/gg1-removebg-preview.png'
                    description = 'Cocunut High shoes by Nike'
                />
                <Card
                    title = 'Air Force 1'
                    price = '79'
                    link = ''
                    image = 'https://cdn.discordapp.com/attachments/751494279586775124/1003280700927119410/unknown-removebg.png'
                    description = 'Cool White Sneakers'
                />
                <Card
                    title = 'University Blue'
                    price = '149'
                    link = 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/41871733261735789102193252375453236551612110656111737869680659150939734681360'
                    image = 'https://cdn.discordapp.com/attachments/751494279586775124/1003268377894207578/nike2.png'
                    description = 'It makes use of a familiar palette that gives the nod to Michael Jordan UNC alma mater.'
                />
            </div>
        </div>
    );
}

export default Buy;