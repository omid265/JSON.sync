Sync the JSON Object to the Json Object



Example

JSON.sync({
    from:{
        Person:{
            Name:'omid',
            LastName:'Matouri',
            Age:32
        }
    },
    to:{
        mainJson:"test"
    }

})

Result
from:
Person: {Name: "omid", LastName: "Matouri", Age: 32}

to:
Person: {Name: "omid", LastName: "Matouri", Age: 32}
mainJson: "test"


#   J S O N . s y n c  
 