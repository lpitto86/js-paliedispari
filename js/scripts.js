function checkPalindromo() {
      const inputElement = document.getElementById('inputWord');
      const resultElement = document.getElementById('result');
  
      // Ottieni la parola inserita dall'utente
      const inputWord = inputElement.value.toLowerCase(); // Converti la parola in minuscolo
  
      // Verifica se la parola è un palindromo
      if (isPalindromo(inputWord)) {
          resultElement.textContent = 'La parola è un palindromo!';
      } else {
          resultElement.textContent = 'La parola non è un palindromo.';
      }
  }
  
  // Funzione per verificare se una parola è un palindromo
  function isPalindromo(word) {
      // Rimuovi spazi e caratteri speciali dalla parola
      const cleanedWord = word.replace(/[^a-zA-Z]/g, '');
  
      // Confronta la parola con la sua versione inversa
      const reversedWord = cleanedWord.split('').reverse().join('');
      return cleanedWord === reversedWord;
  }

  function playGame() {
      const userInputElement = document.getElementById('userInput');
      const resultElement = document.getElementById('result');
  
      // Ottieni il numero inserito dall'utente
      const userNumber = parseInt(userInputElement.value);
  
      // Verifica se il numero è compreso tra 1 e 5
      if (userNumber >= 1 && userNumber <= 5) {
          // Genera un numero casuale da 1 a 5 per il computer
          const computerNumber = generateRandomNumber();
  
          // Somma i due numeri
          const sum = userNumber + computerNumber;
  
          // Determina se la somma è pari o dispari
          const isSumEven = isEven(sum);
  
          // Mostra i numeri e se la somma è pari o dispari
          resultElement.textContent = `Il tuo numero: ${userNumber}\nNumero del computer: ${computerNumber}\nSomma: ${sum}\n${isSumEven ? 'La somma è pari!' : 'La somma è dispari!'}`;
      } else {
          resultElement.textContent = 'Inserisci un numero compreso tra 1 e 5.';
      }
  }
  
  // Funzione per generare un numero casuale da 1 a 5
  function generateRandomNumber() {
      return Math.floor(Math.random() * 5) + 1;
  }
  
  // Funzione per determinare se un numero è pari o dispari
  function isEven(number) {
      return number % 2 === 0;
  }