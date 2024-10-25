fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('card-container');
        
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

            const button = document.createElement('a');
            button.classList.add('button');
            button.href = "#";
            button.textContent = "More Info";
            button.addEventListener('click', (e) => {
                e.preventDefault();
                alert(`More about ${person.Name}: \n${person.long_description || "Description not available."}`);
            });
            card.appendChild(button);

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching the data:', error);
    });
