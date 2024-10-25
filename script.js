// Fetch the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Add this line to check if data is loaded
        const container = document.getElementById('card-container');
        
        // Proceed with generating cards
        data.forEach(person => {
            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = person.image_url;
            img.alt = person.Name;
            card.appendChild(img);

            const name = document.createElement('h3');
            name.textContent = person.Name;
            card.appendChild(name);

            const date = document.createElement('p');
            date.classList.add('date');
            date.textContent = `Born: ${person.date_of_birth}, Died: ${person.date_of_death || "Unknown"}`;
            card.appendChild(date);

            const desc = document.createElement('p');
            desc.textContent = person.short_description;
            card.appendChild(desc);

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching the data:', error);
    });
