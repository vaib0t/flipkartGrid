/* Library import */
import {useState,useEffect} from 'react';
import  {Link} from 'react-router-dom'
/* Dependency import */
import './css/SearchResults.css';

/* Component import */
import ResultItemRounded from './ResultItemRounded';
import ResultItemSquare from './ResultItemSquare';
import SearchbarLoader from './SearchbarLoader';

/* Asset imports */

function SearchResults({
    showResults
}){

    const numofResults = 1;


    return(
        <div className='SearchResults'>
            {
                (!showResults)?(<SearchbarLoader/>):('')
            }

            <span className="resultHeading">Items</span>
            {
                [...Array(numofResults)].map(() => (
                    <>
                        <ResultItemSquare
                            imageSrc={"https://cdn.discordapp.com/attachments/751494279586775124/1003267140226383922/unknown.png"}
                            itemHeading={"Jordans"}
                            itemDescription={"University Blue"}
                        />
                    </>
                ))
            }

            <span className="resultHeading">Profiles</span>
            {
                [...Array(numofResults)].map(() => (
                    <>
                    <Link to = '/buy'>
                        <ResultItemRounded
                            imageSrc={"https://cdn.discordapp.com/attachments/751494279586775124/1003283616094240828/gg3.png"}
                            itemHeading={"Jordans"}
                            // itemDescription={"by Parv Gupta"}
                        /></Link>
                    </>
                ))
            }

            <div className="SearchAllButton-Container">
                <div className="SearchAllButton">
                    Show all results
                </div>
            </div>

        </div>
    );
}

export default SearchResults;