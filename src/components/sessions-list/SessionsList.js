import React from 'react';
import {getData} from '../../services/getData'
function SessionsList( { searchRef,newsRef,sectionRef,typeRef,fromRef,toRef } ) {
    const [ sessions, setSessions ] = React.useState( [] );

    React.useEffect(() => {
            getData(searchRef,newsRef,sectionRef,typeRef,fromRef,toRef )
            .then( sessions => {
                setSessions( sessions );
                console.log( sessions );
            })
            .catch( error => console.log( error.message ) );
    }, [ ]);

    return (
        <React.Fragment>
            <div>
               {sessions.response.docs.abstract}
            </div>
           
        </React.Fragment>
    );
}

export default SessionsList;