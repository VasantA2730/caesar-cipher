let usdToEuros = 1;
let usdToRupees = 81.98;
let usdToYuan = 7.18;

function convert()
{
    let initType = document.getElementById("init").value;
    let curr = document.getElementById("initCurr").value;
    let finalType = document.getElementById("final").value;
    
    if(initType == "USD" || initType == "Euros")
    {
        if(finalType == "Rupees")
        {
            document.getElementById("outputid").innerHTML = (curr*usdToRupees).toFixed(2);
        }
        else if(finalType == "Yuan")
        {
            document.getElementById("outputid").innerHTML = (curr*usdToYuan).toFixed(2);
        }
        else
        {
            document.getElementById("outputid").innerHTML = curr;
        }
    }
    else if(initType == "Rupees")
    {
        if(finalType == "USD" || finalType == "Euros")
        {
            document.getElementById("outputid").innerHTML = (curr/usdToRupees).toFixed(2);
        }
        else if(finalType == "Yuan")
        {
            document.getElementById("outputid").innerHTML = (curr/usdToRupees*usdToYuan).toFixed(2);
        }
        else
        {
            document.getElementById("outputid").innerHTML = curr;
        }
    }
    else if(initType == "Yuan")
    {
        if(finalType == "USD" || finalType == "Euros")
        {
            document.getElementById("outputid").innerHTML = (curr/usdToYuan).toFixed(2);
        }
        else if(finalType == "Rupees")
        {
            document.getElementById("outputid").innerHTML = (curr/usdToYuan*usdToRupees).toFixed(2);
        }
        else
        {
            document.getElementById("outputid").innerHTML = curr;
        }
    }
}