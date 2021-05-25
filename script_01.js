
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."
// "Q" (question) --> "?"
// "E" (exclamation) --> "!"


/*** Funktion mit Array als Parameter */
// mögliche Tests:
ausgabe(getSentence(["Ich","bin","Peter"],"S"));
ausgabe(getSentence(["Bist","du","Peter"],"Q"));
ausgabe(getSentence(["Ich","bin"],"E"));
ausgabe(getSentence(["Ich","bin"],"#"));


function getSentence(arr,ending)
{   let str = "";  
    let gap = " ";
 
    
    for (let i = 0; i < arr.length; i++) 
    {
        if (i != arr.length - 1) 
        {
          str += arr[i] + gap;
        }
         else 

        {
            switch (ending)
    {
                case "S":
                str += arr[i] + ".";
                break;
                case "Q":
                str += arr[i] + "?";
                break;
                case "E":
                str += arr[i] + "!";
                break;
                default:
                str = "Bitte Satzzeichen eingeben"; 
                break;
               
            }        
        }
        
    }   
    return str;
}

//ausgabe("test!");  //check
function ausgabe(str) 
{
    console.log(str);    
}

