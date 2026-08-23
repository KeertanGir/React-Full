function PastMessage( { selectedDate } ){
         <h1>
        
          In Past It was the date  
           <strong> {selectedDate.getDate()} / 
          {selectedDate.getMonth()} /
          {selectedDate.getFullYear()}</strong> and Day is <strong>
          {selectedDate.toLocaleDateString( "en-Us", {
            weekday: "long"
          })} </strong>
        </h1>
}

export default PastMessage;