fetch("components/footer.html")
.then((res) => {return res.text()})
.then(data => {
    document.getElementById("footer").innerHTML = data;
    // console.log(data);
    
})
.catch((err) => {
    console.log(err);
    
})