 var result    = "",
 result_2  = "",
 result_3  = "";
while (result != "yes") {
     result = prompt("Would you like to register ?",'');
 if (result == "yes"){
     alert( "Cool!" );
     
 }else{
     alert( "Try again" );
 }
}
result_2 = prompt("Enter your username ! ",'');
 
 if (result_2 == "admin"){
     result_3 = prompt("Enter your password ! ",'');
     if (result_3 == "i'm in charge")
        {
            alert( "Hello" );
        }else if(result_3 == null){
            alert( "cancellation" );
        }else{
            alert( "cancellation" );
        }
 }else if (result_2 == ""){
     alert( "cancellation" );
 }else if (result_2 == null){
      alert( "cancellation" );
     }else{
          alert( "Your name is not identified" );
     }
//     

      


 