import OrgListItem from "./OrgListItem"


const OrgList: React.FC = () => {
    return (
        <>
            <h3>Organization List:</h3>
            <h4>Individual Org Items go here:</h4> 
            {/* TODO: do some sort of mapping here over the list of organizations in our DB */}
            <OrgListItem />
        </>
    )
}

export default OrgList