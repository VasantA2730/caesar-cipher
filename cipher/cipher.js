
function caesarCipher()
{
    let word = document.getElementById("word").value;
    let shift = parseInt(document.getElementById("shift").value);
    if(isNaN(shift))
    {
        alert("Input a number");
    }
    else{
        let retArr = [];
        const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        for(let i=0; i<word.length; i++)
        {
            for(let j=0; j<alpha.length; j++)
            {
               if(word.charAt(i)==alpha[j])
               {
                  retArr.push(alpha[(j+shift)%alpha.length]);
              }
            }
    }
    output(retArr.join('').toString());
    }
}

function output(out)
{
    var elem = document.getElementById("outputid").innerHTML = out;
}


