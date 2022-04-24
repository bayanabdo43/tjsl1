var colll= (startname,endnum,breaknum,continuenum) => {
    if(startname ==undefined || endnum==undefined || breaknum==undefined || continuenum==undefined){
        console.log("enter numbers")
    }
    else
    {
        for(i=startname;i<endnum;i++)
        {
            if (i==breaknum){
                break;
            }
            else if(i==continuenum){
                continue;
            }
            else{
                console.log(i)
            }
        }
    }
}
coll(2,10,6,2);