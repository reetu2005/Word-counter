document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.getElementById("text-area");
    const wordCount = document.getElementById("word-count");
  
    textArea.addEventListener("input", () => {
      const text = textArea.value;
      // Update word count (trim to avoid empty spaces at ends and filter empty elements)
      const words = text.trim().split(/\s+/).filter(Boolean);
      wordCount.textContent = words.length;
    });
  });
  