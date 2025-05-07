for(const text of document.querySelectorAll(".modal-action-text")) {
    const letters = text.textContent.split("");
    
    text.innerHTML = "";  
    
    letters.forEach((letter, index) => {
      const span = document.createElement("span");
      
      span.className = "modal-action-text-letter";
      
      span.style.animationDelay = `${index * 100}ms`;
      span.style.animationDuration = `${(letters.length * 100) + 1000}ms`;
      
      span.innerHTML = letter;
      
      text.appendChild(span);
    });
  }