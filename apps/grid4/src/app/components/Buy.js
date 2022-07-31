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
                    title = 'Jodan Air'
                    price = ''
                    link='https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/31436610100204812759533452885115316393349373173934749066719693061502565089281'
                    image = ''
                    description = ''
                />
                <Card
                    title = 'Sweat Shirt'
                    price = ''
                    link = ''
                    image = 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/0232c4d5-b247-4344-8722-444bede49662/air-force-1-mid-washed-teal-dv2219-300-release-date.jpg'
                    description = ''
                />
                <Card
                    title = 'Jodan Air'
                    price = ''
                    link = ''
                    image = 'https://cdn.discordapp.com/attachments/751494279586775124/1003280700927119410/unknown-removebg.png'
                    description = ''
                />
                <Card
                    title = 'Jodan Air'
                    price = ''
                    link = 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/41871733261735789102193252375453236551612110656111737869680659150939734681360'
                    image = 'https://cdn.discordapp.com/attachments/751494279586775124/1003268377894207578/nike2.png'
                    description = ''
                />
            </div>
        </div>
    );
}

export default Buy;