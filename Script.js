        const generateForm = document.querySelector(".generate-form");
        const imageGallery = document.querySelector(".image-gallery");
        
        async function generateAiImages(prompt) {
            const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;
            imageGallery.innerHTML = `
                <div class='img-card'>
                    <img src="${imageUrl}" alt="Generated Image">
                    <a href="${imageUrl}" class="download-btn" download="image.jpg">Download</a>
                </div>
            `;
        }
        
        generateForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const prompt = event.target[0].value;
            generateAiImages(prompt);
        });
