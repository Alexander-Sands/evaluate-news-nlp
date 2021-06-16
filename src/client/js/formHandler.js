// /* Global Variables */
let Results = document.getElementById('results');

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    console.log("::: Form Submitted :::")
    
    fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function(res) {
            let apiKey = res.myKey
            
            const formdata = new FormData();
            formdata.append("key", apiKey);
            
            if (formText === "") {
                alert("The Input Empty")
            } else if (formText.startsWith('http') === true) {
                formdata.append("url", formText);
            } else {
                formdata.append("txt", formText);
            }
            formdata.append("lang", "en");

            const requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

        const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)    
            .then(response => response.json())
                .then(response => {
                    // console.log(response)
                    if (formText !== "") {
                        Results.innerHTML = "Agreement : " + response.agreement
                        Results.innerHTML += "<br>Score Tag : " + response.score_tag
                        Results.innerHTML += "<br>Confidence : " + response.confidence
                        Results.innerHTML += "<br>Irony : " + response.irony
                        if ((formText.startsWith('http') !== true) && (formText.length > 30)) {
                            Results.innerHTML += "<br>Author : " + response.sentimented_entity_list[0]
                        } 
                    } 
                })
                .catch(e => console.log(e))

    })  

}

export { handleSubmit }