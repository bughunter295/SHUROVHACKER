function hack() {
    const output = document.getElementById("output");
    output.innerHTML = "";
    
    const lines = [
      "[*] Connecting to remote server...",
      "[*] Bypassing firewall...",
      "[*] Escalating privileges...",
      "[+] Root access granted!",
      "[*] Injecting payload...",
      "[+] Payload deployed successfully.",
      "[*] Accessing system files...",
      "[+] Found admin credentials!",
      "[+] Downloading database...",
      "[+] Hack complete! 💀 SYSTEM PWNED!"
    ];
  
    let index = 0;
  
    const typing = setInterval(() => {
      if (index < lines.length) {
        typeLine(lines[index], output, () => index++);
      } else {
        clearInterval(typing);
      }
    }, 1500);
  }
  
  function typeLine(text, element, callback) {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        element.innerHTML += "<br>";
        clearInterval(interval);
        callback();
      }
    }, 30);
  }
  
