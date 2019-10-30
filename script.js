(()=> {
    let url = "https://thatsthespir.it/api";
async function getData(){
    try {
        let response = await fetch(url);
        let data = await response.json()
        return (data)
    } catch (e) {
        console.error(e);
        alert("Ooops");
    }
} 
getData()
.then(data => {
    document.getElementById("quote").innerHTML = data.quote
    document.getElementById("author").innerHTML = data.author})
})();