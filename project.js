let calcy = () =>{
    let web = document.querySelector("#webs").value;
    let maths = document.querySelector("#maths").value;
    let comp = document.querySelector("#comp").value;
    let phy = document.querySelector("#phy").value;
    let total;
    let percent;
    let grade = " ";

    total = parseInt(web) + parseInt (maths) + parseInt(comp) + parseInt(phy);
    alert(total);

    percent = (total/400) * 100;
    alert(percent + "%");
    
    if(percent <= 100 && percent >= 80)
    {
        grade ="A";  
        alert(grade);    
    }
    else if(percent <= 79 && percent >= 60)
    {
        grade ="B";  
        alert(grade);
    }
    else if(percent <= 59 && percent >= 40)
    {
        grade ="c";  
        alert(grade);
    }
    else
    {
        grade ="f";  
        alert(grade);
    }
    document.getElementById("notes").innerText = `out of 400 your total marks ${total} and your grades is ${grade}`; 

}

    // dynamic chnge grdaes and marks by user
