let url="http://universities.hipolabs.com/search?name=";
let country="india";

let btn=document.querySelector("#btn");
let list=document.querySelector("#list");


btn.addEventListener("click",async ()=>{
    let countryCol= await getColleges();
    let state=document.querySelector("#state").value;
    list.innerText="";
    
    show(state,countryCol);
});

function show(state,countryCol){
    for(let col of countryCol){
        if(col["state-province"] == state){
            let li=document.createElement("li");
            li.innerText=col.name;
            list.appendChild(li);
        }
    }
}

async function getColleges(){
    try{
        let res= await axios.get(url+country);
        console.log(res.data);
        return res.data;
    }
    catch(err){
        return [];
    }
}

