// script.js
document.getElementById('inputText').addEventListener('input', function() {
    let text = this.value;

    // Count characters
    let charCount = text.length;

    // Count words
    let wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;

    // Count sentences
    let sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;

    // Count paragraphs
    let paragraphCount = text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0).length;

    // Update the results in the HTML
    document.getElementById('charCount').textContent = charCount;
    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('sentenceCount').textContent = sentenceCount;
    document.getElementById('paragraphCount').textContent = paragraphCount;
});
