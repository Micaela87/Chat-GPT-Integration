const button = document.querySelector('button');
const question = document.getElementById('request');

getResponse = async (content) => {

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer API_KEY'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                    { role: "user", content },
            ],
        })
    });

    if (response.ok) {

        const responseToJson = await response.json();

        console.log(responseToJson.choices);
    }

}

button.addEventListener('click', (e) => {
    e.preventDefault();
    getResponse(question.value);
});
