function FutureMessage( { selectedDate } ){
         
       return( <h1>
        
           In Future it whould be the date   
           <strong> {selectedDate.getDate()} / 
          {selectedDate.getMonth()} /
          {selectedDate.getFullYear()}</strong> and Day is <strong>
          {selectedDate.toLocaleDateString( "en-Us", {
            weekday: "long"
          })} </strong>
        </h1>
        )
}

export default FutureMessage;