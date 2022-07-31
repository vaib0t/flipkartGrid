/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/RetailerProfilePage.css';

/* Component import */
import Card from "./Card"
/* Asset imports */
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

function RetailerHomePage(){

    return(
        <div className='RetailerProfilePage'>
            <div className = 'bannerImageContainer'>
                <img
                    className='bannerImg'
                    src="https://lh3.googleusercontent.com/E_XVuM8mX1RuqBym2JEX4RBg_sj9KbTFBAi0qU4eBr2E3VCC0bwpWrgHqBOaWsKGTf4-DBseuZJGvsCVBnzLjxqgq7rAb_93zkZ-=h600"
                    alt='profile image'
                />
            </div>
            <div className='userContainer'>
                <div className='midRow'>
                    <img
                        className='userInfo'
                        src='https://lh3.googleusercontent.com/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI=s168'
                        alt='Profile Pic'
                    />
                </div>
                <div className='endRow'>
                    <div className="socialIconsContainer">
                        <div className="socialIconsWrapper">
                        <div className="socialIconsContent">
                            <div className="socialIcon">
                            <WebAssetIcon/>
                            </div>
                            <div className="divider"/>
                            <div className="socialIcon">
                            <InstagramIcon/>
                            </div>
                            <div className="divider" />
                            <div className="socialIcon">
                            <TwitterIcon />
                            </div>
                            <div className="divider" />
                            <div className="socialIcon">
                            <WorkspacesIcon/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='midRow'>
                    <div className='title'> Bulla ki dhukhan
                    </div>
                </div>
                <div className='midRow'>
                    <div className='createrBy'>
                    Created By Bulla
                        <span className='text'></span>
                    </div>
                </div>
                <div className='midRow'>
                    <div className='statsContainer'>
                        <div className='collectionStat'>
                            <div className='statValue'>19</div>
                            <div className='statName'>items</div>
                        </div>
                        <div className='collectionStat'>
                            <div className='statValue'>bulla</div>
                            <div className='statName'>owners</div>
                        </div>
                        <div className='collectionStat'>
                            <div className='statValue'>
                            <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/471px-Ethereum_logo_2014.svg.png"
                            alt="eth"
                            className="ethLogo"
                            />34k
                            </div>
                            <div className='statName'> floor price</div>
                        </div>
                        <div className='collectionStat'>
                            <div className='statValue'>
                            <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/471px-Ethereum_logo_2014.svg.png"
                            alt="eth"
                            className="ethLogo"
                            /> .5K
                            </div>
                            <div className='statName'>Volume Traded</div>
                        </div>
                    </div>
                </div>
                <div className='midRow'>
                    <div className='description'>bulla ki dhulkan mei welcome </div>
                </div>
            </div>
            <div className='Cards'>
            <Card
                    title = 'University Blue'
                    price = '50'
                    link = ''
                    description = 'good shoes'
                    image = 'https://cdn.discordapp.com/attachments/751494279586775124/1003268377894207578/nike2.png'
                />
                <Card
                    title = 'A|X Sport Grid'
                    price = '170'
                    link = ''
                    description = 'good watch'
                    image = 'https://cdn.discordapp.com/attachments/751494279586775124/1003265661188976741/png2-1.png'
                />
                <Card
                    title = 'Led Zipplin'
                    price = '100'
                    link = ''
                    image = 'https://cdn.discordapp.com/attachments/751494279586775124/1003267588547158027/swesgir.png'
                    description = 'led Zepllin hoodie'
                />
            </div>
        </div>
    );
}

export default RetailerHomePage;