let x = document.getElementsByTagName("input")[0];

let synonym = document.getElementById("synonym");
let antonym = document.getElementById("antonym");
let definition = document.getElementById("definition");
let sentence= document.getElementById("sentence");
let hear= document.getElementById("hear");

const syn = (i)=>
{
    let data = fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/{${i}}?key=b3b73004-8412-455e-a40a-2cfb3d87e9ee`)
    data
    .then(response => {
        if (!response.ok) {
          throw new Error('Sorry! Word not available');
        }
        return response.json();
      })
    .then(value => {
        let t = value[0]["meta"]["syns"][0];
        localStorage.setItem(i, t);
        let url = "output.html?value=" + encodeURIComponent("0" + t);
        window.location.href = url;
      })
    .catch(error => {
        let url = "output.html?value=" + encodeURIComponent("0Sorry! Word not available");
        window.location.href = url;
      })
}

// const ant = (i)=>
// {
//     let data = fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/{${i}}?key=b3b73004-8412-455e-a40a-2cfb3d87e9ee`)
//     data
//     .then(response=> {return response.json()})
//     .then(value => {let t =value[0]["meta"]["ants"];
// let url = "output.html?value="+encodeURIComponent("1"+t);
// window.location.href = url;})
// }

const ant = (i) => {
    let data = fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${i}?key=b3b73004-8412-455e-a40a-2cfb3d87e9ee`)
    data
    .then(response => {
        if (!response.ok) {
          throw new Error('Sorry! Word not available');
        }
        return response.json();
      })
    .then(value => {
        let t = value[0]["meta"]["ants"];
        let url = "output.html?value=" + encodeURIComponent("1" + t);
        window.location.href = url;
      })
    .catch(error => {
        let url = "output.html?value=" + encodeURIComponent("1Sorry! Word not available");
        window.location.href = url;
      })
  }
  

const def = (i)=>
{
    let data = fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/{${i}}?key=b3b73004-8412-455e-a40a-2cfb3d87e9ee`)
    data
    .then(response=>
        {
            if(!response.ok)
            {
                throw new Error('Sorry! Word not available');
            }
            return response.json()
        }
    )
    .then(value => 
        {
            let t = value[0]["def"][0]["sseq"][0][0][1]["dt"][0][1];
            let url = "output.html?value="+encodeURIComponent("2"+t);
            window.location.href = url;
        }
    )
    .catch(error=>
        {
            let url = "output.html?value="+encodeURIComponent("2Sorry! Word not available")
            window.location.href = url;
        }
    )
}
const sen = (i)=>
{
    let data = fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/{${i}}?key=b3b73004-8412-455e-a40a-2cfb3d87e9ee`)
    data
    .then(response=> 
        {
            if(!response.ok)
            {
                throw new Error("Sorry! Word not available");
            }
            return response.json()
        }
    )
    .then(value => 
        {
            let t = value[0]["def"][0]["sseq"][0][0][1]["dt"][1][1][0]["t"];
            let url = "output.html?value="+encodeURIComponent("3"+t);
            window.location.href = url;
        }
    )
    .catch(error=>
        {
            let url = "output.html?value="+encodeURIComponent("3Sorry! Word not available")
            window.location.href = url;
        }
    )
}

// const he = (i) => {
//     console.log(i)
//     fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${i}?key=b3b73004-8412-455e-a40a-2cfb3d87e9ee`)
//         .then(response => {return response.json()})
//         .then(data => {
//             let soundUrl = data[0]["hwi"]["prs"][0]["sound"]["audio"];
//             console.log(soundUrl);
//             let audio = new Audio(`https://media.merriam-webster.com/audio/prons/en/us/mp3/${soundUrl}.mp3`);
//             audio.play();
//         });
// };

// hear.onclick = ()=>{let i = x.value; he(i)}

synonym.onclick = ()=>{let i = x.value; syn(i)}
antonym.onclick = ()=>{let i = x.value; ant(i)}
definition.onclick = ()=>{let i = x.value; def(i)}
sentence.onclick = ()=>{let i = x.value; sen(i)}


let t_log = new URLSearchParams(window.location.search);
let x_log = t_log.get("value")
let y_log = t_log.get("value").length;
let ele_log = document.getElementById("login")
ele_log.innerHTML = x_log;
ele_log.style.backgroundColor = "orange";
ele_log.style.borderRadius = "50px";



// play a game
words = []