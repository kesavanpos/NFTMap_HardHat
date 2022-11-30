
import Maps from "../../components/Maps/Map"

const MapHome = () => {

    const countryClicked = (e) => {        
        if(e.countryCode == 'US'){
            window.location.href="#/admin/dashboard/NFTMap";
        }
    }

    return(
        <Maps countryClick={countryClicked}/>
    )
}

export default MapHome;