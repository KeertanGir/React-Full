function TodayMessage( {selectedDate} ){
    return(
        <h1>
        
          Today Date is  
           <strong> {selectedDate.getDate()} / 
          {selectedDate.getMonth()} /
          {selectedDate.getFullYear()}</strong> and Day is <strong>
          {selectedDate.toLocaleDateString( "en-Us", {
            weekday: "long"
          })} </strong>
        </h1>
    )
}

export default TodayMessage;